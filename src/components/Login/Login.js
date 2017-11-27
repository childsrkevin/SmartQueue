import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Alert } from 'react-native';
const util = require('util');
import firebase from 'firebase';
import {navigateTo} from '../../../Nav';
import styles from '../../../config/styles';

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  submitme(){
    var {navigate} = this.props.navigation;
    //Search for database here
  firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(function(){
    alert("Welcome to Smart Queue");
    navigate("Third", {});

  }).catch(function(e){
    alert(e);
  })
  }



  static navigationOptions= {
    title: 'SMART QUEUE',
  };

  render() {
{/***************NAVIGATION CHECK*********************/}
    console.log("this.props.navigation = " + util.inspect(this.props.navigation,false, null));
    var {navigate} = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.container}>


{/***************LOGO***********************************/}
        <View style = {styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../images/Lightbulb_Icon.png')}
          />
      </View>



{/***************USERNAME TEXTBOX*********************/}
        <Text style={styles.label} id = "uLabel">Email</Text>
        <TextInput
          style={styles.input}
          returnKeyType="next"
          onChangeText={(email) => this.setState({email})}
          onSubmitEditing={() => this.passwordInput.focus()}
        />



{/***************PASSWORD TEXTBOX*********************/}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          returnKeyType="go"
          onChangeText={(password) => this.setState({password})}
          secureTextEntry
          ref={(input) => this.passwordInput = input}
        />



{/***************LOGIN BUTTON*********************/}
        <TouchableOpacity  onPress={this.submitme.bind(this)} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>



{/***************SIGNUP BUTTON*********************/}
        <TouchableOpacity  onPress={() => navigate("Second", {})} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>

     </View>
      </KeyboardAvoidingView>
    );
  }
}
