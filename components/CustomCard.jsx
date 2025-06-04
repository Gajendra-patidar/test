import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export const CustomCard = () => {

const CardImg = "https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png";



  return (
    <View style={styles.card}>
      {<Image source={{ uri: CardImg}} style={styles.image} />}
      <View style={styles.content}>
        <Text style={styles.title}>Custom Card</Text>
        {<Text style={styles.subtitle}>This is demo card</Text>}
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    margin: 10,
    overflow: 'hidden',
  },
  image: {
    height: 180,
    width: 180,
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: '#666',
  },
});