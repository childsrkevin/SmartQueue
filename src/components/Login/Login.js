import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style = {styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../images/Lightbulb_Icon.png')}
          />
          <Text style={styles.title} id = "title">SMART QUEUE </Text>
        </View>
        <View style={styles.formContainer}>
        <LoginForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  title: {
    color: '#FFF',
    marginTop: 10,
    alignItems: 'center',
    textAlign:  'center',
    opacity: 0.9

  },
  logo: {
    //379x339
    width: 150,
    height: 170
  }
});
