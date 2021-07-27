import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');

const INPUT_SIZE = width * 0.8;

const CustomButton = props => {
  return (
    <TouchableNativeFeedback disabled={props.disabled} onPress={props.click}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    width: INPUT_SIZE,
    // backgroundColor: '#6200ee',
    backgroundColor: '#ff2d55',
    paddingVertical: 15,
    borderRadius: 20,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default CustomButton;
