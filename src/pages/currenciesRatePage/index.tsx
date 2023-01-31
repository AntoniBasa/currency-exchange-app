import React from "react";
import CurrenciesList from "../../components/currenciesList";
import BaseCurrencySelect from "../../components/baseCurrencySelect";

const CurrenciesRatePage: React.FC = () => {
  return (
    <div className="currencies_rate">
      <div className="currencies_rate__wrapper">
        <BaseCurrencySelect />
        <CurrenciesList />
      </div>
    </div>
  );
};

export default CurrenciesRatePage;
