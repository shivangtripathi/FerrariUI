import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Data from './data';
import Card from './Card';
import { StyleSheet, Text, View ,ScrollView,Image,Dimensions, TouchableOpacity} from 'react-native';


const LOGO_WIDTH = 220;
const LOGO_HEIGHT = 40;

export default function App() {
  console.disableYellowBox =true;
  return (
    <View style={{flex:1,padding:0}}>
    <StatusBar backgroundColor='maroon' style='light'/>
      <View style={{flex:1,padding:8,margin:5,alignItems:'center',justifyContent:'center'}}>
      <ScrollView horizontal pagingEnabled>
      {Data.map((items,index)=>{
       return(<Card url={items.url} items={items} key={index}/>
    )
      })}
    </ScrollView>
    </View>
    <Image source={require('./assets/Ferrari.png')} style={styles.logo}/>
    <View ><TouchableOpacity style={styles.help_button} ><Text style={{color:'white',fontWeight:'bold',fontSize:20}}>?</Text></TouchableOpacity></View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    opacity: 0.9,
    height: LOGO_HEIGHT,
    width: LOGO_WIDTH,
    resizeMode: 'contain',
    position: 'absolute',
    left: 10,
    bottom: 0,
    transform: [
      { translateX: -LOGO_WIDTH / 2 },
      { translateY: -LOGO_HEIGHT / 2 },
      { rotateZ: '-90deg' },
      { translateX: LOGO_WIDTH / 3 },
      { translateY: LOGO_HEIGHT / 2 },
    ],
  },
  help_button:{
    backgroundColor:"#973127",
    width:40,
    borderRadius:20,
    height:40,
    alignItems:'center',
    right:10,
    bottom:25,
    justifyContent:'center',
    alignSelf:'flex-end',

  },
  text:{
    color:'black',
    fontWeight:'bold',
    fontSize:50,
}
});
