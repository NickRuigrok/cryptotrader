import React, { Component } from 'react';
import { Grid, Segment, Table, Header, Divider, Breadcrumb, Icon, Sticky, Rail, Button } from 'semantic-ui-react';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleContextRef = contextRef => this.setState({ contextRef })

    render() {
    const { contextRef } = this.state

      return (
        <Grid ref={this.handleContextRef}>
            <Grid.Column width={3}></Grid.Column>
            <Grid.Column width={10}>
                <Breadcrumb className='small margin' size='large'>
                    <Breadcrumb.Section><a href='#'>Lucky Number</a></Breadcrumb.Section>
                    <Breadcrumb.Divider icon='right chevron' />
                    <Breadcrumb.Section><a href='#'>Room List</a></Breadcrumb.Section>
                    <Breadcrumb.Divider icon='right chevron' />
                    <Breadcrumb.Section active>Room #12345</Breadcrumb.Section>
                </Breadcrumb>
                <Segment textAlign='center' className='no-margin'>
                    <Header as='h3' dividing>Choose your Lucky Number</Header>
                        <Button basic primary size='massive'>1</Button>
                        <Button basic primary size='massive'>2</Button>
                        <Button basic primary size='massive'>3</Button>
                        <Button basic primary size='massive'>4</Button>
                        <Button basic primary size='massive'>5</Button>
                        <Button basic primary size='massive'>6</Button>
                        <Button basic primary size='massive'>7</Button>
                        <Button basic primary size='massive'>8</Button>
                        <Button basic primary size='massive'>9</Button>
                        <Button basic primary size='massive' style={{padding: '.78571429em 1.2em .78571429em'}}>10</Button>
                </Segment>
                <Segment className='no-padding'>
                    <Table striped basic='very' columns={5}>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Address</Table.HeaderCell>
                            <Table.HeaderCell>Amount of Bet</Table.HeaderCell>
                            <Table.HeaderCell>Lucky Number</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                        <Table.Row>
                            <Table.Cell><a href='#'>0x0a780701bB9a2310cf04B1dc09719f4aB8b88142</a></Table.Cell>
                            <Table.Cell>0.5 ETH</Table.Cell>
                            <Table.Cell>6</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><a href='#'>0x0a780701bB9a2310cf04B1dc09719f4aB8b88142</a></Table.Cell>
                            <Table.Cell>0.5 ETH</Table.Cell>
                            <Table.Cell>6</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><a href='#'>0x0a780701bB9a2310cf04B1dc09719f4aB8b88142</a></Table.Cell>
                            <Table.Cell>0.5 ETH</Table.Cell>
                            <Table.Cell>6</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><a href='#'>0x0a780701bB9a2310cf04B1dc09719f4aB8b88142</a></Table.Cell>
                            <Table.Cell>0.5 ETH</Table.Cell>
                            <Table.Cell>6</Table.Cell>
                        </Table.Row>
                        </Table.Body>
                    </Table>
                </Segment>
            </Grid.Column>
            <Grid.Column width={3}>
                <Rail>
                    <Sticky context={contextRef} offset={100}>
                    <Segment className='no-padding'>
                        <Header as='h3' style={{padding: '20px 0 0 15px'}}>
                            <Icon name='settings' />
                            <Header.Content>Room Settings</Header.Content>
                        </Header>
                        <Divider className='no-margin'/>
                        <Table striped basic='very' className='no-margin'>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell className='bold'>Standard Bet:</Table.Cell>
                                    <Table.Cell>0.5 ETH</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell className='bold'>Next Bet: (x1.2)</Table.Cell>
                                    <Table.Cell>0.6 ETH</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell className='bold'>Max. Amount of Bets:</Table.Cell>
                                    <Table.Cell>3</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell className='bold'>Min. Players:</Table.Cell>
                                    <Table.Cell>5</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell className='bold'>Max. Players:</Table.Cell>
                                    <Table.Cell>12</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                        <Divider className='no-margin'/>
                        <div style={{padding: '8px 12px 10px'}}>
                            <span className='small margin bold'>Room Creator:</span><a href='#' className='word-wrap'> 0x0a780701bB9a2310cf04B1dc09719f4aB8b88142</a>
                        </div>
                    </Segment>
                    </Sticky>
                </Rail>
            </Grid.Column>
        </Grid>
      );
    }
  }
  
  export default Game;