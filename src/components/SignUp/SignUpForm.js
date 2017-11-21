import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Alert, document } from 'react-native';

export default class SignUpForm extends Component {


_onPressButton(){
  //Search for database here
Alert.alert("Creating Account")
}


  render() {
    return (
      //create Username textbox
      <View style={styles.container}>
{/***************USERNAME TEXTBOX*********************/}
        <Text style={styles.label} id = "uLabel">Enter a Username</Text>
        <TextInput
        style={styles.input}
        />



{/***************PASSWORD TEXTBOX*********************/}
        <Text style={styles.label}>Enter a Password</Text>
        <TextInput
        style={styles.input}
        secureTextEntry
        />



{/***************EMAIL TEXTBOX*********************/}
        <Text style={styles.label}>Enter an Email</Text>
        <TextInput
        style={styles.input}
        />



{/***************ID TEXTBOX*********************/}
        <Text style={styles.label}>Enter an ID</Text>
        <TextInput
        style={styles.input}
        returnKeyType="go"
        />


{/***************SIGNIN BUTTON*********************/}
        <TouchableOpacity  onPress={this._onPressButton} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>SIGN UP</Text>
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
    marginBottom: 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
});
