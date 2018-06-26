import React, { Component } from 'react';
import { Container, Segment, Table, Popup, Button } from 'semantic-ui-react';

import QuickBet from './QuickBet';

class RoomList extends Component {

    render() {
      return (
          <Container className='small padding'>
          <Segment className='no-padding'>
            <Table striped basic='very' columns={5}>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>In-game Bets</Table.HeaderCell>
                    <Table.HeaderCell>Bet</Table.HeaderCell>
                    <Table.HeaderCell>Date Created</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row title='Room Creator: 0x1234567891234567'>
                        <Table.Cell>Game 1</Table.Cell>
                        <Table.Cell>1.25 ETH</Table.Cell>
                        <Table.Cell>0.25 ETH</Table.Cell>
                        <Table.Cell>11:08 21/06/2018</Table.Cell>
                        <Table.Cell textAlign='center'>
                            <Button primary>View</Button>
                            <QuickBet/>
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row title='Room Creator: 0x1234567891234567'>
                        <Table.Cell>Game 1</Table.Cell>
                        <Table.Cell>1.25 ETH</Table.Cell>
                        <Table.Cell>0.25 ETH</Table.Cell>
                        <Table.Cell>11:08 21/06/2018</Table.Cell>
                        <Table.Cell textAlign='center'>
                            <Button primary>View</Button>
                            <QuickBet/>
                        </Table.Cell>
                    </Table.Row>
                        
                    <Table.Row title='Room Creator: 0x1234567891234567'>
                        <Table.Cell>Game 1</Table.Cell>
                        <Table.Cell>1.25 ETH</Table.Cell>
                        <Table.Cell>0.25 ETH</Table.Cell>
                        <Table.Cell>11:08 21/06/2018</Table.Cell>
                        <Table.Cell textAlign='center'>
                            <Button primary>View</Button>
                            <QuickBet/>
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row title='Room Creator: 0x1234567891234567'>
                        <Table.Cell>Game 1</Table.Cell>
                        <Table.Cell>1.25 ETH</Table.Cell>
                        <Table.Cell>0.25 ETH</Table.Cell>
                        <Table.Cell>11:08 21/06/2018</Table.Cell>
                        <Table.Cell textAlign='center'>
                            <Button primary>View</Button>
                            <QuickBet/>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </Segment>
        </Container>
      );
    }
  }
  
  export default RoomList;