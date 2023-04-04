import React from "react";
import { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import Btn from "../../components/Btn";
import Header from "../../components/HeaderLogIn";
import Input from "../../components/Input";

type MainProps = {
  navigation: any;
};

type User = {
  username: string;
  password: string;
}

function Main({ navigation }: MainProps) {
  const [user, setUser] = useState<User>({
    username: "",
    password: "",
  });

  const handleChange = (fieldName: string, value: string) => {
    setUser({ ...user, [fieldName]: value });
  };

  return (
    <View style={styles.container}>
      <View>
        <Header />
      </View>
      <View style={styles.box}>
      
        <Input 
          placeholder="Enter username" 
          handleChange={(text: string) => handleChange("username", text)} 
          value={user.username}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Input 
            placeholder="Password" 
            handleChange={(text: string) => handleChange("password", text)}
            value={user.password}
          />
          <Ionicons
            name="eye-outline"
            size={20}
            style={{ position: "absolute", right: 8, color: "white" }}
          />
        </View>
        <Text style={styles.recoveryPassText}>Recovery Password</Text>
      </View>
      <View style={{ flexDirection: "column", gap: 15, alignItems: "center" }}>
        <Text style={{ color: "gray" }}>
          Dont" have an account?
          <Text
            onPress={() => navigation.navigate("SignUp")}
            style={styles.recoveryPassText}
          >
            {" "}
            Register
          </Text>
        </Text>
        <Btn 
          nameBtn="Log In"
          doSomething={() => console.log(user)}
        />
      </View>
    </View>
  );
}

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D090A", //"#E6E8E6"
    justifyContent: "space-evenly",
    alignItems: "center",
    color: "gray",
  },
  box: {
    flexDirection: "column",

    gap: 15,
    padding: 10,
    alignItems: "flex-end",
  },
  recoveryPassText: {
    color: "white",
    fontWeight: "500",
  },
  
});
