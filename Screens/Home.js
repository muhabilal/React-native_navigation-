import { FlatList,StyleSheet} from 'react-native'
import React, { useCallback,useState,useEffect } from 'react'
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation }) => {
  const [colorPalettes, setColorPalettes] = useState([])
  const [isRefreshing, setIsRefreshing] = useState(false)
  const fetchColorPalette=useCallback(async ()=>{
    const result =await fetch('https://color-palette-api.kadikraman.now.sh/palettes')
  if(result.ok){
    const palettes=await result.json()
    setColorPalettes(palettes)
  }
  },[])

  useEffect(() => {
    fetchColorPalette()
  }, [])
  const handleRefresh=useCallback(async()=>{
    setIsRefreshing(true)
    await fetchColorPalette()
    setTimeout(()=>{
      setIsRefreshing(false)
    },1000)

  },[])
  
  return (
    <FlatList
    style={styles.list}
      data={colorPalettes}
      keyExtractor={item => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview handlePress={()=>{
          navigation.navigate('ColorPalette', item)   
        }}
        colorPalette={item}
        />
      )}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      // refreshControl={<RefreshControl refreshing={true} onRefresh={()=>{}}/>}
    />
  

  )
}

export default Home

const styles = StyleSheet.create({
  list:{
    padding:10,
    backgroundColor:'white'
  }
})