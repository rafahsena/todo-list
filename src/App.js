import React from "react";
import "./App.css";
import Content from "./containers/Content/Content";
import Header from "./components/Header/Header";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Sidebar from "./components/Sidebar/Sidebar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import indigo from "@material-ui/core/colors/indigo";
import Hidden from "@material-ui/core/Hidden";
import EditTodo from "./containers/EditTodo/EditTodo";

export default function App() {
  const theme = createMuiTheme({
    palette: {
      primary: { main: "#7e57c2" },
      secondary: indigo
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
            <Grid item xs={12} md={7}>
              <Content />
            </Grid>
            <Hidden smDown>
              <Grid item md={3}>
                <EditTodo />
              </Grid>
            </Hidden>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
