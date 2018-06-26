import React, { Component } from 'react';
import { Modal, Header, Form, Input, Button, Icon } from 'semantic-ui-react';

class QuickBet extends Component {
    render() {
      return (
        <Modal size='large' trigger={<Button basic primary>Quick Bet</Button>} basic className='quickBet'>
            <Header icon='ethereum' content='Quick Bet' />
            <Modal.Content>
                <Button basic inverted size='massive' color='primary'>1</Button>
                <Button basic inverted size='massive' color='primary'>2</Button>
                <Button basic inverted size='massive' color='primary'>3</Button>
                <Button basic inverted size='massive' color='primary'>4</Button>
                <Button basic inverted size='massive' color='primary'>5</Button>
                <Button basic inverted size='massive' color='primary'>6</Button>
                <Button basic inverted size='massive' color='primary'>7</Button>
                <Button basic inverted size='massive' color='primary'>8</Button>
                <Button basic inverted size='massive' color='primary'>9</Button>
                <Button basic inverted size='massive' color='primary' style={{padding: '.78571429em 1.2em .78571429em'}}>10</Button>
            </Modal.Content>
            <Modal.Actions>
            <Button basic color='red' inverted>
                <Icon name='remove' /> Cancel
            </Button>
            <Button color='green' inverted>
                <Icon name='checkmark' /> Confirm
            </Button>
            </Modal.Actions>
        </Modal>
      );
    }
  }
  
  export default QuickBet;