import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Alert, document } from 'react-native';
import firebase from 'firebase';

export default class SignUpForm extends Component {
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


  render() {
    return (
      //create Username textbox
      <View style={styles.container}>

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
