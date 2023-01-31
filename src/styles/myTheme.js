import { createTheme } from "@mui/material/styles";
export const MyTheme = createTheme({
  palette: {
    primary: {
      main: "#000",
      ligth: "#000",
      dark: "#000",
      contrastText: "#fff",
    },
    secondary: {
      main: "#000",
      ligth: "#000",
      dark: "#000",
      contrastText: "#fff",
    },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ["IBM Plex Mono"].join(","),
  },
});
