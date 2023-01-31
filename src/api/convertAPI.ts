import axios from 'axios'
import { IConvertResponse } from '../store/convertSlice';
import { IConvertArguments } from '../store/convertSlice';
export function fetchConvert(arg:IConvertArguments) {
     const {currencyFrom,currencyTo, amount}= arg
  return new Promise<{ data: IConvertResponse }>((resolve) =>
   axios.get<IConvertResponse>(`https://api.exchangerate.host/convert?from=${currencyFrom}&to=${currencyTo}&amount=${amount}`).then(
    (res) => resolve(res)
  ).catch((rejected) =>rejected
   )
  );
}