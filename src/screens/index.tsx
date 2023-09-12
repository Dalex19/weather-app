import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";

import Home from "./Home/index";
import Slider from "../components/Slider";

type Prop = {
  navigation: any;
};

function RootApp({ navigation }: Prop) {
  const width = Dimensions.get("window").width;

  const data = [
    {
      image: require("../../assets/bg.jpg"),
      title: "Supplements",
    },
    {
      image: require("../../assets/bg1.jpg"),
      title: "Health",
    },
    {
      image: require("../../assets/bg2.jpg"),
      title: "Training",
    },
  ];

  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={2000}
        renderItem={({ item }) => (
          <Slider imgUrl={item.image} title={item.title} />
        )}
      />
      <Home navigation={navigation} />
    </View>
  );
}

export default RootApp;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
});
