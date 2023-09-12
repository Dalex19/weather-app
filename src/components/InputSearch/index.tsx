import React,  { useEffect }  from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"

//redux
import { useCountries } from "../../hooks/useCountries";
import { useAddCity } from "../../hooks/useAddCity";

import ModalSelector from 'react-native-modal-selector-searchable'


function Main () {
  const {setText, countries} = useCountries();
  const { dataFiltered, filterData, addNewCity } = useAddCity();

  useEffect(() => {
    filterData(countries);
  }, [countries])

  return (
    <View style={style.container}>
      <ModalSelector
        search={true}
        data={dataFiltered}
        initValue="Select your country"
        onChange={(option: any) => addNewCity(option.label)}
        onChangeSearch={setText}
      >
        <View style={style.containerInput}>
          <TextInput
            style={style.input}
            placeholder="Search your city"
            onChangeText={setText}
          />
          <Ionicons name="search-outline" size={20} style={style.iconStyle} />
        </View>
      </ModalSelector>
    </View>
  );
}

export default Main;

const style = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    width: "80%"
  },
  containerInput: {
    width: "100%",
    position: "relative",
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 25,
    paddingVertical: 8,
    paddingLeft: 15,
    marginTop: 70,
    fontSize: 18,
  },
  iconStyle: { 
    position: "absolute", 
    right: 15, 
    bottom: 14, 
    color: "black" 
  },
});