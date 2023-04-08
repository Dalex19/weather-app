import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"

function Main() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Search your city" />
      <Ionicons
        name="search-outline"
        size={20}
        style={{ position: "absolute", right: 15, bottom: 14, color: "black" }}
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    width: "80%",
    position: "relative",
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 25,
    paddingVertical: 8,
    paddingLeft: 15,
    marginTop: 70,
    fontSize: 18,
  },
});