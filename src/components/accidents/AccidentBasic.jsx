import React from "react";

export default function AccidentBasic() {
  return (
    <div className="row">
      <form className="row" action="#">
        <div className="card col-md-4 my-card ml-4">
          <div className="card-body custom-card">
            <div className="card-title">Driver</div>
            <hr />
            <div className="row">
              <div className="form-group col-md-12">
                <label>Driver</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="driver">Yes</option>
                  <option value="driver">No</option>
                </select>
              </div>
              <div className="form-group col-md-12">
                <label>Driver Name</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Date of Birth</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Relationship</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="relationship">Authorized Police Driver</option>
                  <option value="relationship">Unauthorized Driver</option>
                  <option value="relationship">Motor Trade Driver</option>
                </select>
              </div>
              <div className="form-group col-md-12">
                <label>Force Number</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Phone Number</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="card col-md-7 my-card ml-4">
          <div className="card-body custom-card">
            <div className="card-title">Vehicle</div>
            <hr />
            <div className="row">
              <div className="form-group col-md-6">
                <label>Other Vehicle Involved</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="other">Yes</option>
                  <option value="other">No</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label>Cost Center</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="costcenter">FLEET MANAGEMENT SERVICES</option>
                  <option value="costcenter">NATIONAL ADMINISTRATION</option>
                  <option value="costcenter">RELIEF CAR</option>
                  <option value="costcenter">SERVICE PLAN</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label>Registration No.</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-6">
                <label>Extra Registration No.</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-6">
                <label>Make Code</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-6">
                <label>Model Code</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-6">
                <label>Division/Cleint</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-6">
                <label>Engine Cc</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-6">
                <label>Fuel Type</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-6">
                <label>Insurance Company</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-6">
                <label>Owner</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-6">
                <label>Pending Convictions</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="card col-md-4 my-card ml-4">
          <div className="card-body custom-card">
            <div className="card-title">Hire Vehicle</div>
            <hr />
            <div className="row">
              <div className="form-group col-md-12">
                <label>Towing Company</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Towing From</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Towing To</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Contact Person</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Phone Number</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Towing Date</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="card col-md-7 my-card ml-4">
          <div className="card-body custom-card">
            <div className="card-title">Incident</div>
            <hr />
            <div className="row">
              <div className="form-group col-md-6">
                <label>Accident Date</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-6">
                <label>Exact time of incident</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-6">
                <label>Comment</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-6">
                <label>Exact time of accident</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-6">
                <label>Incident Time Range</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-6">
                <label>Weather</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="weather">CLEAR</option>
                  <option value="weather">CLOUDY AND DULL</option>
                  <option value="weather">DUST BALL</option>
                  <option value="weather">FOGGY OUT THERE</option>
                  <option value="weather">RAINING</option>
                  <option value="weather">SUNNY AND BRIGHT</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label>Road Type</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="road">Arid Area with no Road</option>
                  <option value="road">Bush with no Road</option>
                  <option value="road">Concrete Road</option>
                  <option value="road">Concrete Road under Construction</option>
                  <option value="road">Dry Rugged Earth Road</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label>Road Conditions</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="road">DRY ROAD SURFACE</option>
                  <option value="road">WET ROAD SURFACE</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label>Use of Vehicle at the time of incident</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-6">
                <label>Current location of Vehicle</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-6">
                <label>Damage to our Vehicle</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="damage">YES</option>
                  <option value="damage">NO</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label>Vehicle Defect/Damage</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="card col-md-2 my-card ml-4">
          <div className="card-body custom-card">
            <div className="card-title">Your Vehicle</div>
            <hr />
            <div className="row">
              <div className="form-group col-md-12">
                <label>Lights</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Signaling</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="card col-md-2 my-card ml-2">
          <div className="card-body custom-card">
            <div className="card-title">Other Vehicle</div>
            <hr />
            <div className="row">
              <div className="form-group col-md-12">
                <label>Lights</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Signaling</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="card col-md-7 my-card ml-3">
          <div className="card-body custom-card">
            <div className="card-title">Theft</div>
            <hr />
            <div className="row">
              <div className="form-group col-md-6">
                <label>Vehicle broken into</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="damage">YES</option>
                  <option value="damage">NO</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label>Where all doors locked?</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="damage">YES</option>
                  <option value="damage">NO</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label>How was entry gained?</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="broken">Boot</option>
                  <option value="broken">Open door</option>
                  <option value="broken">Broken Window</option>
                  <option value="broken">Open Sun Roof</option>
                  <option value="broken">Unlocked door</option>
                  <option value="broken">Broken door lock</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label>Has the Vehicle been recovered?</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="damage">YES</option>
                  <option value="damage">NO</option>
                </select>
              </div>
              <div className="form-group col-md-6 mb-0">
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
}
