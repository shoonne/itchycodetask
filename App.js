import React, { Component } from 'react';
import Home from './src/components/Home';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Home/>
    );
  }
}
