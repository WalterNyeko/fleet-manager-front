import React from "react";

export default function VehicleTyres() {
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
                      <h4 className="page-title">Add Tyre</h4>
                    </div>
                    <div className="col-sm-6"></div>
                  </div>
                </div>
                <form className="row" action="#">
                  <div className="card col-md-12 my-card mr-1">
                    <div className="card-body custom-card">
                      <div className="row">
                        <div className="form-group col-md-4">
                          <label>Tyre ID</label>{" "}
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder=""
                          />
                        </div>
                        <div className="form-group col-md-4">
                          <label>Stock Manufacturer</label>{" "}
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder=""
                          />
                        </div>
                        <div className="form-group col-md-4">
                          <label>Tyre Model</label>{" "}
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder=""
                          />
                        </div>
                        <div className="form-group col-md-4">
                          <label>Part Number</label>{" "}
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder=""
                          />
                        </div>
                        <div className="form-group col-md-4">
                          <label>Job Authorization No.</label>{" "}
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder=""
                          />
                        </div>
                        <div className="form-group col-md-4">
                          <label>Tyre Label Roling Resistance</label>
                          <select className="browser-default custom-select">
                            <option selected></option>
                            <option value="rolling">A</option>
                            <option value="rolling">B</option>
                            <option value="rolling">C</option>
                            <option value="rolling">D</option>
                            <option value="rolling">E</option>
                            <option value="rolling">F</option>
                            <option value="rolling">G</option>
                          </select>
                        </div>
                        <div className="form-group col-md-4">
                          <label>Tyre Label Wetgrip</label>
                          <select className="browser-default custom-select">
                            <option selected></option>
                            <option value="wetgrip">A</option>
                            <option value="wetgrip">B</option>
                            <option value="wetgrip">C</option>
                            <option value="wetgrip">D</option>
                            <option value="wetgrip">E</option>
                            <option value="wetgrip">F</option>
                            <option value="wetgrip">G</option>
                          </select>
                        </div>
                        <div className="form-group col-md-4">
                          <label>Tyre Rolling Noise in dB</label>
                          <div>
                            <input
                              type="type"
                              className="form-control"
                              required
                              parsley-type="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="form-group col-md-4">
                          <label>Tyre Size</label>
                          <div>
                            <input
                              type="type"
                              className="form-control"
                              required
                              parsley-type="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="form-group col-md-4">
                          <label>Tyre Last Inspected</label>
                          <div>
                            <input
                              type="type"
                              className="form-control"
                              required
                              parsley-type="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="form-group col-md-4">
                          <label>Tyre Status</label>
                          <div>
                            <select className="browser-default custom-select">
                              <option selected></option>
                              <option value="tyrestatus">ON VEHICLE</option>
                              <option value="tyrestatus">SCRAP</option>
                              <option value="tyrestatus">STOCK</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group col-md-4">
                          <label>Tyre Scrap Code</label>
                          <div>
                            <input
                              type="type"
                              className="form-control"
                              required
                              parsley-type="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="form-group col-md-4">
                          <label>Registration No.</label>
                          <div>
                            <input
                              type="type"
                              className="form-control"
                              required
                              parsley-type="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="form-group col-md-4">
                          <label>Tyre Position Axle</label>
                          <div>
                            <input
                              type="type"
                              className="form-control"
                              required
                              parsley-type="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="form-group col-md-4">
                          <label>Tyre Position Code</label>
                          <div>
                            <input
                              type="type"
                              className="form-control"
                              required
                              parsley-type="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="form-group col-md-4">
                          <label>Tyre Repairs</label>
                          <div>
                            <input
                              type="type"
                              className="form-control"
                              required
                              parsley-type="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="form-group col-md-4">
                          <label>Tyre Recuts</label>
                          <div>
                            <input
                              type="type"
                              className="form-control"
                              required
                              parsley-type="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="form-group col-md-4">
                          <label>Tyre Remoulds</label>
                          <div>
                            <input
                              type="type"
                              className="form-control"
                              required
                              parsley-type="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="form-group col-md-4">
                          <label>Tyre Last Cap</label>
                          <div>
                            <input
                              type="type"
                              className="form-control"
                              required
                              parsley-type="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="form-group col-md-4">
                          <label>Tyre Distance</label>
                          <div>
                            <input
                              type="type"
                              className="form-control"
                              required
                              parsley-type="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="form-group col-md-4">
                          <label>Tyre Cost KM</label>
                          <div>
                            <input
                              type="type"
                              className="form-control"
                              required
                              parsley-type="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="form-group col-md-4">
                          <label>Tread start</label>
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              required
                              parsley-type="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="form-group col-md-4">
                          <label>Tread recut</label>
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
                          <label>Tread remould</label>
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
                          <label>Tyre total cost</label>
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
                          <label>Tread total</label>
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
                          <label>Tread current</label>
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
                          <label>Tyre cost MM</label>
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
