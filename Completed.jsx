import React, {useReducer} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {tachesReducer, initialState} from './TachesReducer';

const All = ({navigation, params}) => {
  [state, dispatch] = useReducer(tachesReducer, initialState);
  return (
    <>
      <View>
        <FlatList
          data={state.tachesDone}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.noteItem}>
              <Text style={styles.noteText}>{item.content}</Text>
              <TouchableOpacity style={styles.roundPress}></TouchableOpacity>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <TouchableOpacity
        style={styles.add}
        onPress={() => navigation.navigate('AddTache', {dispatch})}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </>
  );
};

export default All;

const styles = StyleSheet.create({
  add: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'blue',
    marginLeft: '50%',
  },
  plus: {
    fontSize: 40,
  },
  noteItem: {
    backgroundColor: '#333', // Darker background for notes
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderColor: '#444', // Darker border for notes
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  noteText: {
    color: '#ffffff',
    fontSize: 25, // White text for contrast
  },
  roundPress: {
    color: 'white',
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: 'red',
  },
});
