import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCity } from "../redux/citiesSlice";

import { getWeather } from "../services";

interface ModalSelec {
    key: number;
    label: string;
}

export function useAddCity () {
    const dispatch = useDispatch();
    let index: number = 0; 
    const [dataFiltered, setDataFiltered] = useState <ModalSelec[]> ();

    const filterData = (data: any) => {
        const result = data.map((country : any) => ({key: index++, label: country}))
        setDataFiltered(result.map((item : any) => item as ModalSelec));
    }
    const addNewCity = async (name: string) => {
        const result = await getWeather(name);
        dispatch(addCity(result));
        console.log(result);
    }
    
    return { dataFiltered, filterData, addNewCity }
}