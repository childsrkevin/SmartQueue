import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './src/components/Login/Login';
import SignUp from './src/components/SignUp/SignUp';
import Queue from './src/components/Queue/Queue';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCkm76tdbDg3Q85q9kALPzohzLfWWP9YQU",
    authDomain: "smart-queue-dad9f.firebaseapp.com",
    databaseURL: "https://smart-queue-dad9f.firebaseio.com",
    projectId: "smart-queue-dad9f",
    storageBucket: "smart-queue-dad9f.appspot.com",
    messagingSenderId: "167276779732"
  };
  firebase.initializeApp(config);

const Navigation = StackNavigator({
  First: {screen: Login},
  Second: {screen: SignUp},
  Third: {screen: Queue}
});

export default Navigation;
