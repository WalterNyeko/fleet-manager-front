import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Route } from "react-router";
import Login from "./containers/auth/Login";
import PasswordReset from "./containers/forgotPassword/ForgotPassword";
import Home from "./components/auth/Login";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Login} />
          <Route path="/forgotpassword" exact component={PasswordReset}/> 
          <Route path="/login" exact component={Home}/>    
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
