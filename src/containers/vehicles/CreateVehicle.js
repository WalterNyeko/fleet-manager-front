import React, { Component, Fragment } from "react";
import CreateVehicleComponent from "../../components/vehicles/CreateVehicles";
import { fetchSettings } from "../../redux/actions/settings/settings";
import { addVehicle } from "../../redux/actions/vehicles/AddVehicle";
import { addVehicleSummary } from "../../redux/actions/vehicles/AddVehicleSummary";
import { connect } from "react-redux";
import { fetchVehicles } from "../../redux/actions/vehicles/FetchVehicles";

class CreateVehicle extends Component {
  state = {
    date: new Date(),
    leaseEndDate: new Date(),
    contractStartDate: new Date(),
    paymentDate: new Date(),
    releaseDate: new Date(),
    workshopReturnDate: new Date(),
    registrationDate: new Date(),
    registrationNumber: "",
    vehicleType: "",
    fleetNumber: "",
    extraRegistrationNumber: "",
    vehicleTyre: "",
    vehicleStatus: "",
    bodyType: "",
    returnedToWorkshop: "",
    makeCode: "",
    modelCode: "",
    companyCode: "",
    fuelType: "",
    vehicleCounty: "",
    costcenter: "",
    year: "",
    client: "",
    conversion: "",
    estimatedOdometer: "",
    locationCode: "",
    vehicleCountry: "",
    nextService: "",
    nextInspection: "",
    currencyCodes: "",
    inPull: "",
    lperkm: "",
    costperkm: "",
    totalCost: "",
    numberOfTyres: "",
    cumilativeBalance: "",
    exteriorColor: "",
    gearBox: "",
    ecoScore: "",
    interiorColor: "",
    numberOfDoors: "",
    cogkm: "",
    keyNumber: "",
    chassisNumber: "",
    fiscalHp: "",
    engineNumber: "",
    engineCc: "",
    distanceHomeToWork: "",
    vehiclePhoneNumber: "",
    bhp: "",
    deducability: "",
    grossVehicleWeight: "",
    winterTyres: "",
    winterTyresLocation: "",
    tankSize: "",
    waranty: "",
    warantyDistance: "",
    insuranceCompany: "",
    insuranceExpiry: "",
    insuranceCommencement: "",
    insuranceCertificate: "",
    motorInsurancePolicy: "",
    midOn: "",
    midOff: "",
    serviceDate: "",
    lastServiceDate: "",
    serviceSchedule: "",
    serviceIntervalWeeks: "",
    serviceIntervalKms: "",
    inspectionDate: "",
    inspectionType: "",
    inspectionIntervalDistance: "",
    inspectionCertificate: "",
    odometer: "",
    currentOdoDate: "",
    distancePerYear: "",
    distancePerDay: "",
    deviationperc: "",
    deviation: "",
    ageDays: "",
    ageYears: "",
    InspectionIntervalWeeks: "",
    lastServiceType: "",
    registrationNumberSummary: "",
    nextServiceDate: new Date(),
    nextInspectionDate: new Date(),
    driverName: "",
    changedBy: "",
    allocationDate: "",
    allocationStartDate: "",
    allocationOdometer: "",
    allocationEndDate: "",
    allocationEndOdometer: "",
    allocationLock: "",
    allocationWorkshop: "",
    allocationReason: "",
    assetDescription: "",
    assetType: "",
    assetMake: "",
    assetModel: "",
    assetIssueDate: "",
    assetRetuenDate: "",
    assetSerial: "",
    frontTyreMake: "",
    frontTyreSize: "",
    frontTyrePsi: "",
    rearTyreMake: "",
    rearTyreSize: "",
    rearTyrePsi: "",
    batteryMake: "",
    batterySize: "",
    batteryType: "",
    bodyMake: "",
    bodySerial: "",
    gearBoxMake: "",
    gearBoxSerial: "",
    limiterMake: "",
    limiterNumber: "",
    limiterDate: "",
    tachnographMake: "",
    tachnographNumber: "",
    tachnograph2year: "",
    tachnograph6year: "",
    tailLift: "",
    tailNum: "",
    tailSwl: "",
    axleType: "",
    axleNumber: "",
    axleRatio: "",
    numberOfWheels: "",
    forkLightHeight: "",
    tyresAndBatteries: "",
    restorationWorksPosition: "",
    serviceProvision: "",
    maintenanceProvision: "",
    totalMaintenanceProvision: "",
    financeOwner: "",
    electronicallyInvoiced: "",
    salesOutlet: "",
    contractAnnualDistance: "",
    leaseContactNumber: "",
    lotNumber: "",
    supplyMethod: "",
    contractNumber: "",
    contractDuration: "",
    contractDistance: "",
    contractOptionCode: "",
    excessCharge: ''
  };

