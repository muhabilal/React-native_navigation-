import { StyleSheet, Text } from 'react-native'
import React from 'react'
import {FlatList } from 'react-native'
import ColorBox from '../components/ColorBox'
const ColorPalette = ({route}) => {
  const{colors,paletteName}=route.params
  return (
    <FlatList
      style={styles.container}
      data={colors}
      keyExtractor={item => item.colorName}
      renderItem={({ item }) => <ColorBox Colorname={item.colorName} hexCode={item.hexCode} />}
      ListHeaderComponent={<Text style={styles.text}>{paletteName}</Text>}
    />
 
  )
}

export default ColorPalette

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingTop: 10,
        backgroundColor:'white'
      },
      text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
})