import React, { Component } from 'react';
import { Container, Grid, Segment, Statistic } from 'semantic-ui-react';

class Stats extends Component {
    render() {
      return (
          <Container className='small padding'>
        <Segment padded>
            <Grid  stackable centered columns='equal'>
                <Grid.Column textAlign='center'>
                    <Statistic>
                        <Statistic.Value>22</Statistic.Value>
                        <Statistic.Label>Total Rooms</Statistic.Label>
                    </Statistic>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                    <Statistic>
                        <Statistic.Value>34.78</Statistic.Value>
                        <Statistic.Label>Total Ether</Statistic.Label>
                    </Statistic>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                    <Statistic>
                        <Statistic.Value>123</Statistic.Value>
                        <Statistic.Label>Total Bets</Statistic.Label>
                    </Statistic>
                </Grid.Column>
            </Grid>
        </Segment>
        </Container>
      );
    }
  }
  
  export default Stats;