import React, { Component, useState, useReducer, useEffect } from 'react';
import { View,Text, TouchableOpacity } from 'react-native';
import Question from './src/components/Question';
import QuestionCounter from './src/components/QuestionCounter';
import color from './constants/Colors';
import questions from './constants/Questions';

let arr = []
let question = 0

const initialState = {count:0};

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT_BY_3':
      return {count: state.count + 3};
    default:
      throw new Error();
  }
}

function convertData(arr) {
var newArr = arr.reduce(function(result, current) {
  return Object.assign(result, current);
}, {});

return newArr;
}

const App = () => {
  var scope = this;
  const [state, dispatch] = useReducer(reducer, initialState);
  const [points, setPoint] = useState(0);
  const [data, setData] = useState([]);

  if(points === 10) {
    setPoint(0)
    setData(convertData(data));
  }

  useEffect(() => {
    console.log(data)
  })

    return (
      <View style={styles.container}>
        <QuestionCounter 
        questionNumber={points}/>
        <Question 
        question={questions[points >= 10 ? 0 : points].question}/>
        <View style={{flex:1}}>
        </View>
        <View>
          <TouchableOpacity 
          onPress={() => { 
            setPoint(points + 1);
            setData([...data, {['Question ' + (points + 1).toString()]: 3}])
            }}
          style={styles.btn}>
            <Text style={styles.btnText}>Väldigt Mycket</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => {
            setPoint(points + 1);
            setData([...data, {['Question ' + (points + 1).toString()]: 2}])
          }}
          style={styles.btn}>
            <Text style={styles.btnText}>En hel del</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => {
            setPoint(points + 1);
            setData([...data, {['Question ' + (points + 1).toString()]: 1}])
          }}
          style={styles.btn}>
            <Text style={styles.btnText}>Lite grann</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => {
            setPoint(points + 1);
            setData([...data, {['Question ' + (points + 1).toString()]: 0}])
          }}
          style={styles.btn}>
            <Text style={styles.btnText}>Inte alls</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = {
  container: {
    flex:1,
    alignItems:'center',
    backgroundColor:color.background
  },

  btn : {
    width: 330, 
    height:50, 
    borderRadius: 26, 
    backgroundColor:color.buttonBackground, 
    justifyContent:'center',
    marginBottom:10,

  },

  btnText: {
    textAlign:'center', 
    color: color.textColor
  }

}

export default App;
