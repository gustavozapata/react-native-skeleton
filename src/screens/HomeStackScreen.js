import React from 'react';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import {createStackNavigator} from '@react-navigation/stack';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Settings" component={SettingsScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
