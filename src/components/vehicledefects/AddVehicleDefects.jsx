import React from "react";

export default function AddVehicleDefects() {
  return (
    <div className="row add-vehicle">
      <div className="col-md-2"></div>
      <div className="col-md-10">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="page-title-box">
                  <div className="row align-items-center">
                    <div className="col-sm-6">
                      <h4 className="page-title">Add Vehicle Defect</h4>
                    </div>
                    <div className="col-sm-6"></div>
                  </div>
                </div>
                <form className="row" action="#">
                  <div className="card col-md-12 my-card mr-1">
                    <div className="card-body custom-card">
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label>Defect</label>{" "}
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder=""
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Odometer</label>{" "}
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder=""
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Driver Name</label>{" "}
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder=""
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Notes</label>{" "}
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder=""
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Insurance Claim Status</label>{" "}
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder=""
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Job Authorization No.</label>
                          <div>
                            <input
                              type="type"
                              className="form-control"
                              required
                              parsley-type="text"
                              placeholder=""
                            />
                          </div>
                        </div>

                        <div className="form-group col-md-6">
                          <label>Defect Status</label>
                          <select className="browser-default custom-select">
                            <option selected></option>
                            <option value="defect">HOLD FOR SERVICE</option>
                            <option value="defect">REPORTED</option>
                            <option value="defect">JOB RAISED</option>
                            <option value="defect">COMPLETED</option>
                          </select>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
