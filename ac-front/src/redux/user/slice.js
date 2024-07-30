import { createSlice } from "@reduxjs/toolkit";
import { getCookie, setCookie } from "../../utils";

const initialState = {
  userType: getCookie("user_type") || 'commun',
  userToken: getCookie("user_token") || '',
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserType: (state, action) => {
      state.userType = action.payload;
      setCookie("user_type", action.payload);
    },
    saveUserToken: (state, action) => {
      state.userToken = action.payload;
      setCookie("user_token", action.payload);
    },
    logOut: (state) => {
      state.userType = 'commun';
      state.userToken = '';
      setCookie("user_type", "commun");
      setCookie("user_token", '');
    },
  },
});

export const { setUserType, saveUserToken, logOut } = userSlice.actions;

export default userSlice.reducer;
