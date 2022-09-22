import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState,useEffect} from 'react'

const Hooks = () => {
    //jo cheez show ho rhi hai wo render hai
    //Rerendering jo value update ho rhi hai.
    const [num, setNum] = useState(0)
    const [num1, setNum1] = useState(0)
   useEffect(() => {
        alert("You Clicked ")
    }, [num])
    
  return (
    <View>
        <TouchableOpacity onPress={()=>{setNum(num+1)}}>
      <Text style={styles.text}>Count {num}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setNum1(num1+1)}}>
      <Text style={styles.text}>Count {num1}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Hooks

const styles = StyleSheet.create({
    text:{
        fontWeight:"bold",
        fontSize:20,
    }
})