import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  CssBaseline,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core";
import App from "./components/App";
import GlobalCss from "./GlobalCss";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <GlobalCss />
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.Fragment>,
  document.getElementById("root")
);
