import React from "react";

export default function CreateVehicle() {
  return (
    <div className="row add-vehicle">
      <div className="col-md-2"></div>
      <div className="col-md-10">
        <div className="content">
          <div className="container-fluid">
            <div className="page-title-box">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <h4 className="page-title">Add Vehicle</h4>
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
                        <label>Registration Number</label>{" "}
                        <input
                          type="text"
                          className="form-control"
                          required
                          placeholder="Registration Number"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Finance Co./Owner</label>
                        <div>
                          <input
                            type="password"
                            id="pass2"
                            className="form-control"
                            required
                            placeholder="Finanace Co./Owner"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Lot Number</label>
                        <div>
                          <input
                            type="password"
                            className="form-control"
                            required
                            data-parsley-equalto="#pass2"
                            placeholder="Lot Number"
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
                            placeholder="Extra Registration No."
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Division/Client</label>
                        <div>
                          <input
                            parsley-type="url"
                            type="url"
                            className="form-control"
                            required
                            placeholder="Division / Client"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Location Code</label>
                        <div>
                          <input
                            data-parsley-type="digits"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Location Code"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>County</label>
                        <div>
                          <input
                            data-parsley-type="number"
                            type="text"
                            className="form-control"
                            required
                            placeholder="County"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Make Code</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Make Code"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Model Code</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Model Code"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Vehicle Status</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Vehicle Status"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Costs Centre</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Costs Centre"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Contract Duration</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Contract Duration"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Contract Start Date</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Contract Start Date"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Lease End Date</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Lease End Date"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Service Odometer</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Service Odometer"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Vehicle Release Date</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Vehicle Release Date"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Insurance Company</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Insurance Company"
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
