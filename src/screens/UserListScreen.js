import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TouchableNativeFeedback,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const {width} = Dimensions.get('window');

const UserListScreen = props => {
  const [users, setUsers] = useState();

  useEffect(async () => {
    const users = await AsyncStorage.getItem('users');
    if (users !== null) {
      setUsers(JSON.parse(users));
    }
  });
  const renderUsers = ({item}) => {
    return (
      <TouchableNativeFeedback
        onPress={() => {
          props.navigation.navigate('profile', {info: item});
        }}>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1455274111113-575d080ce8cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
            }}
            style={styles.image}
          />
          <View style={styles.info}>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>
              {item.fullName}
            </Text>
            <Text>{item.email}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  };
  return (
    <View>
      <FlatList
        keyExtractor={item => item.email.toString()}
        data={users}
        renderItem={renderUsers}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  image: {
    width: width / 5,
    height: width / 5,
    borderRadius: width / 5 / 2,
  },
  info: {
    paddingHorizontal: 20,
  },
});

export default UserListScreen;
