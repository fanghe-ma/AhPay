import React, {Component} from 'react';
import {
   View,
   Text,
   StyleSheet,
   ImageBackground,
   TouchableOpacity,
   Image,
} from 'react-native';
import CardInfoContainer from './CardInfoContainer.js';
import FunctionContainer from './FunctionContainer.js';
import AccessButton from './AccessButton.js';

const imgPath = {
   sound : require('../res/sound.png'),
   help : require('../res/help.png'),
}

export default class Home extends Component{
   render(){
      return(
         <View style = {styles.homeContainer}>
            <AccessButton name = 'sound' path = {imgPath.sound}/>
            <AccessButton name = 'help' path = {imgPath.help}/>
            <CardInfoContainer />
            <FunctionContainer />
         </View>
      );
   }
}

const styles = StyleSheet.create({
   homeContainer : {
      flex : 1,
   },
});


