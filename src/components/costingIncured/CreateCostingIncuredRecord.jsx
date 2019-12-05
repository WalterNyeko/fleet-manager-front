import React from "react";

export default function AddCostingIncured() {
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
                      <h4 className="page-title">Add Costing Incured</h4>
                    </div>
                    <div className="col-sm-6"></div>
                  </div>
                </div>
                <form className="row" action="#">
                  <div className="card col-md-12 my-card mr-1">
                    <div className="card-body custom-card">
                      <div className="row">
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
                          <label>Date</label>{" "}
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder=""
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Actual Value</label>{" "}
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder=""
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Cost Center</label>
                          <select className="browser-default custom-select">
                            <option selected></option>
                            <option value="costcenter">
                              FLEET MANAGEMENT SERVICES
                            </option>
                            <option value="costcenter">
                              NATIONAL ADMINISTRATION
                            </option>
                            <option value="costcenter">RELIEF CAR</option>
                            <option value="costcenter">SERVICE PLAN</option>
                            <option value="costcenter">
                              NATIONAL POLICE FORCE
                            </option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Costing Code</label>
                          <select className="browser-default custom-select">
                            <option selected></option>
                            <option value="code">Fuel</option>
                            <option value="code">Insurance</option>
                            <option value="code">Leasing Installments</option>
                            <option value="code">Repair</option>
                            <option value="code">Service</option>
                            <option value="code">Tyre Cost</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Reference</label>{" "}
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder=""
                          />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
