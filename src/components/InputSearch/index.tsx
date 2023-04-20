import React from "react";
import { View, TextInput, StyleSheet, FlatList, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons"
import { useCountries } from "../../hooks/useCountries";

import ListItem from "../ListItem";

function Main() {
  const {setText, countries} = useCountries();
  return (
    <View style={{width: "100%", flexDirection: "column", alignItems:"center", position: "relative", zIndex: 50}}>
      <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Search your city" onChangeText={setText} />
      <Ionicons
        name="search-outline"
        size={20}
        style={styles.iconStyle}
      />
      </View>
      {countries && countries.length ? (
        <FlatList
          style={{ height: 280, position: "absolute", backgroundColor: "grey", top: 118, width: "80%" }}
          data={countries}
          renderItem={({ item }) => <ListItem key={item} name={item}/>}
          keyExtractor={(item) => item}
        />
      ) : null}
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
  iconStyle: { 
    position: "absolute", 
    right: 15, 
    bottom: 14, 
    color: "black" 
  },
});