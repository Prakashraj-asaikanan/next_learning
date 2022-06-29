import { configureStore } from '@reduxjs/toolkit';
import SessionInfo from './reducers/SessionInfo';

export const store = configureStore({
  reducer: {
    session: SessionInfo,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
