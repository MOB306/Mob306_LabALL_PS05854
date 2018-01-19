/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Menu from './components/Menu';
import Lab2 from './components/ScreenLab/Lab2';
import {
  StackNavigator,
} from 'react-navigation';
const Navigation = StackNavigator({
  Lab2: {screen: Lab2},
},
);
export default Navigation;
// export default Navigation;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

