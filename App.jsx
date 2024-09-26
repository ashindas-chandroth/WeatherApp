import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/Home'
import Details from './src/Details'
import { Provider } from 'react-redux'
import store from './src/redux/store'

const Stack= createNativeStackNavigator()
export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='HOME' component={Home}/>
        <Stack.Screen name='DETAILS' component={Details}/>
    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}