import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native';
import SignUpForm from './SignUpForm';
import firebase from 'firebase';

export default class SignUp extends Component {
  static navigationOptions= {
    title: 'Sign Up',
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.formContainer}>
        <SignUpForm />
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

/*<Image
  style={styles.logo}
  source={require('../../images/Lightbulb_Icon.png')}
/>*/
