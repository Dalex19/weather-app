import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface UserState {
  user: User;
}

export interface User {
  username: string;
  password: string;
  access: boolean;
}

const initialState: UserState = {
  user: {
    username: "dearalex875@gmail.com",
    password: "Luftwaffe",
    access: true,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
