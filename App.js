import React, { Component, createContext } from 'react';
import { View,Button } from 'react-native';
import Question from './src/components/Question';
import QuestionCounter from './src/components/QuestionCounter';
import color from './constants/Colors';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <View style={styles.container}>
        <QuestionCounter/>
        <Question/>

      </View>
    );
  }
}

const styles = {
  container: {
    flex:1,
    alignItems:'center',
    backgroundColor:color.background
  }
}
