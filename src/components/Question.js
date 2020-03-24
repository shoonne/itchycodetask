import React from 'react';
import { Text } from 'react-native';
import color from '../../constants/Colors';

const Question = (props) => {
    return (
          <Text style={styles.text}>
            {props.question}
          </Text>
      );
};

const styles = {
  text: {
    fontFamily:'Poppins-Bold',
    fontSize: 16,
    textAlign:'center',
    letterSpacing:0.16,
    color: color.textColor,
    flex:1,
    width:300,
    height:106,
  }
}

export default Question;

