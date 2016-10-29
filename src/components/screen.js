import React from 'react';
import {
  Image,
  StyleSheet,
  View
} from 'react-native';
import Colors from '../constants/colors';

function Screen ({children, style}) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.header}>
        <View />
          <Image
            source={require('../assets/icon.png')}
            style={styles.icon}
            resizeMode="contain"
          />
        <View />
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: Colors.Green.NORMAL,
    paddingTop: 30,
    paddingBottom: 15,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon: {
    width: 30,
    height: 30
  }
});

export default Screen;
