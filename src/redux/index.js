import { configureStore } from '@reduxjs/toolkit';
import Login from './Login';
import Receptionist from './Receptionist';

export const store = configureStore({
  reducer: {
    login: Login,
    receptionist: Receptionist,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
