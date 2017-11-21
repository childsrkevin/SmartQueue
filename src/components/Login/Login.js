import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Alert } from 'react-native';;
const util = require('util');
import firebase from 'firebase';

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  submitme(){
    //Search for database here
  firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(function(){
    alert("Welcome to Smart Queue");
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




{/***************ALL OF THE STYLING*********************/}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    padding: 20
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
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10

  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
});
