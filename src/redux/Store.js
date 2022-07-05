import { configureStore } from '@reduxjs/toolkit';
import SessionInfo from './reducers/SessionInfo';
import ReceptionistInfo from './reducers/ReceptionistInfo';

export const store = configureStore({
  reducer: {
    session: SessionInfo,
    receptionist: ReceptionistInfo,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
