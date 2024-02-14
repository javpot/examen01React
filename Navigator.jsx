import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MyHeader from './MyHeader';
import NavBar from './Navbar';
import All from './All';
import Active from './Active';
import Completed from './Completed';
import AddTache from './AddTache';

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="All">
        <Stack.Screen
          name="All"
          component={All}
          options={{headerTitle: props => <MyHeader {...props} />}}
        />
        <Stack.Screen
          name="Active"
          component={Active}
          options={{headerTitle: props => <MyHeader {...props} />}}
        />
        <Stack.Screen
          name="Completed"
          component={Completed}
          options={{headerTitle: props => <MyHeader {...props} />}}
        />
        <Stack.Screen
          name="AddTache"
          component={AddTache}
          options={{headerTitle: props => <MyHeader {...props} />}}
        />

        <Stack.Screen name="NavBar" component={NavBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
