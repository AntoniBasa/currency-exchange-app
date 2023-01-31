import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {
  getCurrenciesAsync,
  selectBaseCurrencies,
  selectBaseCurrency,
  changeBaseCurrency,
} from "../../store/baseCurrencySlice";
import { useAppSelector, useAppDispatch } from "../../store/hooks";

const BaseCurrencySelect: React.FC = () => {
  const dispatch = useAppDispatch();
  const currenciesResult = useAppSelector(selectBaseCurrencies);
  const baseCurrency = useAppSelector(selectBaseCurrency);
  useEffect(() => {
    dispatch(getCurrenciesAsync());
  }, []);
  const handleChangeSelect = (value: string | null) => {
    dispatch(changeBaseCurrency(value));
  };
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      value={baseCurrency}
      onChange={(event: any, newValue: string | null) => {
        handleChangeSelect(newValue);
      }}
      options={currenciesResult}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Базова валюта" />}
    />
  );
};

export default BaseCurrencySelect;
