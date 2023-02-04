import React, { PropsWithChildren } from "react";
import { useNavigate, useLocation } from "react-router-dom";

type HeaderButtonPropsTypes = {
  path: string;
};
const HeaderButton: React.FC<PropsWithChildren<HeaderButtonPropsTypes>> = (
  props
) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <button
      style={
        location.pathname === props.path
          ? { backgroundColor: "black", color: "white" }
          : {}
      }
      className="header__button"
      onClick={() => navigate(props.path)}
    >
      {props.children}
    </button>
  );
};

export default HeaderButton;
