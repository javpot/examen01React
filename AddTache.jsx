import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const AddTache = ({navigation, route}) => {
  const [tacheContent, setTacheContent] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Que voulez vous"
        placeholderTextColor="#ccc" // Lighter text for placeholder to ensure visibility on dark backgrounds
        value={tacheContent}
        onChangeText={setTacheContent}
        style={styles.input}
      />
      <Button
        title="Save tache"
        color="#1E88E5" // Consider setting a button color that fits your app's theme
        onPress={() => {
          dispatch({type: 'add_tache', payload: tacheContent});
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212', // Dark background color
  },
  input: {
    height: 40,
    width: '80%', // Adjust width as necessary
    margin: 12,
    borderWidth: 1,
    borderColor: 'white', // Adjusted to be visible against the dark background
    padding: 10,
    color: 'white', // Ensuring the input text is visible against the dark background
    backgroundColor: '#333', // Slightly lighter dark color for the input field for contrast
  },
});

export default AddTache;
