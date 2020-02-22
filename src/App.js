import React from "react";
import "./App.css";
import Content from "./containers/Content/Content";
import Header from "./components/Header/Header";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Sidebar from "./components/Sidebar/Sidebar";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

export default function App() {
  const theme = createMuiTheme({
    palette: {
      primary: { main: "#7e57c2" },
      secondary: { main: "#ff4081" }
    }
  });


  return (
    <ThemeProvider theme={theme}>
    <Box className="wrapper" display="flex" flexDirection="column">

      <Header />
      <Box display="flex" flex={1}>
        <Grid container>
          <Grid item xs={0} sm={2}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} sm={10}>
            <Content>
            </Content>
          </Grid>
        </Grid>
      </Box>
    </Box>
    </ThemeProvider>
  );
}
