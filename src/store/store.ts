import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import convertReducer from "./convertSlice";
import latestRatesReducer from "./latestRatesSlice";
import baseCurrencyReducer from "./baseCurrencySlice";

export const store = configureStore({
  reducer: {
    convert: convertReducer,
    latestRates: latestRatesReducer,
    baseCurrency: baseCurrencyReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
