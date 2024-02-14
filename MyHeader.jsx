import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MyHeader = ({props}) => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
    />
    <Text style={styles.text}>To do list</Text>
  </View>
);

export default MyHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 35,
  },
  text: {
    marginLeft: 10,
  },
  icon: {
    width: 30,
    height: 30,
    position: 'absolute',
    right: 20,
  },
});
