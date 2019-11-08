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
import CreateAccidentRecord from "./containers/accidents/CreateAccidentRecord";
import CreateCostingIncuredRecord from "./containers/costingIncured/CreateCostingIncuredRecord";
import VehicleAsset from "./containers/vehicleAsset/VehicleAsset"
import CreatePullCar from "./containers/pullcar/CreatePullCar";
import CreateStockRecord from "./containers/stock/CreateStockRecord";
import CreateMaintenanceRecord from "./containers/maintenance/CreateMaintenanceIncuredRecord";
import CreateVeichleHireRecord from "./containers/veichlehire/CreateVeichleHireRecord";
import CreateFuelExpenseRecord from "./containers/fuelExpense/CreateFuelExpenseRecord";
import CreateInvoiceRecord from "./containers/invoice/CreateInvoiceRecord";
import VehicleTyres from "./containers/vehicletyres/VehicleTyres";
import AllVehicles from "./containers/vehicles/AllVeichles";
import AllVehiclesHire from "./containers/veichlehire/AllVeichlesHire";
import AllVehiclesOffRoad from "./containers/vehicles/AllVeichlesOffRoad";
import AllMarkedVehiclesAssets from "./containers/vehicles/AllVMarkedeichlesAssets";
import AllTyres from "./containers/vehicletyres/AllTyres";
import AllFuel from "./containers/fuelExpense/AllFuel";
import AllDefects from "./containers/vehicledefects/AllDefects";
import AllAccidents from "./components/accidents/AllAccidents";

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
            <Route path="/createveichlehire" exact component={CreateVeichleHireRecord} />
            <Route path="/createfuelexpense" exact component={CreateFuelExpenseRecord} />
            <Route path="/createinvoice" exact component={CreateInvoiceRecord} />
            <Route path="/createaccidentrecord" exact component={CreateAccidentRecord} />
            <Route path="/createcostingincured" exact component={CreateCostingIncuredRecord} />
            <Route path="/createpullcarincidence" exact component={CreatePullCar} />
            <Route path="/createmaintenacerecord" exact component={CreateMaintenanceRecord} />
            <Route path="/createvehicledefects" exact component={AddVehicleDefects} />
            <Route path="/createvehicleasset" exact component={VehicleAsset}/>
            <Route path="/createstockrecord" exact component={CreateStockRecord} />
            <Route path="/createvehicletyres" exact component={VehicleTyres}/>
            <Route path="/allvehicles" exact component={AllVehicles} />
            <Route path="/allveichleshire" exact component={AllVehiclesHire} />
            <Route path="/allveichlesoffroad" exact component={AllVehiclesOffRoad} />
            <Route path="/allmarkedveichlesassets" exact component={AllMarkedVehiclesAssets} />
            <Route path="/alltyres" exact component={AllTyres} />
            <Route path="/allfuel" exact component={AllFuel} />
            <Route path="/alldefects" exact component={AllDefects} />
            <Route path="/allaccidents" exact component={AllAccidents} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
