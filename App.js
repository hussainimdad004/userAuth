/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, View, Platform} from 'react-native';

import Routes from './src/Routes';
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {
  componentDidMount() {
    AsyncStorage.clear();
    if (Platform.OS == 'android') {
      SplashScreen.hide();
    }
  }
  render() {
    console.disableYellowBox = true;
    return (
      <View style={styles.container}>
        <Routes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
