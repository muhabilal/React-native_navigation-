// import React from 'react'
// import { Text, View } from 'react-native'
// import { NavigationContainer} from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import Home from './Screens/Home'
// import Admin from './Screens/Admin'


// const Stack = createNativeStackNavigator()
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name='Home' component={Home} options={{title:'Overview'}}/>
//         <Stack.Screen name='Admin' component={Admin} options={{title:'Admin Screen'}}/>
//       </Stack.Navigator>
//     </NavigationContainer>

//   )
// }
// export default App


import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native"
import ColorBox from './components/ColorBox'
import Home from './Screens/Home';
import ColorPalette from './Screens/ColorPalette';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator()
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name='ColorPalette' component={ColorPalette}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
})



export default App
