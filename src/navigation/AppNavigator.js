import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignUpScreen from '../screens/SignUpScreen';
import UserListScreen, {
  screenOptions as userListScreenOptions,
} from '../screens/UserListScreen';

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="signUp" component={SignUpScreen} />
      <HomeStack.Screen name="userList" component={UserListScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
