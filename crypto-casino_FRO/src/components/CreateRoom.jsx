import React, { Component } from 'react';
import { Modal, Header, Form, Label, Button, Popup, Icon } from 'semantic-ui-react';

class CreateRoom extends Component {
    constructor(props) {
        super(props);
        this.state = { inputValues: [], minPlayersVal: 2, maxPlayersVal: '' };
    }

    render() {
      return (
        <Modal size='tiny' trigger={<Button primary>Create Room</Button>} basic>
            <Header icon='game' content='Create Room' />
            <Modal.Content>
                <Form inverted>
                    <Form.Input  label='Room Name' placeholder='Room Name' name='roomName' onChange={evt => this.updateData(evt)}/>
                    <Form.Group widths="equal">
                        <Form.Input type='number' label='Bet' min='0.1' step='0.1' placeholder='Bet' name='bet' onChange={evt => this.updateData(evt)}/>
                        <Popup horizontalOffset='5' position='right center' trigger={<Form.Input type='number' label='Max. Bets (Per Player)' min='1' max='10' step='1' placeholder='Max. Bets (Per Player)' name='maxBets' onChange={evt => this.updateData(evt)}/>} content='Hello. This is an inverted popup' on='focus'/>
                    </Form.Group>
                    <Popup horizontalOffset='5' position='right center' trigger={<Form.Input type='number' label='Bet Multiplier' min='1' step='0.1' placeholder='Bet Multiplier' name='betMultiplier' onChange={evt => this.updateData(evt)}/>} content='Hello. This is an inverted popup' on='focus'/>
                    <Form.Group widths="equal">
                        <Form.Input type='number' label='Min. Players' min='2' step='1' max={this.state.inputValues['maxPlayers']} placeholder='Min. Players' name='minPlayers' onChange={evt => this.updateData(evt)}/>
                        <Form.Input type='number' label='Max. Players' min={this.state.inputValues['minPlayers']} step='1' placeholder='Max. Players' name='maxPlayers' onChange={evt => this.updateData(evt)}/>
                    </Form.Group>
                </Form>
            </Modal.Content>
            <Modal.Actions>
            <Button basic color='red' inverted>
                <Icon name='remove' /> Cancel
            </Button>
            <Button color='green' inverted onClick={this.submitData.bind(this)}>
                <Icon name='checkmark' /> Create
            </Button>
            </Modal.Actions>
        </Modal>
      );
    }

    updateData(evt) {
        var value = evt.target.value;
        var name = evt.target.name;
        var inputValues = this.state.inputValues;
        inputValues[name] = value;
        this.setState({
            inputValues
        });
    }

    submitData() {
        if(Object.keys(this.state.inputValues).length == 6 && Object.values(this.state.inputValues).indexOf("") < 0) {
            
            console.log(this.state.inputValues);
        } else {
            console.log("Please fill in all input fields!");
        }
    }

    updateMinPlayers(evt) {
        this.setState({
          minPlayersVal: evt.target.value
        });
    }

    updateMaxPlayers(evt) {
        this.setState({
          maxPlayersVal: evt.target.value
        });
    }
  }
  
  export default CreateRoom;