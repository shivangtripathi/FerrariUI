import React, { Component } from 'react'
import { Text,StyleSheet,Dimensions,ScrollView,Image, View } from 'react-native'

const width = Dimensions.get('window').width * 0.8;


export default class Caraousel extends Component {
    scrollRef = React.createRef();
    constructor(props){
        super(props)
        this.state={
            selectedIndex:0
        }
    }
    render() {
        const {images}= this.props
        const {selectedIndex} = this.state
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
