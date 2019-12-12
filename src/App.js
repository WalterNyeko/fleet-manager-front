import React, { Component } from "react";
import { HashRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router";
import { Provider } from "react-redux";
import Login from "./containers/auth/Login";
import Registration from "./containers/registration/Registration";
import SideBar from "./containers/commons/SideBar";
import TopNav from "./containers/commons/TopNav";
import ForgotPassword from "./containers/forgotPassword/ForgotPassword";
import CreateVehicle from "./containers/vehicles/CreateVehicle";
import VehicleOffRoad from "./containers/vehiclesOffRoad/VehicleOffRoad";
import AddVehicleDefects from "./containers/vehicledefects/AddVehicleDefects";
import CreateAccidentRecord from "./containers/vehicles/CreateAccidentRecord";
import CreateCostingIncuredRecord from "./containers/costingIncured/CreateCostingIncuredRecord";
import CreatePullCar from "./containers/pullcar/CreatePullCar";
import CreateStockRecord from "./containers/stock/CreateStockRecord";
import CreateMaintenanceRecord from "./containers/maintenance/CreateMaintenanceIncuredRecord";
import CreateVeichleHireRecord from "./containers/veichlehire/CreateVeichleHireRecord";
import CreateFuelExpenseRecord from "./containers/fuelExpense/CreateFuelExpenseRecord";
import CreateInvoiceRecord from "./containers/invoice/CreateInvoiceRecord";
import VehicleTyres from "./containers/vehicletyres/VehicleTyres";
import AllVehicles from "./containers/vehicles/AllVeichles";
import AllVehiclesHire from "./containers/veichlehire/AllVeichlesHire";
import AllVehiclesOffRoad from "./containers/vehiclesOffRoad/AllVeichlesOffRoad";
import AllMarkedVehiclesAssets from "./containers/vehicles/AllVMarkedeichlesAssets";
import AllTyres from "./containers/vehicletyres/AllTyres";
import AllFuel from "./containers/fuelExpense/AllFuel";
import AllDefects from "./containers/vehicledefects/AllDefects";
import AllAccidents from "./containers/accidents/AllAccidents";
import AllMaintenance from "./containers/maintenance/AllMaintenance";
import AllPullcar from "./containers/pullcar/AllPullcar";
import AllCosting from "./containers/costingIncured/AllCosting";
import AllPurchase from "./containers/invoice/AllPurchase";
import AllStock from "./containers/stock/AllStock";
import AllCustomerRelations from "./containers/customerrelations/AllCustomerRelations";
import AllInsuranceCertificate from "./containers/insurancecertificate/AllInsuranceCertificate";
import AllManagementReports from "./containers/managementreports/AllManagementReports";
import CreateCustomerRelations from "./containers/customerrelations/CreateCustomerRelations";
import CreateInsuaranceCertificate from "./containers/insurancecertificate/CreateInsuranceCertificate";
import Settings from "./containers/settings/Settings";
import store from "./redux/store/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
                path="/createveichlehire"
                exact
                component={CreateVeichleHireRecord}
              />
              <Route
                path="/createfuelexpense"
                exact
                component={CreateFuelExpenseRecord}
              />
              <Route
                path="/createinvoice"
                exact
                component={CreateInvoiceRecord}
              />
              <Route
                path="/createaccidentrecord"
                exact
                component={CreateAccidentRecord}
              />
              <Route
                path="/createcostingincured"
                exact
                component={CreateCostingIncuredRecord}
              />
              <Route
                path="/createpullcarincidence"
                exact
                component={CreatePullCar}
              />
              <Route
                path="/createmaintenacerecord"
                exact
                component={CreateMaintenanceRecord}
              />
              <Route
                path="/createvehicledefects"
                exact
                component={AddVehicleDefects}
              />
              <Route
                path="/createstockrecord"
                exact
                component={CreateStockRecord}
              />
              <Route
                path="/createvehicletyres"
                exact
                component={VehicleTyres}
              />
              <Route path="/allvehicles" exact component={AllVehicles} />
              <Route
                path="/allveichleshire"
                exact
                component={AllVehiclesHire}
              />
              <Route
                path="/allveichlesoffroad"
                exact
                component={AllVehiclesOffRoad}
              />
              <Route
                path="/allmarkedveichlesassets"
                exact
                component={AllMarkedVehiclesAssets}
              />
              <Route path="/alltyres" exact component={AllTyres} />
              <Route path="/allfuel" exact component={AllFuel} />
              <Route path="/alldefects" exact component={AllDefects} />
              <Route path="/allaccidents" exact component={AllAccidents} />
              <Route path="/allmaintenance" exact component={AllMaintenance} />
              <Route path="/allpullcar" exact component={AllPullcar} />
              <Route path="/allcosting" exact component={AllCosting} />
              <Route path="/allpurchase" exact component={AllPurchase} />
              <Route path="/allstock" exact component={AllStock} />
              <Route
                path="/allcustomerrelations"
                exact
                component={AllCustomerRelations}
              />
              <Route
                path="/allinsurancecertificates"
                exact
                component={AllInsuranceCertificate}
              />
              <Route
                path="/allmanagementreports"
                exact
                component={AllManagementReports}
              />
              <Route
                path="/createcustomerrelations"
                exact
                component={CreateCustomerRelations}
              />
              <Route
                path="/createinsurancecertificate"
                exact
                component={CreateInsuaranceCertificate}
              />
              <Route path="/vehiclesoffraod" exact component={VehicleOffRoad} />
              <Route path="/settings" exact component={Settings} />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
