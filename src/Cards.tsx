import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'

interface CardProps{
    name:string,
    image:any,
    navigation:StackNavigationProp<any,any>
}

const Cards:React.FC<CardProps>=({ name, image, navigation })=> {
    const doSomething=()=>{
        navigation.navigate('DETAILS',{name})
    }
    return (
        <TouchableOpacity 
        onPress={
           doSomething
            } style={{ marginHorizontal: 10 }}>
            <Image source={image} style={{ height: 200, width: 200, borderRadius: 10 }}>

            </Image>
            <View style={{ height: '100%', width: '100%', position: 'absolute', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'black', textAlign: "center", height: '100%', width: '100%', textAlignVertical: 'center', fontSize: 28 }}>{name}</Text>
            </View>

        </TouchableOpacity>
    )
}
export default Cards;

