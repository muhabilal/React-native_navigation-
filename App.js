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
import Hooks from './Screens/Hooks';
import ColorPaletteModal from './Screens/ColorPaletteModal';
const RootStack = createNativeStackNavigator()
const MainStack = createNativeStackNavigator()

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen 
      
      
      name="Home" component={Home} />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({ route }) => ({ title: route.params.paletteName})}
      />
    </MainStack.Navigator>
  );
};
const App = () => {

  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="ColorPaletteModal"
          component={ColorPaletteModal}
        />
      
      </RootStack.Navigator>
      {/* <Hooks/> */}
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
})



export default App
