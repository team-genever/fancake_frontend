import React from "react";
import ReactDOM from "react-dom";
//import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "App";
import reportWebVitals from "reportWebVitals";
import theme from "theme";
import { CookiesProvider } from "react-cookie";
import smoothscroll from "smoothscroll-polyfill";
import ReactGA from 'react-ga';

ReactGA.initialize("UA-211868081-1");
smoothscroll.polyfill();


ReactDOM.render(
  <CookiesProvider>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </CookiesProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
