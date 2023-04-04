import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Encabe from "../../components/Encabe";
import MyBtn from "../../components/MyBtn";

type Prop = {
  navigation: any;
};

function Main({ navigation }: Prop) {
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
