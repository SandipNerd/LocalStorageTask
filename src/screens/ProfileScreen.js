import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ProfileScreen = props => {
  const {info} = props.route.params;
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 250,
        }}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://images.unsplash.com/photo-1455274111113-575d080ce8cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
          }}
        />
      </View>
      <View style={{padding: 20, backgroundColor: 'white', height: '100%'}}>
        <View style={styles.info}>
          <Text style={styles.header}>fullName</Text>
          <Text style={styles.text}>{info.fullName}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.header}>gender</Text>
          <Text style={styles.text}>{info.gender}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.header}>email</Text>
          <Text style={styles.text}>{info.email}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.header}>phoneNumber</Text>
          <Text style={styles.text}>{info.phoneNumber}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
