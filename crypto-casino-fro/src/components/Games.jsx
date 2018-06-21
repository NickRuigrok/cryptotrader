import React, { Component } from 'react';
import { Segment, Table, Button } from 'semantic-ui-react';

class Games extends Component {
    render() {
      return (
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
                <Table.Row title='Game Creator: 0x1234567891234567'>
                    <Table.Cell>Game 1</Table.Cell>
                    <Table.Cell>1.25 ETH</Table.Cell>
                    <Table.Cell>0.25 ETH</Table.Cell>
                    <Table.Cell>11:08 21/06/2018</Table.Cell>
                    <Table.Cell textAlign='center'>
                        <Button primary>View</Button>
                        <Button basic primary>Quick Join</Button>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Game 2</Table.Cell>
                    <Table.Cell>0.5 ETH</Table.Cell>
                    <Table.Cell>0.05 ETH</Table.Cell>
                    <Table.Cell>10:29 21/06/2018</Table.Cell>
                    <Table.Cell textAlign='center'>
                        <Button primary>View</Button>
                        <Button basic primary>Quick Join</Button>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Game 3</Table.Cell>
                    <Table.Cell>0.08 ETH</Table.Cell>
                    <Table.Cell>0.02 ETH</Table.Cell>
                    <Table.Cell>22:34 20/06/2018</Table.Cell>
                    <Table.Cell textAlign='center'>
                        <Button primary>View</Button>
                        <Button basic primary>Quick Join</Button>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Game 4</Table.Cell>
                    <Table.Cell>0.08 ETH</Table.Cell>
                    <Table.Cell>0.02 ETH</Table.Cell>
                    <Table.Cell>22:34 20/06/2018</Table.Cell>
                    <Table.Cell textAlign='center'>
                        <Button primary>View</Button>
                        <Button basic primary>Quick Join</Button>
                    </Table.Cell>
                </Table.Row>
                </Table.Body>
            </Table>
        </Segment>
      );
    }
  }
  
  export default Games;