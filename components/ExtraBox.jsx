import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export const ExtraBox = () => {
    const carImg = "https://m.media-amazon.com/images/I/91YEykzSMzL.jpg"
  return (
    <View style={styles.box} >
        <View>
            <Image source={{uri: carImg}} style={styles.Img} />
        </View>
        <View style={{display:'flex', flexDirection:'column', justifyContent:'center'}} >
      <Text style={{fontSize:20, fontWeight:800}} >ExtraBox</Text>
      <Text style={{fontSize:16, fontWeight:300}} >This is created only demo perpose design</Text>
      <Text style={{color:'#05eeff', marginTop:5}} >Explore</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    box: {
    width: "100%",
    borderWidth: 1,
    backgroundColor: "#f7fbfc",
    borderColor: "#05eeff",
    padding:10,
    marginVertical:10,
    borderRadius:8,
    display:'flex',
    flexDirection:'row',
    gap:10,
    },
    Img:{
        width:80,
        height:80,
    }
})