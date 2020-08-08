import React, {Component} from 'react';
import {
   View,
   Text,
   StyleSheet,
   Image,
   TouchableOpacity,

} from 'react-native';

export default class AccessButton extends Component{
   render(){
      return(
         <View 
            style = {
               [styles.accButtStyle, 
               this.props.name === 'sound' ? styles.sound : styles.help]}>
            <TouchableOpacity style = {{flex : 1}}>
               <Image 
                  source = {this.props.path} 
                  style = {{height : 40, width : 40}} 
                  resizeMode = 'contain'/>
            </TouchableOpacity>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   accButtStyle : {
      height : 40,
      width : 40, 
      position : 'absolute',
      top : 40,
      zIndex : 999,
   },
   sound : {
      left : 20, 
   },
   help : {
      left : 355,
   },
});


