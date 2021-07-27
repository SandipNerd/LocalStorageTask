import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const NormalButton = props => {
  return (
    <TouchableOpacity onPress={props.click}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderColor: '#b7b2af',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 20,
  },
  buttonText: {
    color: '#ff2d55',
    fontWeight: 'bold',
  },
});

export default NormalButton;
