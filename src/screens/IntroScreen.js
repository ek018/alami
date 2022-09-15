/**
 * Sample React Native IntroScreen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Loading from '../components/Loading';

const IntroScreen = ({navigation}) => {
  const navigateToHome = finished => {
    if (finished) {
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>LOADING</Text>
      </View>
      <View style={styles.loadingContainer}>
        <Loading animationFinished={finished => navigateToHome(finished)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 0.2,
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
  },
});

export default IntroScreen;
