import React from 'react';
import { Text } from 'react-native';
import color from '../../constants/Colors';

const TextButton = (props) => {
    return (
        <Text style={styles.text}>{props.text}</Text>
    );
}

const styles = {
    text: {
        textAlign:'center',
        fontFamily:'Poppins-Bold',
        color: color.textColor,
        bottom:40,
        position:'absolute'
    }
}

export default TextButton;

