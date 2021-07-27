import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Formik, Field} from 'formik';

import CustomButton from '../components/CustomButton';
import loginValidationSchema from '../validation/loginValidation';
import UserValidationInput from '../components/UserValidationInput';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreenScreen = props => {
  const loginUser = async ({email, password}) => {
    const userArr = await AsyncStorage.getItem('users');
    const currentUser = JSON.parse(userArr);

    let islogged = currentUser.some(
      user =>
        (user.email === email || user.phoneNumber === email) &&
        user.password === password,
    );
    console.log(islogged);
    if (islogged) {
      await AsyncStorage.setItem('isLogged', JSON.stringify(islogged));
      await AsyncStorage.setItem('curUser', JSON.stringify(email));
      alert('Login successfull');
      props.navigation.navigate('home', {fullname: email});
    }
  };

  return (
    <View style={styles.screen}>
      <Text style={{fontWeight: 'bold', fontSize: 30, letterSpacing: 2}}>
        <Text>LOG </Text>
        <Text style={{color: '#ff2d55'}}>IN</Text>
      </Text>
      <View style={styles.formContainer}>
        <Formik
          initialValues={{
            email: '',
            phoneNumber: '',
            password: '',
          }}
          //   validationSchema={loginValidationSchema}
          onSubmit={values => {
            loginUser(values);
          }}>
          {({handleSubmit, isValid, handleChange, values, handleBlur}) => (
            <>
              <Field
                component={UserValidationInput}
                name="email"
                placeholder="Enter your email"
              />
              <Field
                component={UserValidationInput}
                name="password"
                placeholder="Enter your password"
                secureTextEntry
              />
              <View style={{marginVertical: 20}}>
                <CustomButton title="LOGIN" click={handleSubmit} />
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: {
    borderWidth: 1,
    width: '70%',
  },
});

export default LoginScreenScreen;
