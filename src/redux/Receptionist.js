import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import GetAllPatientService from '@Services/getPatientListService/GetPatientListService';
import UpdatePatientCheckInService from '@Services/updatePatientCheckInService/UpdatePatientCheckInService';
import CloseHospitalService from '@Services/closeHospitalService/CloseHospitalService';
import UpdateTokenStatusService from '@Services/updateTokenStatusService/UpdateTokenStatusService';
import ConsultedService from '@Services/consultedservice/ConsultedService';
import { getCookie } from '@Utils/Cookies';

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

export const getAllBookedPatient = createAsyncThunk(
  'hospital/getAllBookedToken',
  async (data, { dispatch }) => {
    try {
      let options = {
        'x-auth-token': getCookie('token'),
      };
      const response = await GetAllPatientService.invoke(data, options);
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
      let options = {
        'x-auth-token': getCookie('token'),
      };
      const response = await UpdatePatientCheckInService.invoke(data, options);
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
      let options = {
        'x-auth-token': getCookie('token'),
      };
      const response = await CloseHospitalService.invoke(data, options);
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
      let options = {
        'x-auth-token': getCookie('token'),
      };
      const response = await UpdateTokenStatusService.invoke(data, options);
      if (response) {
        dispatch(toaster_data(response?.payload));
      }
    } catch (error) {
      dispatch(toaster_data(error));
      throw new Error(error);
    }
  }
);

export const updateConsultedDetails = createAsyncThunk(
  'hospital/updateConsulted',
  async (data, { dispatch }) => {
    try {
      let options = {
        'x-auth-token': getCookie('token'),
      };
      const response = await ConsultedService.invoke(data, options);
      if (response) {
        dispatch(toaster_data(response?.payload));
      }
    } catch (error) {
      dispatch(toaster_data(error));
      throw new Error(error);
    }
  }
);
