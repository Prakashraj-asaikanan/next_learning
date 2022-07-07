import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ReceptionistService from 'src/services/ReceptionistService/GetallPatient';
import PatientCheckINService from 'src/services/ReceptionistService/updatePatientCheckIn';
import CloseHospitalReceptionist from 'src/services/ReceptionistService/closeHospital';
import UpdateTokenStatus from 'src/services/ReceptionistService/updateTokenStatus';

const initialState = {};

const receptionistSlice = createSlice({
  name: 'receptionist',
  initialState,
  reducers: {
    getallpatient: (state, action) => {
      const { allBookedTokens } = action.payload;
      state.bookedPatient = [...allBookedTokens];
    },
    toaster_data: (state, action) => {
      const { message, code } = action.payload;
      state.toaster_data = { message: message, status: code === 400 ? 'error' : 'success' };
      if (code != 400) {
        state.bookedPatient = null;
      }
    },
    // closeHosiptals: (state, action) => {
    //   const { message, code } = action.payload;
    //   state.close_hospital = { message: message, status: code === 400 ? 'error' : 'success' };
    // },
  },
});

export const { getallpatient, toaster_data } = receptionistSlice.actions;

export const ReceptionistInfoSelector = (state) => state.receptionist;

export default receptionistSlice.reducer;

let options = {
  'x-auth-token':`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRldmFraUBnbWFpbC5jb20iLCJpYXQiOjE2NTY0ODMxNzAsImV4cCI6MTY2MDA4MzE3MH0.kKwLrNFV5Wn5mjBVUBEYvKYqeFYWm62hP-ZxxPqhzfI`,
};

export const getAllBookedPatient = createAsyncThunk(
  'hospital/getAllBookedToken',
  async (data, { dispatch }) => {
    try {
      const response = await ReceptionistService.invoke(data, options);
      if (response) {
        dispatch(getallpatient(response?.payload));
      }
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const UpdateCheckInPatient = createAsyncThunk(
  'hospital/updateCheckin',
  async (data, { dispatch }) => {
    try {
      const response = await PatientCheckINService.invoke(data, options);
      if (response) {
        dispatch(toaster_data(response?.payload));
      }
    } catch (error) {
      dispatch(toaster_data(error));
      throw new Error(error);
    }
  }
);

export const closeHospitalForDay = createAsyncThunk(
  'hospital/closeHospital',
  async (data, { dispatch }) => {
    try {
      const response = await CloseHospitalReceptionist.invoke(data, options);
      if (response) {
        dispatch(toaster_data(response?.payload));
      }
    } catch (error) {
      dispatch(toaster_data(error));
      throw new Error(error);
    }
  }
);

export const updateTokenStatus = createAsyncThunk(
  'hospital/updateTokenStatus',
  async (data, { dispatch }) => {
    try {
      const response = await UpdateTokenStatus.invoke(data, options);
      if (response) {
        dispatch(toaster_data(response?.payload));
      }
    } catch (error) {
      dispatch(toaster_data(error));
      throw new Error(error);
    }
  }
);
