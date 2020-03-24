import React from 'react';
import {View, Text} from 'react-native';
import color from '../../constants/Colors';


const QuestionCounter = (props) => {
    return (
        <View style={{flex:1}}>
            <Text 
            style={styles.text}
                >
                Fråga {props.questionNumber} av 10
            </Text>
        </View>
    )
}

const styles = {
    text: {
        fontFamily:'Corben-Bold',
        fontSize:20,
        textAlign:'center',
        letterSpacing: 0.9,
        color:color.textColor,
        top:90
    }
}

export default QuestionCounter;