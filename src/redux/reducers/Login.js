import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import VerifyPhoneNumberService from 'src/services/verifyPhoneNumberService/VerifyPhoneNumber';

export const initialState = {
  login: {},
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    verifyMobile: (state, action) => {
      const { id, status, error } = action.payload;
      state.login = { status, id: id, error: error };
    },
    verifyOtp: () => {
      // TODO:- verify otp logic
    },
  },
});

export const { verifyMobile, verifyOtp } = loginSlice.actions;

export const loginSelector = (state) => state?.login;

export default loginSlice.reducer;

export const verifyMobileNumber = createAsyncThunk(
  'login/verifymobilenumber',
  async (data, { dispatch }) => {
    try {
      const response = await VerifyPhoneNumberService.invoke(data);
      if (response) {
        dispatch(verifyMobile(response?.payload));
      }
    } catch (error) {
      throw new Error(error);
    }
  }
);
