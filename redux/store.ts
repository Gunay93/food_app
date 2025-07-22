import { sliderApi } from '@/services/sliderApi';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [sliderApi.reducerPath]: sliderApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sliderApi.middleware)
});