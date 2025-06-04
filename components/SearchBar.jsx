import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export const SearchBar = () => {
  return (
    <View style={styles.box}>
      <TextInput style={styles.searchBar} placeholder="Search..." />
      <View style={styles.searchIconBox} >
      <FontAwesome5
        name="search"
        size={25}
        color="#05eeff"
        style={styles.searchIcon}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  searchBar: {
    height: 45,
    width: "80%",
    borderColor: "#05eeff",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    margin: 10,
    backgroundColor: "#ffffff",
    fontSize: 16,
    shadowColor: "#000000",
  },
  searchIcon: {},
  searchIconBox: {
    backgroundColor: "#ffffff",
    padding: 9,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: "#05eeff",
  }
});
