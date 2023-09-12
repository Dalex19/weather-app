import React, { useEffect } from "react";
import { ScrollView, View, Text, StyleSheet, Dimensions} from "react-native";

import { useSelector } from "react-redux";
import { selectCities } from "../../redux/citiesSlice";

import { useDate } from "../../utils/useDate";

import InputSearch from "../../components/InputSearch";
import Card from "../../components/Card";

function Main() {
   const myCities = useSelector(selectCities);
   const { date } = useDate();
   
   const height = Dimensions.get("window").height;

   useEffect(() => {
    console.log(myCities);
   }, [myCities]);
   
    return (
      <ScrollView>
        <View style={[styles.container, { minHeight: height }]}>
          <InputSearch/>
          <Text style={styles.title}>Towns</Text>
          <View style={styles.containerText}>
            {myCities.map((city, key) => (
              <Card
                key={key}
                cityName={city.name}
                temperature={city.temperature}
                dateNow={date}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8EBF7"
  },
  containerText: {
    width: "100%",
    height: "70%",
    gap: 35,
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    width: "80%",
    marginVertical: 10
  },
});