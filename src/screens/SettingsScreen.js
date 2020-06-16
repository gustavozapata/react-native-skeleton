import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

const SettingsScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.topContainer}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Settings</Text>
              <Text style={styles.sectionDescription}>
                This is a{' '}
                <Text style={styles.highlight}>section description</Text>
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
  body: {
    backgroundColor: 'white',
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
  },
  highlight: {
    fontWeight: '700',
  },
});

export default SettingsScreen;
