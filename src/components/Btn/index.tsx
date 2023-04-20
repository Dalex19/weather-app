import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"

interface MainProp {
  nameBtn: string;
  doSomething?: () => void;
}

function Main({ nameBtn, doSomething }: MainProp) {
  return (
    <TouchableOpacity 
      style={styles.btn}
      onPress={doSomething}
    >
      <Text style={styles.btnText}>{nameBtn}</Text>
    </TouchableOpacity>
  );
}

export default Main;

const styles = StyleSheet.create({
  btn: {
    alignItems: "center",
    paddingHorizontal: 100,
    paddingVertical: 15,
    borderRadius: 20,
    backgroundColor: "white", //"#FB4D3D"
  },
  btnText: {
    fontSize: 18,
    color: "black",
    fontWeight: "500",
  },
});