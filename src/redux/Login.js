import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import LoginHospitalService from '@Services/loginHospitalservice/LoginHospitalService';
import { setCookie } from '@Utils/Cookies';
// import useSnackbar from '@UI/snackbar/Snackbar';

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
    login: (state, action) => {
      const { id, token, message, code, error } = action.payload;
      let cookie_details = `token= ${token}`;
      setCookie(cookie_details);
      state.login = { id: id, message: message, code: code, error: error };
    },
  },
});

export const { verifyMobile, verifyOtp, login } = loginSlice.actions;

export const loginSelector = (state) => state?.login;

export default loginSlice.reducer;

export const hospitalLogin = createAsyncThunk(
  'user/login',

  async (data, { dispatch }) => {
    // const { showSnackbarError } = useSnackbar();
    try {
      const response = await LoginHospitalService.invoke(data);
      if (response) {
        dispatch(login(response?.payload));
      }
    } catch (error) {
      // showSnackbarError(error.serviceResponse.payload.message);
      throw new Error(error);
    }
  }
);
