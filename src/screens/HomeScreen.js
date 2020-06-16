import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import SettingsScreen from './SettingsScreen';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        title: '',
        // headerLeft: props => <BackButton {...props} />,
        headerStyle: {
          elevation: 0,
          // borderBottomWidth: 0,
        },
      }}>
      <Stack.Screen name="Home" component={MainScreen} />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={
          {
            // headerTitle: props => <BackButton {...props} />,
          }
        }
      />
    </Stack.Navigator>
  );
};

const BackButton = () => <Text>&lt; vamos uedddhh</Text>;

const MainScreen = ({navigation}) => {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <SafeAreaView style={styles.topContainer}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Home</Text>
              <Text
                style={styles.sectionDescription}
                onPress={() => navigation.navigate('Settings')}>
                Go to page
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionContainer: {
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 33,
    fontWeight: '800',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'green',
    textDecorationLine: 'underline',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default HomeScreen;
