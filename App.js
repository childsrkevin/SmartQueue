import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './src/components/Login/Login';
import SignUp from './src/components/SignUp/SignUp';

const Navigation = StackNavigator({
  First: {screen: Login},
  Second: {screen: SignUp}
});

export default Navigation;
