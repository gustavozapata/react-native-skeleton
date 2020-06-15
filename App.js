import 'react-native-gesture-handler';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import LikeScreen from './src/screens/LikeScreen';
import ProfileScreen from './src/screens/ProfileScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackScreen from './src/screens/HomeStackScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? require('./src/assets/images/nav_profile_a.png')
                : require('./src/assets/images/nav_profile.png');
            } else if (route.name === 'Like') {
              iconName = focused
                ? require('./src/assets/images/nav_like_a.png')
                : require('./src/assets/images/nav_like.png');
            } else if (route.name === 'Profile') {
              iconName = focused
                ? require('./src/assets/images/nav_profile_a.png')
                : require('./src/assets/images/nav_profile.png');
            }
            return <Image source={iconName} style={styles[route.name]} />;
          },
        })}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Like" component={LikeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  Home: {
    width: 25,
    height: 25,
  },
  Like: {
    width: 25,
    height: 23,
  },
  Profile: {
    width: 25,
    height: 25,
  },
});

export default App;
