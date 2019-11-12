import React from "react";

export default function VehicleTyres() {
  return (
    <div className="row add-vehicle">
      <div className="col-md-2"></div>
      <div className="col-md-10">
        <div className="content">
          <div className="container-fluid">
            <div className="page-title-box">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <h4 className="page-title">Add Tyre</h4>
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
                        <label>Tyre ID</label>{" "}
                        <input
                          type="text"
                          className="form-control"
                          required
                          placeholder="Tyre ID"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Tyre Label Wetgrip</label>
                        <div>
                          <input
                            type="password"
                            id="pass2"
                            className="form-control"
                            required
                            placeholder="Tyre Label Wetgrip"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Tyre Label Rolling Resistance</label>
                        <div>
                          <input
                            type="password"
                            className="form-control"
                            required
                            data-parsley-equalto="#pass2"
                            placeholder="Tyre Label Rolling Resistance"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Tyre Rolling Noise in dB</label>
                        <div>
                          <input
                            type="email"
                            className="form-control"
                            required
                            parsley-type="email"
                            placeholder="Tyre Rolling Noise in DB"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Tyre Status</label>
                        <div>
                          <input
                            parsley-type="url"
                            type="url"
                            className="form-control"
                            required
                            placeholder="Tyre Status"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Company Code</label>
                        <div>
                          <input
                            data-parsley-type="digits"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Company Code"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Stock Manufacturer</label>
                        <div>
                          <input
                            data-parsley-type="number"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Stock Manufacturer"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Tyre Model</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Tyre Model"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Tyre Size</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Tyre Size"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Registration No.</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Registration No."
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Tyre Position Code</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Tyre Position Code"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Tread Current</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Tread Current"
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
