import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  login: {},
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    verifyMobile: (state, action) => {
      const { id, message, error } = action.payload;
      state.login = { message, id: id, error: error };
    },
    verifyOtp: () => {
      // TODO:- verify otp logic
    },
  },
});

export const { verifyMobile, verifyOtp } = loginSlice.actions;

export const loginSelector = (state) => state?.login;

export default loginSlice.reducer;
