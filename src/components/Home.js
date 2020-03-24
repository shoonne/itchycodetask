import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Question from './Question';
import QuestionCounter from './QuestionCounter';
import Button from './Button';
import Header from './Header';
import Overlay from './Overlay';
import TextButton from './TextButton';
import color from '../../constants/Colors';
import questionsData from '../../constants/QuestionsData';



const App = () => {
  const [questionNumber, setQuestionNumber] = useState(0); // This is for controlling the active question
  const [data, setData] = useState([]);   // This is for collection the data from questions
  const [result, setResult] = useState()  // This is used to store the desired format ;
  //const [showFollowUp, setShowFollUp] = useState(false)

  let isMax = questionNumber === 10;
  let showTextBtn = questionNumber > 1 &&  questionNumber < 7;

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

  const renderTextBtn = () => {
      if(questionNumber > 1 && questionNumber < 8) {
          return <TextButton/>
      } else {
          return 
      }
  }


  // Once we have answered 10th question, 
  if(data && questionNumber === 10) {
    setQuestionNumber(0) // Reset page
    setResult(convertData(data)); // Convert data
    setData([]) // Clear state
  }

  // Result
  useEffect(()=> {
    if(result && questionNumber === 0) {
      console.log(result) 
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
                <Button onPress={() => btnPress(3)} text="Ja"/>
                <Button onPress={() => {
                    // Follow up.
                }} text="Nej"/>
                </View>   
                :   
                <View style={{bottom: 80, zIndex:2}}>
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
                </View>
            }
            
            {
                showTextBtn ?
                <TextButton 
                onPress={() => setQuestionNumber(questionNumber + 1)} 
                text={"Ej tillämpligt"}/>
                : null 
            }

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
