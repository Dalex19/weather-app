import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

interface MainProps {
  imgUrl: any;
  title: string;
}

function Main({ imgUrl, title }: MainProps) {
  return (
    <ImageBackground style={styles.backgroundImage} source={imgUrl}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={{ fontSize: 18 }}>
          "Workout plans designed to help you achieve your fitness goals -
          whether losing weight or building muscle"
        </Text>
      </View>
    </ImageBackground>
  );
}

export default Main;

const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    zIndex: 20,
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flexDirection: "column",
    justifyContent: "space-around",
    height: 120,
    width: "80%",
    marginLeft: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
});
