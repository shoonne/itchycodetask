import React, { useState } from 'react';
import { View } from 'react-native';
import Question from './src/components/Question';
import QuestionCounter from './src/components/QuestionCounter';
import color from './constants/Colors';
import questions from './constants/Questions';
import Button from './src/components/Button';

function convertData(arr) {
  // Convert data to desired format. 
  var newArr = arr.reduce(function(res, current) {
    return Object.assign(res, current);
  }, {});

  return newArr;
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


    return (
      <View style={styles.container}>
        <QuestionCounter 
        questionNumber={questionNumber}/>
        <Question question={questions[questionNumber >= 10 ? 0 : questionNumber].question}/>
        <View>
          <Button
            text={"Väldigt mycket"}
            onPress={() => {
              setQuestionNumber(questionNumber + 1);
              setData([...data, {[`Question${activeQuestion}`]: 3}])
              }}
            />

          <Button
          text={"En hel del"}
          onPress={() => {
            setQuestionNumber(questionNumber + 1);
            setData([...data, {[`Question${activeQuestion}`]: 2}])
            }}
          />
          <Button
          text={"Lite grann"}
          onPress={() => {
            setQuestionNumber(questionNumber + 1);
            setData([...data, {[`Question${activeQuestion}`]: 1}])
            }}
          />
          <Button
          text={"Inte alls"}
          onPress={() => {
            setQuestionNumber(questionNumber + 1);
            setData([...data, {[`Question${activeQuestion}`]: 0}])
            }}
          />
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
}

export default App;
