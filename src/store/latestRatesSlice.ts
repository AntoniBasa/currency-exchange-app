import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { fetchLatestRates } from "../api/latestRatesAPI";

export interface ILatestRatesResponse {
  motd?: {
    msg: string;
    url: string;
  };
  success?: true;
  query?: {
    from: string;
    to: string;
    amount: number;
  };
  info?: {
    rate: number;
  };
  historical?: boolean;
  date?: string;
  result?: number;
}
export interface ILatestRatesState {
  value: ILatestRatesResponse[];
  status: "idle" | "loading" | "failed";
}

const initialState: ILatestRatesState = {
  value: [],
  status: "idle",
};

export const getLatestRatesAsync = createAsyncThunk(
  "latestRates/fetchLatestRates",
  async (baseCurrency: string|null) => {
    const response = await fetchLatestRates(baseCurrency);
    return response;
  }
);

export const latestRatesSlice = createSlice({
  name: "latestRates",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLatestRatesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getLatestRatesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(getLatestRatesAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectLatestRates = (state: RootState) => state.latestRates.value;
export const selectLatestRatesStatus = (state: RootState) =>
  state.latestRates.status;
export default latestRatesSlice.reducer;
