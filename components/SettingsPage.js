import React, {Component} from 'react';
import {
   View,
   Text,
   StyleSheet,
} from 'react-native';

export default class SettingsPage extends Component{
   render(){
      return(
         <View style = {styles.SettingsPageContainer}></View>
      );
   }
}

const styles = StyleSheet.create({
   SettingsPageContainer : { 
      flex : 1,
      backgroundColor : 'skyblue',
   },
});