  componentWillMount() {
    this.props.fetchSettings("vehiclebodytypes");
    this.props.fetchSettings("vehiclestatus");
    this.props.fetchSettings("vehicletyres");
    this.props.fetchSettings("vehiclereturnedworkshop");
    this.props.fetchSettings("vehiclemakecode");
    this.props.fetchSettings("vehiclemodelcode");
    this.props.fetchSettings("vehiclecompanycode");
    this.props.fetchSettings("vehiclefueltype");
    this.props.fetchSettings("vehiclecounty");
    this.props.fetchSettings("vehiclecostcenter");
    this.props.fetchSettings("vehicleclient");
    this.props.fetchSettings("vehicleconventiontype");
    this.props.fetchSettings("vehiclelocationcode");
    this.props.fetchSettings("vehiclecountry");
    this.props.fetchSettings("vehiclecurrencycodes");
    this.props.fetchSettings("vehicleinpull");
    this.props.fetchSettings("vehiclegearbox");
    this.props.fetchSettings("vehicledeductability");
    this.props.fetchSettings("vehicleinsurancecompany");
    this.props.fetchVehicles();
  }
  handleDateChange = date => this.setState({ date });
  handleLeaseEndDateChange = date => this.setState({ leaseEndDate: date });
  handleContractStartDateChange = date => {
    this.setState({ contractStartDate: date });
  };
  handlePaymentDateChange = date => this.setState({ paymentDate: date });
  handleReleaseDateChange = date => this.setState({ releaseDate: date });
  handleWorkshopReturnDateChange = date =>
    this.setState({ workshopReturnDate: date });
  handleRegistrationDateChange = date =>
    this.setState({ registrationDate: date });
  handleServiceDateChange = date => this.setState({ nextServiceDate: date });
  handleInspectionDateChange = date =>
    this.setState({ nextInspectionDate: date });

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  handleAddVehicle = event => {
    event.preventDefault();
    const data = {
      registration_no: this.state.registrationNumber,
      extra_registration_no: this.state.extraRegistrationNumber,
      year: this.state.year,
      fleet_number: this.state.fleetNumber,
      date_registered: this.state.registrationDate,
      date_returned_to_workshop: this.state.workshopReturnDate,
      vehicle_tyre: parseInt(this.state.vehicleTyre),
      vehicle_body_type: parseInt(this.state.bodyType),
      vehicle_client: parseInt(this.state.client),
      vehicle_company_code: parseInt(this.state.companyCode),
      vehicle_convention_type: parseInt(this.state.conversion),
      vehicle_cost_center: parseInt(this.state.costcenter),
      vehicle_fuel_type: parseInt(this.state.fuelType),
      vehicle_make_code: parseInt(this.state.makeCode),
      vehicle_model_code: parseInt(this.state.modelCode),
      vehicle_returned_workshop: parseInt(this.state.returnedToWorkshop),
      vehicle_status: parseInt(this.state.vehicleStatus),
      vehicle_county: parseInt(this.state.vehicleCounty),
      vehicle_location_code: parseInt(this.state.locationCode)
    };
    const { addVehicle } = this.props;
    addVehicle(data);
  };

  handleAddVehicleSummary = event => {
    event.preventDefault();
    const data = {
      registration_no: this.state.registrationNumberSummary,
      estimated_odometer: this.state.estimatedOdometer,
      next_service: this.state.nextServiceDate,
      next_inspection: this.state.nextInspectionDate,
      vehicle_country: parseInt(this.state.vehicleCountry),
      vehicle_currency_codes: parseInt(this.state.currencyCodes),
      in_pull_name: parseInt(this.state.inPull),
      l_per_km: parseInt(this.state.lperkm),
      cost_per_km: parseInt(this.state.costperkm),
      total_cost: parseInt(this.state.totalCost),
      number_of_remining_tyres: parseInt(this.state.numberOfTyres),
      cumilative_balance: parseInt(this.state.cumilativeBalance),
      vehicle_id: parseInt(this.state.registrationNumberSummary)
    };
    const { addVehicleSummary } = this.props;
    addVehicleSummary(data);
  };

  render() {
    const {
      leaseEndDate,
      contractStartDate,
      releaseDate,
      paymentDate,
      workshopReturnDate,
      registrationDate,
      date
    } = this.state;
    const { mySettings } = this.props;
    return (
      <Fragment>
        <CreateVehicleComponent
          handleDateChange={this.handleDateChange}
          handleLeaseEndDateChange={this.handleLeaseEndDateChange}
          handleContractStartDateChange={this.handleContractStartDateChange}
          handlePaymentDateChange={this.handlePaymentDateChange}
          handleReleaseDateChange={this.handleReleaseDateChange}
          handleWorkshopReturnDateChange={this.handleWorkshopReturnDateChange}
          handleRegistrationDateChange={this.handleRegistrationDateChange}
          leaseEndDate={leaseEndDate}
          contractStartDate={contractStartDate}
          paymentDate={paymentDate}
          releaseDate={releaseDate}
          workshopReturnDate={workshopReturnDate}
          registrationDate={registrationDate}
          date={date}
          mySettings={mySettings}
          handleInputChange={this.handleInputChange}
          state={this.state}
          handleAddVehicle={this.handleAddVehicle}
          handleInspectionDateChange={this.handleInspectionDateChange}
          handleServiceDateChange={this.handleServiceDateChange}
          vehicles={this.props.vehicles.vehicles}
          handleAddVehicleSummary={this.handleAddVehicleSummary}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  mySettings: state.settingsReducer,
  addVehicle: state.vehicleReducer,
  vehicles: state.vehicleReducer
});
export default connect(mapStateToProps, {
  fetchSettings,
  addVehicle,
  addVehicleSummary,
  fetchVehicles
})(CreateVehicle);
