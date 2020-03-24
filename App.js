import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Question from './src/components/Question';
import QuestionCounter from './src/components/QuestionCounter';
import color from './constants/Colors';
import questions from './constants/Questions';
import Button from './src/components/Button';
import Header from './src/components/Header';
import Colors from './constants/Colors';

function convertData(arr) {
  // Convert data to desired format. 
  var newArr = arr.reduce(function(res, current) {
    return Object.assign(res, current);
  }, {});

  return newArr;
}

function renderWidth(page) {
  switch (page) {
    case 1:
      return '5%'
    case 2:
      return '15%'
    case 3:
      return '25%'
    case 4:
      return '35%'
    case 5:
      return '45%'
    case 6:
      return '55%'
    case 7:
      return '65%'
    case 8:
      return '75%'
    case 9:
      return '85%'
    case 10:
      return '100%'
  
    default:
      return 0;
  }
}



const App = () => {
  // This is for controlling the active question
  const [questionNumber, setQuestionNumber] = useState(0);
  // This is for collection the data from questions
  const [data, setData] = useState([]);
  // This is used to store the desired format 
  const [result, setResult] = useState()

  // This is for the key in the result object
  let activeQuestion = (questionNumber + 1).toString();

  // If we have reached the 10th question, 
  // reset the states and convert and store the result 
  if(questionNumber === 10) {
    setQuestionNumber(0)
    setResult(convertData(data));
    setData([])
  }

  useEffect(()=> {
    if(result) {
      console.log(result)
    }
  })


    return (
      <View style={styles.container}>
      <Header text="Välmående DLQ!"/>
      <QuestionCounter questionNumber={questionNumber}/>
      <Question question={questions[questionNumber >= 10 ? 0 : questionNumber].question}/>
      {  questionNumber === 7 ? 
        <View style={{marginBottom:100}}>
          <Button onPress={() => setQuestionNumber(questionNumber + 1)} text="Ja"/>
          <Button text="Nej"/>
        </View>   
        :   
        <View style={{marginBottom: 100}}>
            <Button
              text={"Väldigt mycket"}
              onPress={() => {
                setQuestionNumber(questionNumber + 1);
                setData([...data, {["question" + activeQuestion]: 3}])
                }}
              />

            <Button
            text={"En hel del"}
            onPress={() => {
              setQuestionNumber(questionNumber + 1);
              setData([...data, {["question" + activeQuestion]: 2}])
              }}
            />
            <Button
            text={"Lite grann"}
            onPress={() => {
              setQuestionNumber(questionNumber + 1);
              setData([...data, {["question" + activeQuestion]: 1}])
              }}
            />
            <Button
            text={"Inte alls"}
            onPress={() => {
              setQuestionNumber(questionNumber + 1);
              setData([...data, {["question" + activeQuestion]: 0}])
              }}
            />
          </View>}
          <View style={[styles.overlay, {left: renderWidth(questionNumber)}]}/>
          </View>

    );
}

const styles = {
  container: {
    flex:1,
    alignItems:'center',
    backgroundColor:color.background,
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.backgroundOverlay,
    opacity: 0.5,
    zIndex:-1
  },
}

export default App;
