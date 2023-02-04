import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FooterSocialButton from "../footerSocialButton";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      Test task from Anton Basaliuk{" "}
      <FooterSocialButton href="https://t.me/AntoniBasaliuk">
        <TelegramIcon />
      </FooterSocialButton>
      <FooterSocialButton href="https://www.linkedin.com/in/antoniuxui/">
        <LinkedInIcon />
      </FooterSocialButton>
      <FooterSocialButton href="https://github.com/AntoniBasa">
        <GitHubIcon />
      </FooterSocialButton>
    </div>
  );
};

export default Footer;
