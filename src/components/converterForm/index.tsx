import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useAppDispatch } from "../../store/hooks";
import { convertAsync } from "../../store/convertSlice";

const ConverterForm: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
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
      <button className="converter_page__convert_button" onClick={handleClick}>
        Конвертувати
      </button>
    </div>
  );
};

export default ConverterForm;
