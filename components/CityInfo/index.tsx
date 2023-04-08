import React from "react";
import { View, Text, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons";

function Main ({ cityName, dateNow } : { cityName: string; dateNow: string}) {
    return(
        <View style={styles.infoContainer}>
          <Text style={styles.nameCity}>
            <Ionicons name="pin-outline" size={20} /> {cityName}
          </Text>
          <Text>{dateNow}</Text>
        </View>
    )
}

export default Main;

const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  nameCity: {
    fontSize: 20,
    fontWeight: "400",
  },
});