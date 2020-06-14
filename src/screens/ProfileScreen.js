import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Navigation from '../layout/Navigation';

const ProfileScreen = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.topContainer}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Profile</Text>
              <Text style={styles.sectionDescription}>
                This is a{' '}
                <Text style={styles.highlight}>section description</Text>
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Profile</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next
              </Text>
            </View>
          </View>
        </ScrollView>
        <Navigation navigation={navigation} active="profile" />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'green',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default ProfileScreen;
