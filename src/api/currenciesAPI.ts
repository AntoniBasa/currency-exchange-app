import axios from "axios";
import { ICurrenciesResponse } from "../store/baseCurrencySlice";
export function fetchCurrencies() {
  return new Promise<{ data: ICurrenciesResponse }>((resolve) =>
    axios
      .get<ICurrenciesResponse>(`https://api.exchangerate.host/symbols`)
      .then((res) => resolve(res))
      .catch((rejected) => rejected)
  );
}
