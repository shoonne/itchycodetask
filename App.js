import React, { Component } from 'react';
import { View, Text } from 'react-native';

import font from './assets/fonts/Poppins-Bold.ttf'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontFamily:'Poppins-Bold' }}> App </Text>
        <Text style={{fontFamily:'Corben-Bold'}}>Hello World</Text>
      </View>
    );
  }
}
