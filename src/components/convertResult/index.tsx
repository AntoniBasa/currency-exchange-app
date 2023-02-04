import React from "react";
import { useAppSelector } from "../../store/hooks";
import { selectConvert, selectConvertStatus } from "../../store/convertSlice";

const ConvertResult: React.FC = () => {
  const convertResult = useAppSelector(selectConvert);
  const status = useAppSelector(selectConvertStatus);
  return (
    <div className="converter_page__result_wrapper">
      <h3>Результат:</h3>
      {status === "loading" ? (
        <div>Loading...</div>
      ) : status === "idle" && convertResult.result ? (
        <h3>
          {convertResult.result.toFixed(2)} {convertResult.query?.to}
        </h3>
      ) : status === "failed" ? (
        <div>Сталась помилка!</div>
      ) : null}
    </div>
  );
};

export default ConvertResult;
