import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CustomButton from '../components/CustomButton';

const HomeScreen = props => {
  // const {fullName} = props.route.params ? props.route.params : null;
  // console.log(fullName);
  const [isLogout, setIsLogout] = useState(false);
  // const [userInfo, setUserInfo] = useState();
  // const [loading, setIsLoading] = useState();
  const logOut = async () => {
    setIsLogout(false);
    await AsyncStorage.setItem('isLogged', JSON.stringify(isLogout));
    props.navigation.navigate('signIn');
  };
  // useEffect(async () => {
  //   setIsLoading(true);
  //   let userArr = await AsyncStorage.getItem('users');
  //   userArr = JSON.parse(userArr);
  //   let name = await AsyncStorage.getItem('curUser');
  //   name = JSON.parse(name);
  //   setUserInfo(userArr.filter(i => i.email === fullName));
  //   setIsLoading(false);
  //   console.log(userInfo);
  // }, [setIsLoading, setUserInfo]);

  return (
    <View style={styles.screen}>
      <Text>
        <Text style={{fontSize: 20}}>Welcome! </Text>
        <Text
          style={{fontSize: 20, color: '#ff2d55', fontWeight: 'bold'}}></Text>
      </Text>
      <CustomButton title="Logout" click={logOut} />
    </View>
  );
};

export const screenOptions = () => {
  return {
    headerShown: true,
    headerTitleAlign: 'center',
    headerLeft: null,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
