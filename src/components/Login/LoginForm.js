import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Alert, document } from 'react-native';
import LoginButtonPressed from './LoginButtonPressed';
export default class LoginForm extends Component {


_onPressButton(){
  //Search for database here
Alert.alert("Checking Database...")
}

  render() {
    return (
      //create Username textbox
      <View style={styles.container}>
        <Text style={styles.label} id = "uLabel">Username</Text>
        <TextInput
        style={styles.input}
        id ="username"
        //when hitting the return key, go to password textbox
        returnKeyType="next"
        onSubmitEditing={() => this.passwordInput.focus()}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
        style={styles.input}
        returnKeyType="go"
        secureTextEntry
        //when hitting the return key, go to Login button
        ref={(input) => this.passwordInput = input}
        />

        <TouchableOpacity  onPress={this._onPressButton} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
     </View>
    );
  }
}

//The way it looks
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10
  },
  label: {
    color: '#FFF'
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
});
