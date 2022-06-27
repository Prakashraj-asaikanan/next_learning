import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isSessionLoading: true,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    getSession: () => {
      // TODO:- get session logic
    },
    updateSession: (state, { payload }) => {
      state.isSessionLoading = payload;
      state.loading = false;
      state.hasErrors = false;
    },
  },
});

export const { getSession, updateSession } = sessionSlice.actions;

export const SessionInfoSelector = (state) => state.session;

export default sessionSlice.reducer;

export const updateSessionInfo = () => {
  return async (dispatch) => {
    dispatch(updateSession(false));
  };
};
