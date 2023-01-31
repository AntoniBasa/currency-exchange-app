import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import {
  selectConvert,
  selectConvertStatus,
  convertAsync,
} from "../../store/convertSlice";
import TextField from "@mui/material/TextField";

const ConverterPage: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const convertResult = useAppSelector(selectConvert);
  const status = useAppSelector(selectConvertStatus);
  const dispatch = useAppDispatch();

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };
  const handleClick = async () => {
    const inputValueArr = inputValue.split(" ", 4);
    dispatch(
      convertAsync({
        currencyFrom: inputValueArr[1],
        currencyTo: inputValueArr[3],
        amount: Number(inputValueArr[0]),
      })
    );
  };
  return (
    <div className="converter_page">
      <div className="converter_page__wrapper">
        <div className="converter_page__input_wrapper">
          <TextField
            id="standard-basic"
            label="Приклад: 15 usd in uah"
            variant="standard"
            type="text"
            value={inputValue}
            placeholder="Введіть значення"
            onChange={(e) => handleInputChange(e.target.value)}
            sx={{ width: "300px" }}
          />
          <button
            className="converter_page__convert_button"
            onClick={handleClick}
          >
            Конвертувати
          </button>
        </div>
        <div className="converter_page__result_wrapper">
          <h3>Результат:</h3>
          {status === "loading" ? (
            <div>Loading...</div>
          ) : status === "idle" && inputValue && convertResult.result ? (
            <h3>{convertResult.result.toFixed(2)} {convertResult.query?.to}</h3>
          ) : status === "failed" ? (
            <div>Сталась помилка!</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ConverterPage;
