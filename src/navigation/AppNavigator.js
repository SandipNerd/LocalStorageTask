import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SignUpScreen from '../screens/SignUpScreen';
import UserListScreen, {
  screenOptions as userListScreenOptions,
} from '../screens/UserListScreen';

import HomeScreen, {
  screenOptions as homeScreenOptions,
} from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => {
  const [isLogged, setIsLogged] = useState();
  useEffect(async () => {
    let isLog = await AsyncStorage.getItem('isLogged');
    isLog = JSON.parse(isLog);
    setIsLogged(isLog);
    console.log(isLogged);
  });
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      {isLogged ? (
        <>
          <HomeStack.Screen
            name="home"
            component={HomeScreen}
            options={homeScreenOptions}
          />
          <HomeStack.Screen name="userList" component={UserListScreen} />
          <HomeStack.Screen name="signIn" component={LoginScreen} />
          <HomeStack.Screen name="profile" component={ProfileScreen} />
        </>
      ) : (
        <>
          <HomeStack.Screen name="signUp" component={SignUpScreen} />
          <HomeStack.Screen name="signIn" component={LoginScreen} />
          <HomeStack.Screen
            name="home"
            component={HomeScreen}
            options={homeScreenOptions}
          />
          <HomeStack.Screen name="userList" component={UserListScreen} />
          <HomeStack.Screen name="profile" component={ProfileScreen} />
        </>
      )}
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
