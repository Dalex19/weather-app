import React from "react";
import { TextInput, StyleSheet } from "react-native";

type Props = {
  placeholder: string;
  value: string;
  handleChange: (text: string) => void;
};

function Main({ placeholder, value, handleChange }: Props) {
  return (
    <TextInput
      placeholderTextColor="gray"
      style={styles.container}
      placeholder={placeholder}
      onChangeText={handleChange}
      value={value}
    />
  );
}

export default Main;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    color: "gray",
    borderColor: "gray",
    borderWidth: 1,
    fontSize: 15,
    borderRadius: 15,
    width: 260,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

{/* <TextInput 
            placeholder="Password"
            placeholderTextColor="gray"
            style={styles.input}
          />
          <TextInput 
          placeholder="Enter username"
          placeholderTextColor="gray"
          style={styles.input}
        /> */}