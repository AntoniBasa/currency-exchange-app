import React, { PropsWithChildren } from "react";
import IconButton from "@mui/material/IconButton";
type FooterButtonPropsTypes = {
    href: string;
};
const FooterSocialButton: React.FC<PropsWithChildren<FooterButtonPropsTypes>> = (props) => {
  return (
    <a href={props.href}>
      <IconButton>{props.children}</IconButton>
    </a>
  );
};

export default FooterSocialButton;
