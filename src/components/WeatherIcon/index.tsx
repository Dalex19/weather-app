import React from "react";
import { View, Text, Image, StyleSheet} from "react-native";
import { getWeatherImage, getWeatherType } from "../../utils/weatherUtils";

function Main ({ temperature }: {temperature: number}) {
    const type = getWeatherType(temperature);
    const {name, source} = getWeatherImage(type);

    return (
      <View style={styles.containerImage}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "400",
          }}
        >
          {name}
        </Text>
        <View
          style={{
            width: "95%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image source={source} style={styles.img} />
          <Text style={{ fontSize: 30, color: "white"}}>{temperature} °C</Text>
        </View>
      </View>
    );
};

export default Main;

const styles = StyleSheet.create({
  containerImage: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  img: {
    width: 66,
    height: 58,
  },
});