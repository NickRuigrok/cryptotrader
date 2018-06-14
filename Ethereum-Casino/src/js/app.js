App = {
  web3Provider: null,
  contracts: {},

  init: function() {
    App.setupListeners();
    return App.initWeb3();
  },

  initWeb3: function() {
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      web3 = new Web3(App.web3Provider);
    }
    return App.initContract();
  },

  initContract: function() {
    $.getJSON("Casino.json", function(casino) {

      App.contracts.Casino = TruffleContract(casino);

      App.contracts.Casino.setProvider(App.web3Provider);

      return App.render();
    });
  },

  login: function() {
    web3.eth.getCoinbase(function(err, account) {
      if (err === null) {
        App.account = account;
        if(account != null) {
          $("#account").html(account);
          web3.eth.getBalance(account,'latest', function(error, result){
          if(!error) {
            let bal = JSON.stringify(result).replace(/\"/g, '');
            var balance = bal/1e18;
            if (bal == 0) {
              balance = 0;
            }
            $("#accountBalance").html((Math.floor(balance * 100) / 100).toFixed(2) + " Ether");
          } else {
            console.error(error);
          }
        });
        } else {
          $('#account').html('Not logged in...');
        }
      }
    });
  },

  updateData: function() {
    contractInstance.numberOfBets().then(function(result) {
        $('#numberOfBets').html(parseInt(result));
      });

      contractInstance.totalBet().then(function(result) {
        $('#totalBet').html((parseFloat(result) / 1e18) + ' Ether');
      });

      contractInstance.minimumBet().then(function(result) {
        $('#minimumBet').html(parseFloat(web3.fromWei(result)) + ' Ether');
        $('#bet-input').attr('placeholder', parseFloat(web3.fromWei(result)));
      });

      contractInstance.maxAmountOfBets().then(function(result) {
        $('#maxAmountOfBets').html(parseInt(result));
      });
  },

  setupListeners: function() {
     let liNodes = document.querySelectorAll('li');
     liNodes.forEach(number => {
        number.addEventListener('click', event => {
           event.target.className = 'number-selected';
           App.voteNumber(parseInt(event.target.innerHTML), done => {
              for(let i = 0; i < liNodes.length; i++) {
                 liNodes[i].className = '';
              }
           })
        })
     })
  },

  voteNumber: function(number, cb) {
     let bet = $('#bet-input').val();
     if(!bet) bet = 0.01;
     if(parseFloat(bet) < 0.01) {
        alert('You must bet atleast 0.01 Ether');
        cb();
     } else {
        contractInstance.bet(number, {
           gas: 300000,
           gasPrice: (5 * 1e9),
           from: web3.eth.accounts[0],
           value: web3.toWei(bet, 'ether')
        });
     }
  },

  render: function() {
    App.contracts.Casino.deployed().then(function(instance) {
      contractInstance = instance;
      
      App.login();
      App.updateData();
    });
  }
};

var account = web3.eth.accounts[0];
web3.currentProvider.publicConfigStore.on('update', function() {
   if (web3.eth.accounts[0] !== account) {
    account = web3.eth.accounts[0];
    App.render();
  }
});

$(function() {
  $(window).load(function() {
    App.init();
  });
});
