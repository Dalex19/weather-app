import React from "react";
import { View, Text, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons";
import { useDate } from "../../utils/useDate";

function Main({ cityName }: { cityName: string }) {
  const { date } = useDate();

  return (
    <View style={styles.infoContainer}>
      <Text style={styles.nameCity}>
        <Ionicons name="pin-outline" size={20} /> {cityName}
      </Text>
      <Text>{date}</Text>
    </View>
  );
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