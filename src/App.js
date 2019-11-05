import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Route } from "react-router";
import Login from "./containers/auth/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
