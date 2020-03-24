import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Question from './src/components/Question';
import QuestionCounter from './src/components/QuestionCounter';
import Button from './src/components/Button';
import Header from './src/components/Header';
import Overlay from './src/components/Overlay';
import color from './constants/Colors';
import questionsData from './constants/QuestionsData';



const App = () => {
  const [questionNumber, setQuestionNumber] = useState(0); // This is for controlling the active question
  const [data, setData] = useState([]);   // This is for collection the data from questions
  const [result, setResult] = useState()  // This is used to store the desired format ;
  //const [showFollowUp, setShowFollUp] = useState(false)

  let isMax = questionNumber === 10;

  const btnPress = (point) => {
    setQuestionNumber(questionNumber + 1); // Go to next question
    setData([
      ...data, 
      {[questionsData[questionNumber].name]: point
      }]); // Store data.
  }

  const convertData = (arr) => {
    // Convert data to desired format. 
    var result = arr.reduce(function(res, current) {
      return Object.assign(res, current);
    }, {}, 0);
  
    return result;
  };


  // Once we have answered 10th question, 
  // reset the states and convert and store the result 
  if(data && questionNumber === 10) {
    setQuestionNumber(0)
    setResult(convertData(data));
    setData([])
  }


  useEffect(()=> {
    if(result && questionNumber === 0) {
      console.log(result) // Result
    }
  })


    return (
      <View style={styles.container}>
        <Overlay questionNumber={questionNumber}/>
        <Header text="Välmående DLQ!"/>
        <QuestionCounter questionNumber={questionNumber + 1}/>
        <Question 
        question={questionsData[isMax ? 0 : questionNumber].question}
        />
      
      {  questionNumber === 6 ? 
        <View style={{marginBottom:100}}>
          <Button onPress={() => {
          setQuestionNumber(questionNumber + 1)
          setData([...data, {[questionsData[questionNumber].name]: 3}])
          }} text="Ja"/>
          <Button onPress={() => {
          }} text="Nej"/>
        </View>   
        :   
        <View style={{marginBottom: 100, zIndex:2}}>
            <Button
              text={"Väldigt mycket"}
              onPress={() => btnPress(3)}
              />

            <Button
              text={"En hel del"}
              onPress={() => btnPress(2)}
              />
            <Button
              text={"Lite grann"}
              onPress={() => btnPress(1)}
              />
            <Button
            text={"Inte alls"}
            onPress={() => btnPress(0)}
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
