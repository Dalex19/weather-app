import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Encabe from "../../components/Encabe"
import MyBtn from "../../components/MyBtn"

function Main () {
    return(
        <View style={styles.container}>
            <Encabe />
            
            <View style={styles.containerBtns}>
                <MyBtn
                    nameBtn="Log In"
                    paddingBtn={true}

                />
                <MyBtn 
                    nameBtn="Sign Un"
                    paddingBtn={false}
                    textColor="white"
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
        //backgroundColor: "red",
        marginTop: 10,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        
    },
    textContainer: {
        width: "80%"
    },
    text: {
        fontSize: 40,
        fontWeight: "600",
        
    },
    containerBtns: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%"
    }
});