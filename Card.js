import React from 'react'
import { StyleSheet, Text, View ,ScrollView,Image,Dimensions, TouchableOpacity} from 'react-native';

const {width,height} = Dimensions.get('window');

export default function Card({items,url}) {
    return (
        <View style={{flex:1,margin:2,padding:5}}>
        <Image
        style={{flex: 2,
          width: 300,
          height: 200,
          margin:10,
          resizeMode: 'contain',
          }}
          source={url}
        />
       <View style={{flex:1,flexDirection:'row',alignItems:'flex-start',justifyContent:'center',position:'relative'}}>
        <Text style={[styles.text,{color:items.color}]}>{items.model}  </Text>
        <Text style={styles.text}>{items.petrol}</Text>
        </View>
        <View style={{paddingHorizontal:5,marginHorizontal:30,flex:1,flexWrap:'nowrap',alignItems:'flex-start',justifyContent:'center',flexDirection:'row'}}>
            <View style={{width:width/2,marginLeft:5,marginRight:5,flex:1,flexDirection:'row'}}>
            <Text >Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
            
        </View>
        </View>
        <View style={{flexDirection:'row',flex:1,alignItems:'center',justifyContent:'center'}}>
        <TouchableOpacity style={{backgroundColor:items.color,borderRadius:100/4,width:100,height:50,alignItems:'center',justifyContent:'center'}}><Text style={{color:'white',fontWeight:'bold'}}>Check Out</Text></TouchableOpacity>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
      fontWeight:'bold',
      fontSize:50,
  }
  });