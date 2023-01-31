import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      Test task from Anton Basaliuk{" "}
      <a href="https://t.me/AntoniBasaliuk">
        <IconButton>
          <TelegramIcon />
        </IconButton>
      </a>{" "}
      <a href="https://www.linkedin.com/in/antoniuxui/">
        <IconButton>
          <LinkedInIcon />
        </IconButton>
      </a>
      <a href="https://github.com/AntoniBasa">
        <IconButton>
          <GitHubIcon />
        </IconButton>
      </a>
    </div>
  );
};

export default Footer;
