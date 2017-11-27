/* @flow */

import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Alert } from 'react-native';
const util = require('util');
import firebase from 'firebase';

export function navigateTo(){
  var {navigate} = this.props.navigation;
}

export default class Nav extends Component {
  render() {
    console.log("this.props.navigation = " + util.inspect(this.props.navigation,false, null));

    return (
      <View style={styles.container}>
        <Text>Im the MyComponent component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
