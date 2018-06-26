import React, { Component } from 'react';
import { Message, } from 'semantic-ui-react';

class Toast extends Component {
    render() {
      return (
        <Message size='large' className='toast animated zoomInRight' negative>
            <Message.Header>
                Game #2018
            </Message.Header>
            <Message.Content>
                Congratulations, <b>You Won 2.1 ETH!</b>
            </Message.Content>
        </Message>
      );
    }
  }
  
  export default Toast;