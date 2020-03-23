import React, { Component } from 'react';
import { View, Text } from 'react-native';
import color from '../../constants/Colors';

const Question = (props) => {
    return (
        <View style={{flex:1}}>
          <Text style={{
              fontFamily:'Poppins-Bold',
              fontSize: 16,
              textAlign:'center',
              letterSpacing:0.16,
              color: color.textColor,
              width:300,
              height: 106,
              }}> 
            {props.question}
          </Text>
        </View>
      );
};

export default Question;

