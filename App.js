import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
const stack = createStackNavigator()
import Home from './Screens/Home'
import Admin from './Screens/Admin'
const App = () => {
  return (
  <NavigationContainer>
    <stack.Screen name='Home' component={Home}/>
    <stack.Screen name='Admin' component={Admin}/>
  </NavigationContainer>
  )
}

export default App
