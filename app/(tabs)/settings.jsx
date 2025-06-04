import { StyleSheet, View, Animated } from 'react-native'
import React, {useEffect, useRef} from 'react'

const Settings = () => {
const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }).start();
    }, [fadeAnim]);

  return (
    <View style={styles.mainBox} >
      <Animated.Text style={[styles.heading, { opacity: fadeAnim }]}>
        Demo for settings page
      </Animated.Text>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#94d0d8',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
})