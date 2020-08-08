import React, {Component} from 'react';
import {
   View,
   Text,
   StyleSheet,
   ScrollView,
   ListView,
} from 'react-native';

export default class SpendingList extends Component{
   render(){
      return(
         <View style = {styles.mainContainer}/>
      ); 
   }
}

const styles = StyleSheet.create({
   mainContainer : {
      flex : 1,
   },

});
