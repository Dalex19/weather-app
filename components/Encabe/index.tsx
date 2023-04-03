import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Main () {
    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/logo.png")}
                style={styles.logoStyle}
            />
            <View style={styles.next}>
                <Text style={styles.title}> SKIP</Text>

                 <Ionicons name="ios-arrow-forward" size={20}  />
            </View>
        </View>
    );
}

export default Main;

const styles = StyleSheet.create({
    container: {
        position: "relative",
        zIndex: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 70,
        width: "90%",
    },
    logoStyle: {
        height: 50,
        width: 50
    },
    next: {
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
    },
    title: {
        letterSpacing: 1,
    }
    
});