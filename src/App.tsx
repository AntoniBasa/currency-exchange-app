import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import ConverterPage from "./pages/converterPage";
import CurrenciesRatePage from "./pages/currenciesRatePage";
import { ThemeProvider } from "@mui/material/styles";
import { MyTheme } from "./styles/myTheme";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={MyTheme}>
        <Header />
        <Routes>
          <Route path="/currenciesRate" element={<CurrenciesRatePage />} />
          <Route path="/" element={<ConverterPage />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
