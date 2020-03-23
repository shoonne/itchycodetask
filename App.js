import React, { Component, useState, useReducer } from 'react';
import { View,Text, TouchableOpacity } from 'react-native';
import Question from './src/components/Question';
import QuestionCounter from './src/components/QuestionCounter';
import color from './constants/Colors';

const questions = [
  {question:'Hur mycket har din hud kliat, svidit, bränt och stuckit under den senaste veckan?', number:'1'},
  {question:'Hur generad eller osäker på Dig själv har du varit på grund av din hud under den senaste veckan?', number:'2'},
  {question:'Hur mycket har din hud hindrat dig från att gå och handla, sköta ditt hem eller trädgård under den senaste veckan?', number:'3'},
  {question:'Hur mycket har din hud inverkat på din klädsel under den senaste veckan?', number:'4'},
  {question:'Hur mycket har din hud påverkat sociala aktiviteter eller fritidsaktiviteter under den senaste veckan?', number:'5'},
  {question:'Hur mycket har din hud förhindrat dig att utöva sport under den senaste veckan?', number:'6'},
  {question:'Har din hud förhindrat dig att arbeta eller studera under den senaste veckan?', number:'7'},
  {question:'Hur mycket har din hud varit ett problem under arbetet eller studierna?', number:'8'},
  {question:"Hur mycket problem har din hud förorsakat dig i relationen med din partner eller någon av dina nära vänner eller släktingar under den senaste veckan?", number:'9'},
  {question:'Hur mycket problem har din hud förorsakat dig i relationen med din partner eller någon av dina nära vänner eller släktingar under den senaste veckan?', number:'10'},
]

let arr = []
let question = 0

const initialState = {count: 0, question: 1};

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT_BY_3':
      return {count: state.count + 3};
    default:
      throw new Error();
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [points, setPoint] = useState(0);

  if(points >= 10) {
    setPoint(0)
  }

    return (
      <View style={styles.container}>
        <QuestionCounter 
        questionNumber={points}/>
        <Question 
        question={questions[points >= 10 ? 0 : points].question}/>
        {console.log(points)}
        <View style={{flex:1}}>
        </View>
        <View>
          <TouchableOpacity 
          onPress={() => { setPoint(points + 1)}}
          style={styles.btn}>
            <Text style={styles.btnText}>Väldigt Mycket</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => { setPoint(points + 1)}}
          style={styles.btn}>
            <Text style={styles.btnText}>En hel del</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => { setPoint(points + 1)}}
          style={styles.btn}>
            <Text style={styles.btnText}>Lite grann</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => { setPoint(points + 1)}}
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
