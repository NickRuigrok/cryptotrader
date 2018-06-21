import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import Stats from './components/Stats';
import Games from './components/Games';

import { Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Stats/>
          <Games/>
        </Container>
      </div>
    );
  }
}

export default App;
