import React, { Component, Fragment } from "react";
import CreateVehicleComponent from "../../components/vehicles/CreateVehicles";

export default class CreateVehicle extends Component {
  state = {
    date: new Date(),
    leaseEndDate: new Date(),
    contractStartDate: new Date(),
    paymentDate: new Date(),
    releaseDate: new Date(),
    workshopReturnDate: new Date(),
    registrationDate: new Date()
  };
  handleDateChange = date => this.setState({ date });
  handleLeaseEndDateChange = date => this.setState({ leaseEndDate: date });
  handleContractStartDateChange = date =>
    this.setState({ contractStartDate: date });
  handlePaymentDateChange = date => this.setState({ paymentDate: date });
  handleReleaseDateChange = date => this.setState({ releaseDate: date });
  handleWorkshopReturnDateChange = date =>
    this.setState({ workshopReturnDate: date });
  handleRegistrationDateChange = date =>
    this.setState({ registrationDate: date });

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
        />
      </Fragment>
    );
  }
}
