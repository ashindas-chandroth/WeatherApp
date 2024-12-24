import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/Home'
import Details from './src/Details'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import { ApolloClient, InMemoryCache ,ApolloProvider} from '@apollo/client'
import { ST_API_KEY } from './src/Constants'

const Stack = createNativeStackNavigator()
export default function App() {
  const client = new ApolloClient(
    {
      uri: "https://kandlapalle.us-east-a.ibm.stepzen.net/api/factual-arachnid/__graphql",
      headers: {
        Authorization: `APIKey ${ST_API_KEY}`,
      },
      cache: new InMemoryCache(),
    }
  )
  return (
    
      <Provider store={store}>
        <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='HOME' component={Home} />
            <Stack.Screen name='DETAILS' component={Details} />
          </Stack.Navigator>
        </NavigationContainer>
        </ApolloProvider>
      </Provider>
   
  )
}