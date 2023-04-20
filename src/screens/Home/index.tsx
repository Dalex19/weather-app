import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";

import { getWeather, names } from "../../services";
import { useDispatch } from "react-redux";
import { addCity } from "../../redux/citiesSlice";

import Encabe from "../../components/Encabe";
import MyBtn from "../../components/MyBtn";

type Prop = {
  navigation: any;
};

function Main({ navigation }: Prop) {
  const dispatch = useDispatch();
  
async function addCities() {
  for (let i = 0; i < names.length; i++) {
    try {
      const result = await getWeather(names[i]);
      dispatch(addCity(result));
    } catch (error) {
      console.log(error);
    }
  }
}


  useEffect(() => {
    addCities();
  }, []);

  return (
    <View style={styles.container}>
      <Encabe />

      <View style={styles.containerBtns}>
        <MyBtn
          nameBtn="Log In"
          paddingBtn={true}
          goTo={() => navigation.navigate("LogIn")}
        />
        <MyBtn
          nameBtn="Sign Up"
          paddingBtn={false}
          textColor="white"
          goTo={() => navigation.navigate("SignUp")}
        />
      </View>
    </View>
  );
}

export default Main;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: "80%",
    width: "99%",
    marginTop: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textContainer: {
    width: "80%",
  },
  text: {
    fontSize: 40,
    fontWeight: "600",
  },
  containerBtns: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
});
