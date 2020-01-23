import React, { Component, Fragment } from "react";
import CreateVehicleComponent from "../../components/vehicles/CreateVehicles";
import { fetchSettings } from "../../redux/actions/settings/settings";
import { connect } from "react-redux";
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
    vehicleStatus: "",
    bodyType: "",
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
    lastServiceType: ''
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

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(this.state);
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
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  mySettings: state.settingsReducer
});
export default connect(mapStateToProps, { fetchSettings })(CreateVehicle);
