import "./App.css";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme.tsx";
import React from "react";
import Home from "./pages/Home/Home.tsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
