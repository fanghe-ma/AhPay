import React, {Component} from 'react';
import {
   View,
   Text,
   StyleSheet,
   TouchableOpacity,
   Image,

} from 'react-native';

const imgPath = {
   home : {
      default : require('../res/home.png'),
      clicked : require('../res/home_clicked.png'),
   },
   card : {
      default : require('../res/card.png'),
      clicked : require('../res/card_clicked.png'),
   },
   settings : {
      default : require('../res/settings.png'),
      clicked : require('../res/settings_clicked.png'),
   },
}

class MyButton extends Component{
  render(){
     if(this.props.name === this.props.state){
         return(
            <View style = {styles.ButtonContainer}>
               <TouchableOpacity onPress={()=>this.props.stateHandler(this.props.name)}>
                  <Image source = {this.props.path.clicked}/>
               </TouchableOpacity>
            </View>
         );
     }
      return(
         <View style = {styles.ButtonContainer}>
            <TouchableOpacity onPress={()=>this.props.stateHandler(this.props.name)}>
               <Image source = {this.props.path.default}/>
            </TouchableOpacity>
         </View>
      );
  }
}

export default class NavBar extends Component{
   render(){
      return(
         <View style = {styles.NavBarContainer}>
            <View style = {styles.FunctionContainer}>
               <MyButton stateHandler = {this.props.stateHandler} name = 'home' path = {imgPath.home} state = {this.props.state}/>
               <MyButton stateHandler = {this.props.stateHandler} name = 'card' path = {imgPath.card} state = {this.props.state}/>
               <MyButton stateHandler = {this.props.stateHandler} name = 'settings' path = {imgPath.settings} state = {this.props.state}/>
            </View>
         </View>

      );
   }
}

const styles = StyleSheet.create({
   NavBarContainer : {
      flex : 1,
      borderTopWidth : 2,
      borderTopColor : '#DDDDDD',
   },
   FunctionContainer : {
      height : '75%',
      flexDirection : 'row',
   },
   ButtonContainer : {
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center',
   },
});
