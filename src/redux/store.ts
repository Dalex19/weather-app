import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import userSliceReducer from "./userSlice";
import citiesSliceReducer from "./citiesSlice";

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    cities: citiesSliceReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
