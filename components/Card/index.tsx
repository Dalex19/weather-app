import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { getWeatherType, getWeatherImage } from "../../utils/weatherUtils";

import CityInfo from "../CityInfo"
import WeatherIcon from "../WeatherIcon"

interface Props {
  cityName: string;
  dateNow: string;
  temperature: number;
};

function Main({ cityName, dateNow, temperature }: Props) {
  const type = getWeatherType(temperature);
  const { color } = getWeatherImage(type);

    return (
      <View style={[styles.container, {backgroundColor: color}]}>
        <ImageBackground
          source={require("../../assets/town.png")}
          style={styles.backgroundImage}
        >
          <CityInfo cityName={cityName} dateNow={dateNow}/>
          <WeatherIcon temperature={temperature}/> 
        </ImageBackground>
      </View>
    );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "80%",
    borderRadius: 15,
    overflow: "hidden",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  containerImage: {
    flex: 1,
    //backgroundColor: "green",
    justifyContent: "space-around",
    alignItems: "center",
  },
  backgroundImage: {
    flexDirection: "row",
    position: "absolute",
    width: "100%",
    height: 100,
    resizeMode: "stretch",
    filter: "brightness(3)",
  },
  img: {
    width: 66,
    height: 58,
  },
});