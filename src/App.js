import React from "react";
import "./App.css";
import Content from "./containers/Content/Content";
import Header from "./components/Header/Header";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Sidebar from "./components/Sidebar/Sidebar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import blue from "@material-ui/core/colors/blue";
import Hidden from "@material-ui/core/Hidden";

export default function App() {
  const theme = createMuiTheme({
    palette: {
      primary: { main: "#7e57c2" },
      secondary: blue
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Box className="wrapper" display="flex" flexDirection="column">
        <Header />
        <Box display="flex" flex={1}>
          <Grid container>
            <Hidden smDown>
              <Grid item md={2}>
                <Sidebar />
              </Grid>
            </Hidden>
            <Grid item xs={12} md={10}>
              <Content />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
