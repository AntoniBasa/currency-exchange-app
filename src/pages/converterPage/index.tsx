import React from "react";
import ConverterForm from "../../components/converterForm";
import ConvertResult from "../../components/convertResult";

const ConverterPage: React.FC = () => {
  return (
    <div className="converter_page">
      <div className="converter_page__wrapper">
        <ConverterForm />
        <ConvertResult />
      </div>
    </div>
  );
};

export default ConverterPage;
