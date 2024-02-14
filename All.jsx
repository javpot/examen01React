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
          data={state.taches}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => dispatch({type: 'delete_tache', payload: item.id})}
              style={styles.noteItem}>
              <Text style={styles.noteText}>{item.content}</Text>
              <TouchableOpacity
                style={styles.roundPress}
                onPress={() =>
                  dispatch({type: 'done_tache', payload: item.content})
                }></TouchableOpacity>
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
      <TouchableOpacity
        style={styles.completed}
        onPress={() => navigation.navigate('Completed', {dispatch})}>
        <Text style={styles.textButton}>Completed</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.completed}
        onPress={() => navigation.navigate('Active', {dispatch})}>
        <Text style={styles.textButton}>Active</Text>
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
  textButton: {
    fontSize: 30,
  },
  noteItem: {
    backgroundColor: '#333',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderColor: '#444',
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
    fontSize: 25,
  },
  roundPress: {
    color: 'white',
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: 'gray',
  },
  completed: {
    width: '50%',
    backgroundColor: 'gray',
    marginTop: 20,
  },
});
