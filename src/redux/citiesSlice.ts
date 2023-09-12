import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface City {
    name: string;
    temperature: number;
}

export interface CitiesState {
    cities: Array<City>;
}

const initialState: CitiesState = {
    cities: []
};

export const citiesSlice: Slice<CitiesState> = createSlice({
    name: "citiesItems",
    initialState,
    reducers: {
        addCity: (state, action: PayloadAction<City>) => {
            state.cities.push(action.payload)
        }
    }
});

export const { addCity } = citiesSlice.actions;

export const selectCities = (state: RootState) => state.cities.cities;

export default citiesSlice.reducer;