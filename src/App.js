import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

export default function App() {
  const theme = createMuiTheme({
    palette: {
      primary: { main: "#7e57c2" },
      secondary: { main: "#ff4081" }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}
