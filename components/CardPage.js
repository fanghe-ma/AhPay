import React, {Component} from 'react';
import {
   View,
   Text,
   StyleSheet,
   ImageBackground,
   TouchableOpacity,
   Image,
} from 'react-native';
import SpendingInfoContainer from './SpendingInfoContainer.js';
import AccessButton from './AccessButton.js';
import SpendingList from './SpendingList.js';

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
            <SpendingInfoContainer />
            <SpendingList />
         </View>
      );
   }
}

const styles = StyleSheet.create({
   homeContainer : {
      flex : 1,
   },
});


