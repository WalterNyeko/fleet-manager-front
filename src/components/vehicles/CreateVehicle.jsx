import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateVehicle = ({
  handleWorkshopReturnDateChange,
  handleRegistrationDateChange,
  workshopReturnDate,
  registrationDate,
  state: {
    registrationNumber,
    vehicleTyre,
    fleetNumber,
    extraRegistrationNumber,
    vehicleStatus,
    bodyType,
    makeCode,
    modelCode,
    companyCode,
    fuelType,
    vehicleCounty,
    costcenter,
    year,
    client,
    conversion,
    returnedToWorkshop,
    locationCode
  },
  handleAddVehicle,
  handleInputChange,
  mySettings: {
    vehiclestatus,
    vehiclebodytypes,
    vehicletyres,
    vehiclereturnedworkshop,
    vehiclemakecode,
    vehiclemodelcode,
    vehiclecompanycode,
    vehiclefueltype,
    vehiclecounty,
    vehiclecostcenter,
    vehicleclient,
    vehicleconventiontype,
    vehiclelocationcode
  }
}) => {
  return (
    <div className="row">
      <form className="row" action="#">
        <div className="card col-md-12 my-card mr-1">
          <div className="card-body custom-card">
            <div className="row">
              <div className="form-group col-md-4">
                <label>Registration No.</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  name="registrationNumber"
                  value={registrationNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group col-md-4">
                <label>Fleet Number</label>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    name="fleetNumber"
                    value={fleetNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Vehicle Tyre</label>
                <div>
                  <select
                    className="browser-default custom-select"
                    onChange={handleInputChange}
                    name="vehicleTyre"
                    value={vehicleTyre}
                  >
                    <option value="tyre" selected>
                      Select Vehicle Tyre
                    </option>
                    {vehicletyres &&
                      vehicletyres.length &&
                      vehicletyres.map(({ tyre_name, id }) => (
                        <option value={id}>{tyre_name}</option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Extra Registration No.</label>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    name="extraRegistrationNumber"
                    value={extraRegistrationNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Vehicle Status</label>
                <div>
                  <select
                    className="browser-default custom-select"
                    name="vehicleStatus"
                    value={vehicleStatus}
                    onChange={handleInputChange}
                  >
                    <option value="body" selected>
                      Select Vehicle Status
                    </option>
                    {vehiclestatus &&
                      vehiclestatus.length &&
                      vehiclestatus.map(({ status_name, id }) => (
                        <option value={id}>{status_name}</option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Body Type</label>
                <div>
                  <select
                    className="browser-default custom-select"
                    name="bodyType"
                    value={bodyType}
                    onChange={handleInputChange}
                  >
                    <option selected>Select Body Type</option>
                    {vehiclebodytypes &&
                      vehiclebodytypes.length &&
                      vehiclebodytypes.map(({ body_type_name, id }) => (
                        <option value={id}>{body_type_name}</option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Returned to Workshop</label>
                <div>
                  <select
                    className="browser-default custom-select"
                    name="returnedToWorkshop"
                    value={returnedToWorkshop}
                    onChange={handleInputChange}
                  >
                    <option value="returned" selected>
                      Select Vehicle Workshop
                    </option>
                    {vehiclereturnedworkshop &&
                      vehiclereturnedworkshop.length &&
                      vehiclereturnedworkshop.map(
                        ({ returned_workshop_name, id }) => (
                          <option value={id}>{returned_workshop_name}</option>
                        )
                      )}
                  </select>
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Date Returned to Workshop</label>
                <div>
                  <DatePicker
                    selected={workshopReturnDate}
                    onChange={handleWorkshopReturnDateChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Make Code</label>
                <div>
                  <select
                    className="browser-default custom-select"
                    name="makeCode"
                    value={makeCode}
                    onChange={handleInputChange}
                  >
                    <option selected>Select Vehicle Make Code</option>
                    {vehiclemakecode &&
                      vehiclemakecode.length &&
                      vehiclemakecode.map(({ make_code_name, id }) => (
                        <option value={id}>{make_code_name}</option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Model Code</label>
                <div>
                  <select
                    className="browser-default custom-select"
                    value={modelCode}
                    name="modelCode"
                    onChange={handleInputChange}
                  >
                    <option selected>Select Vehicle Model Code</option>
                    {vehiclemodelcode &&
                      vehiclemodelcode.length &&
                      vehiclemodelcode.map(({ model_code_name, id }) => (
                        <option value={id}>{model_code_name}</option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Company Code</label>
                <div>
                  <select
                    className="browser-default custom-select"
                    name="companyCode"
                    value={companyCode}
                    onChange={handleInputChange}
                  >
                    <option selected>Select Company Code</option>
                    {vehiclecompanycode &&
                      vehiclecompanycode.length &&
                      vehiclecompanycode.map(({ company_code_name, id }) => (
                        <option value={id}>{company_code_name}</option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Fuel Type</label>
                <div>
                  <select
                    className="browser-default custom-select"
                    name="fuelType"
                    value={fuelType}
                    onChange={handleInputChange}
                  >
                    <option value="fuel" selected>
                      Select Fuel Type
                    </option>
                    {vehiclefueltype &&
                      vehiclefueltype.length &&
                      vehiclefueltype.map(({ fuel_type_name, id }) => (
                        <option value={id}>{fuel_type_name}</option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>County</label>
                <div>
                  <select
                    className="browser-default custom-select"
                    name="vehicleCounty"
                    value={vehicleCounty}
                    onChange={handleInputChange}
                  >
                    <option selected>Select Vehicle County</option>
                    {vehiclecounty &&
                      vehiclecounty.length &&
                      vehiclecounty.map(({ county_name, id }) => (
                        <option value={id}>{county_name}</option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Date Registered</label>
                <div>
                  <DatePicker
                    selected={registrationDate}
                    onChange={handleRegistrationDateChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Cost Center</label>
                <div>
                  <select
                    className="browser-default custom-select"
                    name="costcenter"
                    value={costcenter}
                    onChange={handleInputChange}
                  >
                    <option selected>Select Vehicle Cost Center</option>
                    {vehiclecostcenter &&
                      vehiclecostcenter.length &&
                      vehiclecostcenter.map(({ cost_center_name, id }) => (
                        <option value={id}>{cost_center_name}</option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Year</label>
                <div>
                  <input
                    data-parsley-type="alphanum"
                    type="text"
                    className="form-control"
                    placeholder=""
                    name="year"
                    value={year}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Division/Client</label>
                <div>
                  <select
                    className="browser-default custom-select"
                    name="client"
                    value={client}
                    onChange={handleInputChange}
                  >
                    <option value="division" selected>
                      Select Vehicle Division/Client
                    </option>
                    {vehicleclient &&
                      vehicleclient.length &&
                      vehicleclient.map(({ client_name, id }) => (
                        <option value={id}>{client_name}</option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Conversion Type</label>
                <div>
                  <select
                    className="browser-default custom-select"
                    name="conversion"
                    value={conversion}
                    onChange={handleInputChange}
                  >
                    <option value="conversion" selected>
                      Select Vehicle Conversion Type
                    </option>
                    {vehicleconventiontype &&
                      vehicleconventiontype.length &&
                      vehicleconventiontype.map(
                        ({ convention_type_name, id }) => (
                          <option value={id}>{convention_type_name}</option>
                        )
                      )}
                  </select>
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Location Code</label>
                <select
                  className="browser-default custom-select"
                  name="locationCode"
                  value={locationCode}
                  onChange={handleInputChange}
                >
                  <option value="location" selected>
                    Select Vehicle Location Code
                  </option>
                  {vehiclelocationcode &&
                    vehiclelocationcode.length &&
                    vehiclelocationcode.map(({ location_code_name, id }) => (
                      <option value={id}>{location_code_name}</option>
                    ))}
                </select>
              </div>

              <div className="form-group col-md-4 mb-0">
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary waves-effect waves-light mr-1"
                    onClick={handleAddVehicle}
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
export default CreateVehicle;
