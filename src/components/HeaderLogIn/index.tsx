import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Main() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Again!</Text>
      <Text style={styles.description}>
        Welcome back you´ve {"\n"} been missed!
      </Text>
    </View>
  );
}

export default Main;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 4,
  },
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  description: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});
