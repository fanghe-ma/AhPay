import React, {Component} from 'react';
import {
   View,
   Text,
   StyleSheet,
   ART,
} from 'react-native';

const {
   Surface,
   Group,
   Rectangle,
   Shape,
} = ART;

import * as scale from 'd3-scale';
import * as shape from 'd3-shape';
import * as d3Array from 'd3-array';

const d3 = {
   scale,
   shape,
};

data = [
   {'number' : 8, 'name' : 'transport'},
   {'number' : 28, 'name' : 'food'},
   {'number' : 13, 'name' : 'utilities'},
   {'number' : 9, 'name' : 'entertainment'},

   ];

export default class Pie extends Component{
   render(){
      return(
         <View style = {{flex : 1}}>
            <Surface width = {85} height = {85}>
               <Group>
                  <Shape 
                     d={"M-68.9646319937036,-29.476762610114324A75,75,0,0,1,-49.345310456503256,-56.48044206582762L-20.635195356782273,-21.775874553905552A30,30,0,0,0,-27.086713440010442,-12.896121704557451Z"}
                     stroke ={'powderblue'}
                     strokeWidth = {3}
                  />
               </Group>
            </Surface>
         </View>
      ); 
   }
}
