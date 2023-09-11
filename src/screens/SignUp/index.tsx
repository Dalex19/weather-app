import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import Btn from "../../components/Btn";
import Input from "../../components/Input";

type MainProps = {
  navigation: any;
}

type User = {
  fullName: string;
  phoneNumber: string;
  emailAdress: string;
  password: string;
}

function Main({ navigation } : MainProps) {
  const [user, setUser] = useState<User>({
    fullName: "",
    phoneNumber: "",
    emailAdress: "",
    password: "",
  });

  const handleChange = (fielName: string, value: string | number) => {
    setUser({...user, [fielName]: value});
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ color: "white", fontSize: 32, fontWeight: "bold" }}>
          Create Account
        </Text>
      </View>
      <View style={styles.box}>
        <Input 
          placeholder="Full name" 
          handleChange={(text: string) => handleChange("fullName", text)}
          value={user.fullName}
        />
        <Input 
          placeholder="Phone Number"
          handleChange={(text: string ) => handleChange("phoneNumber", text)}
          value={user.phoneNumber.toString()}
        />
        <Input 
          placeholder="Email Adress" 
          handleChange={(text: string) => handleChange("emailAdress", text)}
          value={user.emailAdress}
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
      </View>
      <View style={{ flexDirection: "column", gap: 15, alignItems: "center" }}>
        <Text style={{ color: "gray" }}>
          I'm already a member.
          <Text
            onPress={() => navigation.navigate("LogIn")}
            style={styles.recoveryPassText}
          >
            {" "}
            Sing In
          </Text>
        </Text>
        <Btn nameBtn="Sign Up" doSomething={() => navigation.navigate("Weather")}/>
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

    gap: 20,
    padding: 10,
    alignItems: "flex-end",
  },
  recoveryPassText: {
    color: "white",
    fontWeight: "500",
  },
});
