import React from "react";
import DatePicker from "react-datepicker";

const VehicleSummary = ({
  mySettings: { vehiclecountry, vehiclecurrencycodes, vehicleinpull },
  state: {
    estimatedOdometer,
    registrationNumberSummary,
    vehicleCountry,
    nextServiceDate,
    nextInspectionDate,
    currencyCodes,
    inPull,
    lperkm,
    costperkm,
    totalCost,
    numberOfTyres,
    cumilativeBalance
  },
  handleInputChange,
  handleInspectionDateChange,
  handleServiceDateChange,
  vehicles,
  handleAddVehicleSummary
}) => {
  return (
    <div className="row">
      <form className="row" action="#">
        <div className="card col-md-12 my-card mr-1">
          <div className="card-body custom-card">
            <div className="card-title">Statistics of your Operation</div>
            <hr />
            <div className="row">
              <div className="form-group col-md-4">
                <label>Registration Number</label>{" "}
                <select
                  className="browser-default custom-select selectpicker"
                  name="registrationNumberSummary"
                  value={registrationNumberSummary}
                  onChange={handleInputChange}
                  data-live-search="true"
                >
                  <option selected>Select Vehicle(You can type RegNo.)</option>
                  {vehicles &&
                    vehicles.length &&
                    vehicles.map(({ registration_no, id }) => (
                      <option value={id} data-tokens={registration_no}>
                        {registration_no}
                      </option>
                    ))}
                </select>
              </div>
              <div className="form-group col-md-4">
                <label>Estimated Odometer</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  name="estimatedOdometer"
                  value={estimatedOdometer}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group col-md-4">
                <label>Country</label>
                <div>
                  <select
                    className="browser-default custom-select"
                    name="vehicleCountry"
                    value={vehicleCountry}
                    onChange={handleInputChange}
                  >
                    <option selected>Select Vehicle Country</option>
                    {vehiclecountry &&
                      vehiclecountry.length &&
                      vehiclecountry.map(({ country_name, id }) => (
                        <option value={id}>{country_name}</option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Next Service Date</label>
                <div>
                  <DatePicker
                    selected={nextServiceDate}
                    onChange={handleServiceDateChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Next Inspection Date</label>
                <div>
                  <DatePicker
                    selected={nextInspectionDate}
                    onChange={handleInspectionDateChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Currency Codes</label>
                <div>
                  <select
                    className="browser-default custom-select"
                    name="currencyCodes"
                    value={currencyCodes}
                    onChange={handleInputChange}
                  >
                    <option value="currency" selected>
                      Select Vehicle Currency Code
                    </option>
                    {vehiclecurrencycodes &&
                      vehiclecurrencycodes.length &&
                      vehiclecurrencycodes.map(
                        ({ currency_codes_name, id }) => (
                          <option value={id}>{currency_codes_name}</option>
                        )
                      )}
                  </select>
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>In Pull</label>
                <div>
                  <select
                    className="browser-default custom-select"
                    name="inPull"
                    value={inPull}
                    onChange={handleInputChange}
                  >
                    <option selected>Select Vehicle In Pull</option>
                    {vehicleinpull &&
                      vehicleinpull.length &&
                      vehicleinpull.map(({ in_pull_name, id }) => (
                        <option value={id}>{in_pull_name}</option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>L/100Km</label>
                <div>
                  <input
                    data-parsley-type="alphanum"
                    type="text"
                    className="form-control"
                    placeholder=""
                    name="lperkm"
                    value={lperkm}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Cost per Km</label>
                <div>
                  <input
                    data-parsley-type="alphanum"
                    type="text"
                    className="form-control"
                    placeholder=""
                    name="costperkm"
                    value={costperkm}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Total Cost</label>
                <div>
                  <input
                    data-parsley-type="alphanum"
                    type="text"
                    className="form-control"
                    placeholder=""
                    name="totalCost"
                    value={totalCost}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Number of Remaining Tyres</label>
                <div>
                  <input
                    data-parsley-type="alphanum"
                    type="text"
                    className="form-control"
                    placeholder=""
                    name="numberOfTyres"
                    value={numberOfTyres}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Cumilative Balance</label>
                <div>
                  <input
                    data-parsley-type="alphanum"
                    type="text"
                    className="form-control"
                    placeholder=""
                    name="cumilativeBalance"
                    value={cumilativeBalance}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group col-md-4 mb-0">
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary waves-effect waves-light mr-1"
                    onClick={handleAddVehicleSummary}
                  >
                    Submit
                  </button>{" "}
                  <button
                    type="reset"
                    className="btn btn-secondary waves-effect"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default VehicleSummary;
