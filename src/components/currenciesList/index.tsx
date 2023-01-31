import React, { useEffect } from "react";
import {
  getLatestRatesAsync,
  selectLatestRates,
} from "../../store/latestRatesSlice";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import CurrencyListItem from "../currencyListItem";
import { Paper, Box, List } from "@mui/material";
import { selectBaseCurrency } from "../../store/baseCurrencySlice";

const CurrenciesList: React.FC = () => {
  const dispatch = useAppDispatch();
  const currenciesRateResult = useAppSelector(selectLatestRates);
  const baseCurrency = useAppSelector(selectBaseCurrency);
  useEffect(() => {
    dispatch(getLatestRatesAsync(baseCurrency));
  }, [baseCurrency]);

  return (
    <Box sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}>
      <Paper sx={{ borderRadius: "20px" }} elevation={2}>
        <List>
          {currenciesRateResult.length > 0
            ? currenciesRateResult.map((item,index) => {
                return <CurrencyListItem key={index} item={item} />;
              })
            : null}
        </List>
      </Paper>
    </Box>
  );
};

export default CurrenciesList;
