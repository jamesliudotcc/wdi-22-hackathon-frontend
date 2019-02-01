import React, { Component } from 'react';
import {Button, Icon} from 'react-materialize';

class Home extends Component {
  render() {
    return(
      <div>
        <p>An App To help Roomates with Groceries!</p>
        <Button waves='light'>EDIT ME<Icon left>save</Icon></Button>
      </div>
        

      );
  }
}

export default Home;
