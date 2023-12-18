import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme.tsx";
import React from "react";
import Home from "./pages/Home/Home.tsx";
import Pledge from "./pages/Pledge/Pledge.tsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pledge" element={<Pledge />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
