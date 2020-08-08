import React, {Component} from 'react';
import {
   View, 
   Text,
   StyleSheet,
   ImageBackground,
   TouchableOpacity,
   Image,
   Dimensions,
   ART,
} from 'react-native';

import Pie from 'react-native-pie';


data = [
   {'number' : 8, 'name' : 'transport'},
   {'number' : 28, 'name' : 'food'},
   {'number' : 13, 'name' : 'utilities'},
   {'number' : 9, 'name' : 'entertainment'},

   ];

class InfoBar extends Component{
   render(){
      return(
         <View style = {styles.infoBar}>
            <Text style = {[styles.font, {marginLeft : 10}]}>History</Text>
         </View>
      ); 
   }
}


export default class SpendingInfoContainer extends Component{
   render(){
      return(
         <View style = {styles.mainContainer}>
            <ImageBackground 
               source = {require('../res/background.png')} 
               style = {styles.backgroundStyle}>
               <View style = {{height : '65%', width : '65%'}}>
                  <Pie 
                     radius={100}
                     innerRadius = {50}
                     series = {[10, 15, 23, 45, 100-10-15-23-45]}
                     colors = {['#B04774', '#FEDE9A', '#FC5276', '#F98E72', '#E43E9B']}
                  />
               </View>
               <InfoBar/> 
            </ImageBackground>
         </View>
      ); 
   }
}

const styles = StyleSheet.create({
   mainContainer : {
      flex :1,
   },
   backgroundStyle : {
      flex : 1,
      top : 0, 
      justifyContent : 'center',
      alignItems : 'center',
   },
   infoBar : {
      backgroundColor : 'white',
      position : 'absolute',
      height : 75,
      width : Dimensions.get('window').width * 0.90,
      top : 300,
      alignSelf : 'center',
      borderRadius : 20,
      alignItems : 'center',
      justifyContent : 'space-between',
      flexDirection : 'row',
   },
   font : {
      fontSize : 40,
      color : '#C760E5'
   }
});

