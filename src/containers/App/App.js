import React, { useState } from "react";
import "./App.css";
import Todos from "../Todos/Todos";
import Header from "../Header/Header";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Sidebar from "../../components/Sidebar/Sidebar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import indigo from "@material-ui/core/colors/indigo";
import Hidden from "@material-ui/core/Hidden";
import Calendar from "../../components/Calendar/Calendar";
import OptionList from "../OptionsList/OptionsList";
import InputBase from "@material-ui/core/InputBase";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [pattern, setPattern] = useState("");
  const [filter, setFilter] = useState(() => () => true);
  const [id, setId] = useState(1);

  const getID = () => {
    const oldId = id;
    setId(oldId + 1);
    return oldId;
  };

  const filterTodos = callback => {
    setFilter(() => callback);
  };

  const handleSearch = event => {
    setPattern(event.target.value);
  };

  const theme = createMuiTheme({
    palette: {
      primary: { main: "#7e57c2" },
      secondary: indigo
    }
  });

  const matched = todos
    .filter(filter)
    .filter(todo => todo.text.includes(pattern));

  return (
    <ThemeProvider theme={theme}>
      <Box className="wrapper" display="flex" flexDirection="column">
        <Header list={<OptionList filterTodos={filterTodos} />}>
          <InputBase
            placeholder="Buscar por..."
            inputProps={{
              "aria-label": "search",
              value: pattern,
              onChange: event => handleSearch(event)
            }}
          />
        </Header>
        <Box display="flex" flex={1}>
          <Grid container>
            <Hidden smDown>
              <Grid item md={2}>
                <Sidebar>
                  <OptionList filterTodos={filterTodos}>
                    <Calendar todos={todos} />
                  </OptionList>
                </Sidebar>
              </Grid>
            </Hidden>
            <Grid item xs={12} md={10}>
              <Todos
                getID={getID}
                todos={todos}
                setTodos={setTodos}
                matched={matched}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
