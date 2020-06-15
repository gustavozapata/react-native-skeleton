import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import navigationItems from '../content/navigation';

export default function Navigation({navigation, active}) {
  return (
    <View style={styles.navigationBar}>
      <View style={styles.menuContainer}>
        {navigationItems.map(item => (
          <TouchableOpacity onPress={() => navigation.navigate(item.name)}>
            <Image
              style={styles[item.name.toLowerCase()]}
              source={
                active === item.name.toLowerCase() ? item.active : item.image
              }
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navigationBar: {
    height: 63,
    backgroundColor: '#F9F9F9',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  menuContainer: {
    marginTop: 15,
    marginHorizontal: 35,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  home: {
    width: 26,
    height: 27,
  },
  like: {
    width: 28,
    height: 26,
  },
  profile: {
    width: 26,
    height: 26.5,
  },
});
