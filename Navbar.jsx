import React from 'react';

import All from './All';
import Active from './Active';
import Completed from './Completed';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const NavBar = ({params}) => (
  <Tab.Navigator>
    <Tab.Screen name="All" component={All} />
    <Tab.Screen name="Active" component={Active} />
    <Tab.Screen name="Completed" component={Completed} />
  </Tab.Navigator>
);

export default NavBar;
