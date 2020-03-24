import React, { Component } from 'react';
import { View, Text } from 'react-native';
import color from '../../constants/Colors';

const Question = (props) => {
    return (
          <Text style={{
              fontFamily:'Poppins-Bold',
              fontSize: 16,
              textAlign:'center',
              letterSpacing:0.16,
              color: color.textColor,
              flex:1,
              width:300,
              height:106,
              }}> 
            {props.question}
          </Text>
      );
};

export default Question;

