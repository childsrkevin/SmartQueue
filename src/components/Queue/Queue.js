/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import styles from '../../../config/styles';

export default class MyComponent extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style = {styles.queueText}>
          <Text>This is a test</Text>
        </View>


      </View>
    );
  }
}
