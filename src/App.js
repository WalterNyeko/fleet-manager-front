<<<<<<< HEAD
import React, { Component } from "react";
import { HashRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router";
import Login from "./containers/auth/Login";
import Registration from "./containers/registration/Registration";
import SideBar from "./containers/commons/SideBar";
import TopNav from "./containers/commons/TopNav";
import ForgotPassword from "./containers/forgotPassword/ForgotPassword"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <TopNav />
          <SideBar />
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" exact component={Registration} />
            <Route path="/forgotpassword" exact component={ForgotPassword} />            
          </Switch>
        </Router>
      </div>
    );
  }
=======
import React from "react"; 
import { BrowserRouter, Route, Switch} from "react-router-dom"
import PasswordReset from "./containers/forgotpassword/ForgotPassword";
import Login from "./components/auth/Login";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Login} />
          <Route path="/forgotpassword" exact component={PasswordReset}/> 
        </Switch>
      </BrowserRouter>
      
    </div>
  );
>>>>>>> added forgotpassword page
}

export default App;
