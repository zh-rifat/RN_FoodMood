import { configureStore } from '@reduxjs/toolkit';
import authScreenReducer from './slices/authScreenSlice';
import basketReducer from './slices/basketSlice';
export const store = configureStore({
  reducer: {
    authScreen: authScreenReducer,
    basket:basketReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
