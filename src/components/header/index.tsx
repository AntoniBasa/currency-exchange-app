import React from "react";
import { useNavigate,useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location =useLocation()
  return (
    <div className="header__wrapper">
      <nav className="header">
        <button style={location.pathname==="/"?{backgroundColor:"black",color:"white"}:{}} className="header__button" onClick={() => navigate("/")}>Конвертор</button>
        <button style={location.pathname==="/currenciesRate"?{backgroundColor:"black",color:"white"}:{}} className="header__button" onClick={() => navigate("/currenciesRate")}>Курс валют</button>
      </nav>
    </div>
  );
};

export default Header;
