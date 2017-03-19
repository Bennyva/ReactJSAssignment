//sample react component

import React, { Component } from 'react';
import Header from './Header.js';

import { Link} from 'react-router';




class App extends Component {
constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
export default App;
