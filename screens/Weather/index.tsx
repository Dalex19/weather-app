import React, { useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";


import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";

import Card from "../../components/Card";
import InputSearch from "../../components/InputSearch";

function Main() {
   const myUser = useSelector(selectUser);
   console.log(myUser);
   const height = Dimensions.get("window").height;

    return (
      <View style={[styles.container, {minHeight: height}]}>
        <InputSearch />
        <Text style={styles.title}>Towns</Text>
        <View style={{ width: "100%", height:"70%", justifyContent:"space-around", alignItems: "center" }}>
          <Card cityName="Matagalpa" dateNow="FRI, 7 April" temperature={10} />
          <Card cityName="Esteli" dateNow="FRI, 7 April" temperature={20} />
          <Card cityName="Managua" dateNow="FRI, 7 April" temperature={30} />
          <Card cityName="Jinotega" dateNow="FRI, 7 April" temperature={5} />
        </View>
      </View>
    );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#E8EBF7"
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    width: "80%",
  },
});