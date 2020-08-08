import React, {Component} from 'react';
import {
   View,
   Text,
   StyleSheet,
   Image,
   ImageBackground,
   ScrollView,
   Dimensions,
   TouchableOpacity,
} from 'react-native';

const imgPath = {
   backgroundImg : require('../res/background_full.png'),
   cardImg : require('../res/creditCard_new.png'),
}

const balance = 1029;

class Card extends Component{
   render(){
      return(
         <View style = {styles.cardContainer}>
            <TouchableOpacity style = {{flex : 1}}>
               <Image 
                  source = {imgPath.cardImg} 
                  style = {styles.card} 
               />
            </TouchableOpacity>
         </View>
      );
   }
}

class InfoBar extends Component{
   render(){
      return(
         <View style = {styles.infoBar}>
            <Text style = {[styles.font, {marginLeft : 10}]}>Balance:</Text>
            <Text style = {[styles.font, {marginRight : 10}]}>${balance}.00</Text>
         </View>
      ); 
   }
}

export default class CardInfoContainer extends Component{
   render(){
      return(
         <View style = {styles.mainContainer}>
            <ImageBackground 
               source = {require('../res/background.png')} 
               style = {styles.backgroundStyle}>
              <View style = {styles.scrollContainer}>
                 <ScrollView 
                     horizontal = {true} 
                     style = {{height : '100%'}}
                     contentContainerStyle = {{
                        alignItems : 'center',
                        paddingHorizontal : 30,

                     }}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                 </ScrollView>
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
   },
   scrollContainer : {
      height : '55%', 
      position : 'absolute',
      top : 70,
   },
   cardContainer : {
      height : '100%',
      width : Dimensions.get('window').width * 0.85,
      marginRight : 20,
   },
   card : {
      flex : 1,
      height : undefined,
      width : undefined,
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


