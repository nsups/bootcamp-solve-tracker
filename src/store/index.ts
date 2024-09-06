import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import seasonReducer from "./seasonSlice";

const store = configureStore({
  reducer: { 
    season: seasonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export default store;
