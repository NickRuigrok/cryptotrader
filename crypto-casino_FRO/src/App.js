import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';


import NavigationBar from './components/NavigationBar';
import Stats from './components/Stats';
import RoomList from './components/RoomList';
import Room from './components/Room';
import Toast from './components/Toast';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavigationBar/>

          <Stats/>
          <RoomList/>

          {/* <Room/> */}

          <Toast/>
      </div>
    );
  }
}

export default App;
