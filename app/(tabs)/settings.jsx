import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const settings = () => {
  return (
    <View style={styles.mainBox} >
      <Text>settings</Text>
    </View>
  )
}

export default settings

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e48080',
  },
})