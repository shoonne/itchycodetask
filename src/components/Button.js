import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import color from '../../constants/Colors';


const Button = (props) => {
    return (
        <TouchableOpacity 
          onPress={props.onPress}
          style={styles.btn}>
          <Text style={styles.btnText}>{props.text}</Text>
        </TouchableOpacity>


    )
};

const styles = {
    btn : {
        width: 330, 
        height:50, 
        borderRadius: 26, 
        backgroundColor:color.buttonBackground, 
        justifyContent:'center',
        marginBottom:10,
      },
      btnText: {
        textAlign:'center', 
        color: color.textColor,
        fontFamily:'Poppins-Bold',
      },
};

export default Button;
