import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react';

import CreateRoom from './CreateRoom';

class NavigationBar extends Component {
    render() {
      return (
        <Menu>
            <Menu.Menu position='right'>
              <Menu.Item>
                <CreateRoom/>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
      );
    }
  }
  
  export default NavigationBar;