import React from "react";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { blue } from "chalk";


const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },

  },
});


export default function UXPinWrapper({ children }) {
  let roboto = document.createElement('link');
  roboto.setAttribute('rel', 'stylesheet');
  roboto.setAttribute('href', "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700");

  let icons = document.createElement('link');
  icons.setAttribute('rel', 'stylesheet');
  icons.setAttribute('href', "https://fonts.googleapis.com/icon?family=Material+Icons");

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}