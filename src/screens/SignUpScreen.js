import React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Button,
  Text,
  ScrollView,
} from 'react-native';
import {Formik, Field} from 'formik';
import {RadioButton} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import validationRegex from '../validation/validationRegex';
import UserValidationInput from '../components/UserValidationInput';

const {width} = Dimensions.get('window');
const INPUT_SPACE = (width - width * 0.8) / 2;

const SignUpScreen = props => {
  const clearData = async () => {
    await AsyncStorage.clear();
  };

  const setUserDetail = async details => {
    try {
      let userArr = await AsyncStorage.getItem('users');
      if (userArr) {
        userArr = JSON.parse(userArr);
        userArr.push(details);
        await AsyncStorage.setItem('users', JSON.stringify(userArr));
      } else {
        let userArr = [];
        userArr.push(details);
        await AsyncStorage.setItem('users', JSON.stringify(userArr));
      }
      alert('Form Submitted Successfully');
    } catch (err) {
      console.log('error');
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.signUpText}>Sign up</Text>
      <View style={styles.formContainer}>
        <Formik
          initialValues={{
            fullName: '',
            email: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
            gender: '',
          }}
          validationSchema={validationRegex}
          onSubmit={(values, {resetForm}) => {
            setUserDetail(values);
            resetForm();
          }}>
          {({handleSubmit, isValid, handleChange, values}) => (
            <>
              <Field
                component={UserValidationInput}
                name="fullName"
                placeholder="Full Name"
              />
              <Field
                component={UserValidationInput}
                name="email"
                placeholder="Email Address"
                keyboardType="email-address"
              />
              <Field
                component={UserValidationInput}
                name="phoneNumber"
                placeholder="Phone Number"
                keyboardType="numeric"
              />
              <Field
                component={UserValidationInput}
                name="password"
                placeholder="Password"
                secureTextEntry
              />
              <Field
                component={UserValidationInput}
                name="confirmPassword"
                placeholder="Confirm Password"
                secureTextEntry
              />
              <View>
                <RadioButton.Group
                  onValueChange={handleChange('gender')}
                  value={values.gender}>
                  <View style={[styles.row, {marginVertical: 30}]}>
                    <View style={styles.row}>
                      <Text>Male</Text>
                      <RadioButton value="M"></RadioButton>
                    </View>
                    <View style={styles.row}>
                      <Text>Female</Text>
                      <RadioButton value="F"></RadioButton>
                    </View>
                  </View>
                </RadioButton.Group>
              </View>
              <View style={styles.row}>
                <Button
                  onPress={handleSubmit}
                  title="SIGN UP"
                  disabled={!isValid}
                />
                <Button
                  title="gotousers"
                  onPress={() => {
                    props.navigation.navigate('userList');
                  }}
                />
                <Button title="clear" onPress={clearData} />
              </View>
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  formContainer: {paddingHorizontal: INPUT_SPACE},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  signUpText: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
