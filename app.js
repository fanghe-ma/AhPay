/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React , {Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import Home from './components/Home.js';
import CardPage from './components/CardPage.js';
import SettingsPage from './components/SettingsPage.js';
import NavBar from './components/NavBar.js';


export default class App extends Component{ 
   componentDidMount(){
      SplashScreen.hide(); 
   }
   constructor(props){
      super(props)
      this.stateHandler = this.stateHandler.bind(this)
   }

   stateHandler(someArgs){
      this.setState({
         currentView : someArgs 
      })
   }


   state = {
      currentView : 'home', 
   }  


   render(){
      if(this.state.currentView === 'home'){
           return (
              <View style = {styles.appContainer}>
               <View style = {styles.mainContainer}><Home/></View>
               <NavBar state = 'home' stateHandler = {this.stateHandler}/>
              </View>
           );
      }
      if(this.state.currentView === 'card'){
           return (
              <View style = {styles.appContainer}>
               <View style = {styles.mainContainer}><CardPage/></View>
               <NavBar state = 'card' stateHandler = {this.stateHandler}/>
              </View>
           );
      }
      if(this.state.currentView === 'settings'){
           return (
              <View style = {styles.appContainer}>
               <View style = {styles.mainContainer}><SettingsPage/></View>
               <NavBar state = 'settings' stateHandler = {this.stateHandler}/>
              </View>
           );
      }
   }
};

const styles = StyleSheet.create({
   appContainer : {
      flex : 1,
      flexDirection : 'column',
   },
   mainContainer : {
      flex : 7,
   },
});
