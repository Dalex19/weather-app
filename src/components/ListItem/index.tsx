import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { useDispatch } from "react-redux";
import { addCity } from "../../redux/citiesSlice";

import { getWeather } from "../../services";

interface MainProps {
    name: string;
    callApi: () => void;
}

function Main({ name }: { name: string }) {
    const dispatch = useDispatch();

    const addNewCity = async () => {
        const result = await getWeather(name);
        dispatch(addCity(result));
        console.log(result);
    }

  return (
    <TouchableOpacity onPress={addNewCity}>
        <Text style={style.item}>{name}</Text>
    </TouchableOpacity>
  )
}

export default Main;

const style = StyleSheet.create({
  item: {
    borderWidth: 1,
    borderColor: "#333",
    padding: 25,
  },
});
