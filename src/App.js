import React, { Component } from "react";
import { HashRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router";
import Login from "./containers/auth/Login";
import Registration from "./containers/registration/Registration";
import SideBar from "./containers/commons/SideBar";
import TopNav from "./containers/commons/TopNav";
import ForgotPassword from "./containers/forgotPassword/ForgotPassword";
import CreateVehicle from "./containers/vehicles/CreateVehicle";
import AddVehicleDefects from "./containers/vehicledefects/AddVehicleDefects";

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
            <Route path="/createvehicle" exact component={CreateVehicle} />
            <Route
              path="/createvehicledefects"
              exact
              component={AddVehicleDefects}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
