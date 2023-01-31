import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { fetchCurrencies } from "../api/currenciesAPI";

export interface ICurrenciesResponse {
  motd?: object;
  success?: boolean;
  symbols?: object;
}
export interface IBaseCurrencyState {
  value: {
    currencies: string[];
    baseCurrency: string | null;
  };
  status: "idle" | "loading" | "failed";
}

const initialState: IBaseCurrencyState = {
  value: {
    currencies: [],
    baseCurrency: "UAH",
  },
  status: "idle",
};

export const getCurrenciesAsync = createAsyncThunk(
  "baseCurrency/fetchCurrencies",
  async () => {
    const response = await fetchCurrencies();
    if (response.data.symbols) {
      return Object.keys(response.data.symbols);
    } else return [];
  }
);

export const baseCurrencySlice = createSlice({
  name: "baseCurrency",
  initialState,
  reducers: {
    changeBaseCurrency: (state, action: PayloadAction<string | null>) => {
      state.value.baseCurrency = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrenciesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCurrenciesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value.currencies = action.payload;
      })
      .addCase(getCurrenciesAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export const { changeBaseCurrency } = baseCurrencySlice.actions;
export const selectBaseCurrency = (state: RootState) =>
  state.baseCurrency.value.baseCurrency;
export const selectBaseCurrencies = (state: RootState) =>
  state.baseCurrency.value.currencies;
export const selectBaseCurrencyStatus = (state: RootState) =>
  state.baseCurrency.status;
export default baseCurrencySlice.reducer;
