import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import color from '../../constants/Colors';

const TextButton = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
         <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
}

const styles = {
    container: {
        justifyContent:'center',         
        bottom:50,
        position:'absolute'
    },
    text: {
        textAlign:'center',
        fontFamily:'Poppins-Bold',
        color: color.textColor,
    }
}

export default TextButton;

