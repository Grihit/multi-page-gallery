import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Navbar />
        <Home />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
