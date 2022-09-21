import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ColorBox = ({Colorname,hexCode}) => {
  const boxColor={
    backgroundColor:hexCode
  }
  return (
    <View style={[styles.box,boxColor]}>
      <Text style={styles.boxtext}>{Colorname}: {hexCode}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  box: {
    padding: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  boxtext: {
    color: "white",
    fontWeight: 'bold',
    // textAlign:"center",
  },
})
export default ColorBox
