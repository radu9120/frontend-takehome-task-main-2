import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/pages/Search.js";
import { GlobalStyle } from "./GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact>
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
