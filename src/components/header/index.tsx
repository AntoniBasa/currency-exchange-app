import React from "react";
import HeaderButton from "../headerButton";

const Header: React.FC = () => {
  return (
    <div className="header__wrapper">
      <nav className="header">
      <HeaderButton path="/">Конвертор</HeaderButton>
      <HeaderButton path="/currenciesRate">Курс валют</HeaderButton>
      </nav>
    </div>
  );
};

export default Header;
