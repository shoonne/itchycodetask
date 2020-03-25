import React from 'react';
import {View} from 'react-native'
import color from '../../constants/Colors';


// Decrease the width with every question
function renderWidth(page) {
    switch (page) {
      case 1:
        return '5%'
      case 2:
        return '15%'
      case 3:
        return '25%'
      case 4:
        return '35%'
      case 5:
        return '45%'
      case 6:
        return '55%'
      case 7:
        return '65%'
      case 8:
        return '75%'
      case 9:
        return '85%'
      case 10:
        return '100%'
    
      default:
        return 0;
    }
  };

const Overlay = (props) => {
    return (
        <View style={[styles.overlay, {left: renderWidth(props.questionNumber)}]}/>

    );
}

const styles = {
    overlay: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color.backgroundOverlay,
        opacity: 0.5,
        zIndex:-1
      },
}

export default Overlay;