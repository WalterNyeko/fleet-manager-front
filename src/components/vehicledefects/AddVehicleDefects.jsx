import React from "react";

export default function AddVehicleDefects() {
  return (
    <div className="row add-vehicle">
      <div className="col-md-2"></div>
      <div className="col-md-10">
        <div className="content">
          <div className="container-fluid">
            <div className="page-title-box">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <h4 className="page-title">Add Vehicle Defects</h4>
                </div>
                <div className="col-sm-6"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <form className="row" action="#">
                      <div className="form-group col-md-6">
                        <label>Defect</label>{" "}
                        <input
                          type="text"
                          className="form-control"
                          required
                          placeholder="Defect"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Job Authorization No.</label>
                        <div>
                          <input
                            type="password"
                            id="pass2"
                            className="form-control"
                            required
                            placeholder="Job Authorization No."
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Registration No.</label>
                        <div>
                          <input
                            type="password"
                            className="form-control"
                            required
                            data-parsley-equalto="#pass2"
                            placeholder="Registration No."
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Extra Registration No.</label>
                        <div>
                          <input
                            type="email"
                            className="form-control"
                            required
                            parsley-type="email"
                            placeholder="Extra Registration Number"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Defect Date</label>
                        <div>
                          <input
                            parsley-type="url"
                            type="url"
                            className="form-control"
                            required
                            placeholder="Defect Date"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Notes</label>
                        <div>
                          <input
                            data-parsley-type="digits"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Notes"
                          />
                        </div>
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
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
