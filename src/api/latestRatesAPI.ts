import axios from "axios";
import { ILatestRatesResponse } from "../store/latestRatesSlice";
export function fetchLatestRates(baseCurrency: string|null) {
  return Promise.all([
    new Promise<ILatestRatesResponse>((resolve) =>
      axios
        .get<ILatestRatesResponse>(
          `https://api.exchangerate.host/convert?from=USD&to=${baseCurrency}&amount=1`
        )
        .then((res) => resolve(res.data))
        .catch((rejected) => rejected)
    ),
    new Promise<ILatestRatesResponse>((resolve) =>
      axios
        .get<ILatestRatesResponse>(
          `https://api.exchangerate.host/convert?from=EUR&to=${baseCurrency}&amount=1`
        )
        .then((res) => resolve(res.data))
        .catch((rejected) => rejected)
    ),
    new Promise<ILatestRatesResponse>((resolve) =>
      axios
        .get<ILatestRatesResponse>(
          `https://api.exchangerate.host/convert?from=UAH&to=${baseCurrency}&amount=1`
        )
        .then((res) => resolve(res.data))
        .catch((rejected) => rejected)
    ),
  ])
    .then((res) => res)
    .catch((rejected) => rejected);
}
