import React from "react";

export default function AddMaintenance() {
  return (
    <div className="row add-vehicle">
      <div className="col-md-2"></div>
      <div className="col-md-10">
        <div className="content">
          <div className="container-fluid">
            <div className="page-title-box">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <h4 className="page-title">Add Maintenance</h4>
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
                        <label>Required</label>{" "}
                        <input
                          type="text"
                          className="form-control"
                          required
                          placeholder="Type something"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Equal To</label>
                        <div>
                          <input
                            type="password"
                            id="pass2"
                            className="form-control"
                            required
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Re-Type Password</label>
                        <div>
                          <input
                            type="password"
                            className="form-control"
                            required
                            data-parsley-equalto="#pass2"
                            placeholder="Re-Type Password"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>E-Mail</label>
                        <div>
                          <input
                            type="email"
                            className="form-control"
                            required
                            parsley-type="email"
                            placeholder="Enter a valid e-mail"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>URL</label>
                        <div>
                          <input
                            parsley-type="url"
                            type="url"
                            className="form-control"
                            required
                            placeholder="URL"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Digits</label>
                        <div>
                          <input
                            data-parsley-type="digits"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Enter only digits"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Number</label>
                        <div>
                          <input
                            data-parsley-type="number"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Enter only numbers"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Alphanumeric</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Enter alphanumeric value"
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
