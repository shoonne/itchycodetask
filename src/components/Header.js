import React from 'react';
import {Text, View} from 'react-native';
import color from '../../constants/Colors';



const Header = (props) => {
    return (
        <View style={{top:51}}>
            <Text style={styles.header}>
                {props.text}
            </Text>
        </View>

    )
};

const styles = {
    header: {
        fontSize:14,
        top:'0%',
        textAlign:'center',
        letterSpacing:0.14,
        color: color.headerColor,
        fontFamily:'Poppins-Bold'
    }
}
export default Header;