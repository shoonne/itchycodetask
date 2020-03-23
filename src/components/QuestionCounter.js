import React from 'react';
import {View, Text} from 'react-native';
import color from '../../constants/Colors';


const QuestionCounter = () => {
    return (
        <View style={{flex:1}}>
            <Text 
            style={{
                fontFamily:'Corben-Bold',
                fontSize:18,
                textAlign:'center',
                letterSpacing: 0.9,
                color:color.textColor,
                top:102,
                height:34
                }}
            >
                Fråga 1 av 10
            </Text>
        </View>
    )
}

export default QuestionCounter;