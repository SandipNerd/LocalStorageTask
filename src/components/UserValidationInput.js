import React from 'react';
import {TextInput, Text, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const INPUT_SIZE = width * 0.8;
const INPUT_SPACE = (width - width * 0.8) / 2;

const UserValidationInput = props => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <>
      <TextInput
        style={[styles.textInput, hasError && styles.errorInput]}
        value={value}
        onChangeText={text => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        {...inputProps}
      />
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#e0e6e9',
    width: INPUT_SIZE,
    marginTop: 20,
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
  errorInput: {
    borderColor: 'red',
    borderWidth: 1,
    elevation: 3,
  },
});

export default UserValidationInput;
