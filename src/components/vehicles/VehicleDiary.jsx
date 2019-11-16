import React from "react";

export default function VehicleDiary() {
  return (
    <div className="row">
      <form className="row" action="#">
        <div className="card col-md-3 my-card ml-4">
          <div className="card-body custom-card">
            <div className="card-title">Waranty Data</div>
            <hr />
            <div className="row">
              <div className="form-group col-md-12">
                <label>Warranty</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Warranty Distance</label>{" "}
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

        <div className="card col-md-8 my-card ml-4">
          <div className="card-body custom-card">
            <div className="card-title">Insurance Data</div>
            <hr />
            <div className="row">
              <div className="form-group col-md-4">
                <label>Insurance Company</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="insurance">Insurance Company 1</option>
                  <option value="insurance">Insurance Company 2</option>
                  <option value="insurance">Insurance Company 3</option>
                  <option value="insurance">Insurance Company 4</option>
                  <option value="insurance">Insurance Company 5</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label>Insurance Expiry</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Insurance Commencement</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Insurance Certificate</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Motor Insurance Policy No.</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>MID On</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>MID Off</label>{" "}
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

        <div className="card col-md-3 my-card ml-4">
          <div className="card-body custom-card">
            <div className="card-title">Service Data</div>
            <hr />
            <div className="row">
              <div className="form-group col-md-12">
                <label>Service Date</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Last Service Type</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Service Schedule</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Service Interval (Weeks)</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Service Interval (KMS)</label>{" "}
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
            <div className="card-title">Inspection Data</div>
            <hr />
            <div className="row">
              <div className="form-group col-md-12">
                <label>Inspection Date</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Inspection Type</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Inspection Interval (Weeks)</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Inspection Interval Distance</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Inspection Certificate No.</label>{" "}
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

        <div className="card col-md-4 my-card ml-2">
          <div className="card-body custom-card">
            <div className="card-title">Vehicle Age/Distance Statistics</div>
            <hr />
            <div className="row">
              <div className="form-group col-md-12">
                <label>Distance per year</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Distance per day</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Age (Years)</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Age (Days)</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Deviation</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-12">
                <label>Deviation Perc</label>{" "}
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

        <div className="card col-md-11 my-card ml-5">
          <div className="card-body custom-card">
            <div className="card-title">Current Odometer</div>
            <hr />
            <div className="row">
            <div className="form-group col-md-4">
              <label>Odometer</label>{" "}
              <input
                type="text"
                className="form-control"
                required
                placeholder=""
              />
            </div>
            <div className="form-group col-md-4">
              <label>Current Odo Date</label>{" "}
              <input
                type="text"
                className="form-control"
                required
                placeholder=""
              />
            </div>

            <div className="form-group col-md-4 mb-0">
              <div>
                <button
                  type="submit"
                  className="btn btn-primary waves-effect waves-light mr-1"
                >
                  Submit
                </button>{" "}
                <button type="reset" className="btn btn-secondary waves-effect">
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
