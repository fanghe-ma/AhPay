import React, {Component} from 'react';
import {
   View, 
   Text,
   StyleSheet,
   TouchableOpacity,
   Image,
} from 'react-native';

const imgPath = {
   funcOne : require('../res/funcOne.png'),
   funcTwo : require('../res/funcTwo.png'),
   funcThree : require('../res/funcThree.png'),
   funcFour : require('../res/funcFour.png'),
}


class orFuncButton extends Component{
   render(){
      return(
         <View style = {styles.functionContainer}>
            <TouchableOpacity style = {{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
            <View style = {styles.imgContainer}>
               <Image 
                  source = {this.props.path} 
                  style = {styles.imgStyle}
                  resizeMode = 'cover'
               />
            </View>
            <Text style = {styles.textStyle}>{this.props.caption}</Text>
            </TouchableOpacity>
         </View>
      ); 
   }
}

class FuncButton extends Component{
   render(){
      return(
         <View style = {[styles.functionContainer]}>
            <TouchableOpacity style = {{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
               <View style = {{width : '60%', height : '60%'}}>
                  <Image 
                     source = {this.props.path}
                     style = {{flex : 1, height : undefined, width : undefined}}
                     resizeMode = 'contain'
                  />
               </View>
               <Text style = {styles.textStyle}>{this.props.caption}</Text>
            </TouchableOpacity>
         </View>
      ); 
   }
}

export default class FunctionContainer extends Component{
   render(){
      return(
         <View style = {styles.mainContainer}>
            <View style = {styles.functionRowContainer}>
               <FuncButton path = {imgPath.funcOne} caption = 'Scan to pay'/>
               <FuncButton path = {imgPath.funcTwo} caption = 'Tap to pay'/>
            </View>
            <View style = {styles.functionRowContainer}>
               <FuncButton path = {imgPath.funcThree} caption = 'Top Up'/>
               <FuncButton path = {imgPath.funcFour} caption = 'Transfer'/>
            </View>
         </View>
      ); 
   }
}

const styles = StyleSheet.create({
   mainContainer : {
      flex : 1,  
   },
   functionRowContainer : {
      flex : 1, 
      flexDirection : 'row',
   },
   functionContainer : {
      flex : 1, 
   },
   imgContainer : {
      height : '45%', 
      width : '45%',
      alignItems : 'center',
      justifyContent : 'center',
   },
   textStyle : {
      fontSize : 30,  
      fontFamily : 'Avenir',
   },
   imgStyle : {
      flex : 1,
   },

});

