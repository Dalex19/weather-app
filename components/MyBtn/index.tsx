import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"

interface MainProp {
    nameBtn: string,
    paddingBtn: boolean,
    textColor?: string
}

function Main ({ nameBtn, paddingBtn, textColor } : MainProp) {
    return(
        <TouchableOpacity style={[ styles.btn, {backgroundColor: paddingBtn ? "white" : ""} ]}>
            <Text style={[styles.btnText, {color: textColor? textColor : "black"}]}>{nameBtn}</Text>
        </TouchableOpacity>
    )
}

export default Main;

const styles = StyleSheet.create({
    btn: {
        alignItems: "center",
        paddingHorizontal: 35,
        paddingVertical: 5,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'white',
    },
    btnText: {
        fontSize: 18,
        fontWeight: "bold",
    }
})