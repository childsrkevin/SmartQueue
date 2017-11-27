import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, TouchableOpacity, Alert, document, TextInput } from 'react-native';
import styles from '../../../config/styles';
import firebase from 'firebase';

export default class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }


  submitme(){
    //Search for database Authentication
  firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(function(){
    alert("Success!");
  }).catch(function(e){
    alert(e);
  })
  }


  static navigationOptions= {
    title: 'Sign Up',
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.formContainer}>





        {/***************EMAIL TEXTBOX*********************/}
                      <Text style={styles.label}>Enter an Email</Text>
                      <TextInput
                      style={styles.input}
                      onChangeText={(email) => this.setState({email})}
                      />
        {/***************PASSWORD TEXTBOX*********************/}
                <Text style={styles.label}>Enter a Password</Text>
                <TextInput
                style={styles.input}
                onChangeText={(password) => this.setState({password})}
                secureTextEntry
                />
        {/***************ID TEXTBOX*********************/}
                <Text style={styles.label}>Enter an ID</Text>
                <TextInput
                style={styles.input}
                returnKeyType="go"
                />


        {/***************SIGNIN BUTTON*********************/}
                <TouchableOpacity  onPress={this.submitme.bind(this)} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>SIGN UP</Text>
                </TouchableOpacity>





        </View>
     </KeyboardAvoidingView>
    );
  }
}
