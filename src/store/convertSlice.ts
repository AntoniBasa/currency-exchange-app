import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { fetchConvert } from "../api/convertAPI";

export interface IConvertResponse {
    motd?: {
        msg: string,
        url: string
    },
    success?: true,
    query?: {
        from: string,
        to: string,
        amount: number
    },
    info?: {
        rate:number
    },
    historical?: boolean,
    date?: string,
    result: number
}
export interface IConvertArguments {
  currencyFrom:string,
  currencyTo:string,
   amount:number
}
export interface IConvertState {
  value: IConvertResponse;
  status: "idle" | "loading" | "failed";
}

const initialState: IConvertState = {
  value: {result:0},
  status: "idle",
};

export const convertAsync = createAsyncThunk(
  "convert/fetchConvert",
  async (arg:IConvertArguments) => {
    const response = await fetchConvert(arg);
    return response.data;
  }
);

export const convertSlice = createSlice({
  name: "convert",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(convertAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(convertAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(convertAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectConvert = (state: RootState) => state.convert.value;
export const selectConvertStatus = (state:RootState)=>state.convert.status;
export default convertSlice.reducer;
