import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Question from './src/components/Question';
import QuestionCounter from './src/components/QuestionCounter';
import color from './constants/Colors';
import questionsData from './constants/QuestionsData';
import Button from './src/components/Button';
import Header from './src/components/Header';
import Overlay from './src/components/Overlay';

function convertData(arr) {
  // Convert data to desired format. 
  var result = arr.reduce(function(res, current) {
    return Object.assign(res, current);
  }, {});

  return result;
};



const App = () => {
  const [questionNumber, setQuestionNumber] = useState(0); // This is for controlling the active question
  const [data, setData] = useState([]);   // This is for collection the data from questions
  const [result, setResult] = useState()  // This is used to store the desired format ;

  // If we have reached the 10th question, 
  // reset the states and convert and store the result 
  if(questionNumber === 10) {
    setQuestionNumber(0)
    setResult(convertData(data));
    setData([])
  }



  // useEffect(()=> {
  //   if(result) {
  //     console.log(result)
  //   }
  // })


    return (
      <View style={styles.container}>
      <Overlay questionNumber={questionNumber}/>
      <Header text="Välmående DLQ!"/>
      <QuestionCounter questionNumber={questionNumber + 1}/>
      <Question question={questionsData[questionNumber === 10 ? 0 : questionNumber].question}/>
      
      {  questionNumber === 7 ? 
        <View style={{marginBottom:100}}>
          <Button onPress={() => setQuestionNumber(questionNumber + 1)} text="Ja"/>
          <Button text="Nej"/>
        </View>   
        :   
        <View style={{marginBottom: 100, zIndex:2}}>
            <Button
              text={"Väldigt mycket"}
              onPress={() => {
                setQuestionNumber(questionNumber + 1);
                setData([...data, {[questionsData[questionNumber].name]: 3}]);
                }}
              />

            <Button
            text={"En hel del"}
            onPress={() => {
              setQuestionNumber(questionNumber + 1);
              setData([...data, {[questionsData[questionNumber].name]: 2}]);
              }}
            />
            <Button
            text={"Lite grann"}
            onPress={() => {
              setQuestionNumber(questionNumber + 1);
              setData([...data, {[questionsData[questionNumber].name]: 1}]);
              }}
            />
            <Button
            text={"Inte alls"}
            onPress={() => {
              setQuestionNumber(questionNumber + 1);
              setData([...data, {[questionsData[questionNumber].name]: 0}]);
              }}
            />
          </View>}
          </View>

    );
}

const styles = {
  container: {
    flex:1,
    alignItems:'center',
    backgroundColor:color.background,
  },
}

export default App;
