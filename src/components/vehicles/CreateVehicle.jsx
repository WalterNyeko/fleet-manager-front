import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateVehicle = ({
  handleWorkshopReturnDateChange,
  handleRegistrationDateChange,
  workshopReturnDate,
  registrationDate,
  mySettings: {
    vehiclestatus,
    vehiclebodytypes,
    vehicletyres,
    vehiclereturnedworkshop,
    vehiclemakecode,
    vehiclemodelcode,
    vehiclecompanycode,
    vehiclefueltype
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
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Fleet Number</label>
                <div>
                  <input
                    type="password"
                    id="pass2"
                    className="form-control"
                    required
                    placeholder=""
                  />
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Vehicle Tyre</label>
                <div>
                  <select className="browser-default custom-select">
                    <option value="tyre" selected>
                      Select Vehicle Tyre
                    </option>
                    {vehicletyres &&
                      vehicletyres.length &&
                      vehicletyres.map(({ tyre_name }) => (
                        <option value="tyre">{tyre_name}</option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Extra Registration No.</label>
                <div>
                  <input
                    type="email"
                    className="form-control"
                    required
                    parsley-type="email"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Vehicle Status</label>
                <div>
                  <select className="browser-default custom-select">
                    <option value="body" selected>
                      Select Vehicle Status
                    </option>
                    {vehiclestatus &&
                      vehiclestatus.length &&
                      vehiclestatus.map(({ status_name }) => (
                        <option value="status">{status_name}</option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Body Type</label>
                <div>
                  <select className="browser-default custom-select">
                    <option value="body" selected>
                      Select Body Type
                    </option>
                    {vehiclebodytypes &&
                      vehiclebodytypes.length &&
                      vehiclebodytypes.map(({ body_type_name }) => (
                        <option value="body">{body_type_name}</option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Returned to Workshop</label>
                <div>
                  <select className="browser-default custom-select">
                    <option value="returned" selected>
                      Select Vehicle Workshop
                    </option>
                    {vehiclereturnedworkshop &&
                      vehiclereturnedworkshop.length &&
                      vehiclereturnedworkshop.map(
                        ({ returned_workshop_name }) => (
                          <option value="tyre">{returned_workshop_name}</option>
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
                  <select className="browser-default custom-select">
                    <option value="make" selected>
                      Select Vehicle Make Code
                    </option>
                    {vehiclemakecode &&
                      vehiclemakecode.length &&
                      vehiclemakecode.map(({ make_code_name }) => (
                        <option value="make">{make_code_name}</option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Model Code</label>
                <div>
                  <select className="browser-default custom-select">
                    <option value="model" selected>
                      Select Vehicle Model Code
                    </option>
                    {vehiclemodelcode &&
                      vehiclemodelcode.length &&
                      vehiclemodelcode.map(({ model_code_name }) => (
                        <option value="model">{model_code_name}</option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Company Code</label>
                <div>
                  <select className="browser-default custom-select">
                    <option value="model" selected>
                      Select Company Code
                    </option>
                    {vehiclecompanycode &&
                      vehiclecompanycode.length &&
                      vehiclecompanycode.map(({ company_code_name }) => (
                        <option value="model">{company_code_name}</option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Fuel Type</label>
                <div>
                  <select className="browser-default custom-select">
                    <option value="fuel" selected>
                      Select Fuel Type
                    </option>
                    {vehiclefueltype &&
                      vehiclefueltype.length &&
                      vehiclefueltype.map(({ fuel_type_name }) => (
                        <option value="fuel">{fuel_type_name}</option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>County</label>
                <div>
                  <select className="browser-default custom-select">
                    <option value="county"></option>
                    <option value="county">County 1</option>
                    <option value="county">County 2</option>
                    <option value="county">County 3</option>
                    <option value="county">County 4</option>
                    <option value="county">County 5</option>
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
                  <select className="browser-default custom-select">
                    <option value="costcenter"></option>
                    <option value="costcenter">Cost Center 1</option>
                    <option value="costcenter">Cost Center 2</option>
                    <option value="costcenter">Cost Center 3</option>
                    <option value="costcenter">Cost Center 4</option>
                    <option value="costcenter">Cost Center 5</option>
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
                    required
                    placeholder=""
                  />
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Division/Client</label>
                <div>
                  <select className="browser-default custom-select">
                    <option value="division"></option>
                    <option value="division">Division 1</option>
                    <option value="division">Division 2</option>
                    <option value="division">Division 3</option>
                    <option value="division">Division 4</option>
                    <option value="division">Division 5</option>
                  </select>
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Conversion Type</label>
                <div>
                  <select className="browser-default custom-select">
                    <option value="conversion"></option>
                    <option value="conversion">
                      Fibre Body & rollcage with canvas
                    </option>
                    <option value="conversion">
                      Superstructure with canvas
                    </option>
                    <option value="conversion">
                      High sided boy SS & canvas
                    </option>
                    <option value="conversion">
                      Low sided body SS W/bench seat & canvas
                    </option>
                    <option value="conversion">Rear Metallic Body</option>
                    <option value="conversion">
                      Simple structure with Canvas
                    </option>
                    <option value="conversion">Caravan</option>
                  </select>
                </div>
              </div>
              <div className="form-group col-md-4">
                <label>Deriviate</label>
                <div>
                  <select className="browser-default custom-select">
                    <option value="conversion"></option>
                  </select>
                </div>
              </div>
              <div className="form-group col-md-4 mb-0">
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary waves-effect waves-light mr-1"
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
