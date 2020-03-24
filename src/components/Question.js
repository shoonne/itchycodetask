import React, {Component} from 'react';
import { Text, Animated } from 'react-native';
import color from '../../constants/Colors';

class Question extends Component {
  constructor(props) {
    super(props)
    this.spinValue = new Animated.Value(1)
    this.state = {
      fadeAnim: this.spinValue,  // Initial value for opacity: 0

    };
  };


  componentDidUpdate = (prevProps, prevState) => {
    if(prevProps !== this.props){
      this.spinValue.setValue(0)
      Animated.timing(                  // Animate over time
        this.spinValue,            // The animated value to drive
        {
          toValue: 1,                   // Animate to opacity: 1 (opaque)
          duration: 500,              // Make it take a while
        }
      ).start(); 
    }
  }

    render() {
      return (
        <Animated.View style={{flex:1, opacity: this.state.fadeAnim,}}>
            <Text style={styles.text}>
              {this.props.question}
            </Text>
        </Animated.View>
  
        );
    }
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

