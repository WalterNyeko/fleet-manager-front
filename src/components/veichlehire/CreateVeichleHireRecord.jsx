import React from "react";

export default function AddVeichleHire() {
  return (
    <div className="row add-vehicle">
      <div className="col-md-2"></div>
      <div className="col-md-10">
        <div className="content">
          <div className="container-fluid">
            <div className="page-title-box">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <h4 className="page-title">Add Veichle Hire</h4>
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
                        <label>Rental Code</label>{" "}
                        <input
                          type="text"
                          className="form-control"
                          required
                          placeholder="Rental Code"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Relief Registration No.</label>
                        <div>
                          <input
                            type="password"
                            id="pass2"
                            className="form-control"
                            required
                            placeholder="Relief Registration No."
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Extra Registration No.</label>
                        <div>
                          <input
                            type="password"
                            className="form-control"
                            required
                            data-parsley-equalto="#pass2"
                            placeholder="Extra Registration No."
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Rental Cost Center</label>
                        <div>
                          <input
                            type="email"
                            className="form-control"
                            required
                            parsley-type="email"
                            placeholder="Rental Cost Center"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Model Code</label>
                        <div>
                          <input
                            parsley-type="url"
                            type="url"
                            className="form-control"
                            required
                            placeholder="Model Code"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Rental Status</label>
                        <div>
                          <input
                            data-parsley-type="digits"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Rental Status"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Vehicle Status</label>
                        <div>
                          <input
                            data-parsley-type="number"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Vehicle Status"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>From Date</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="From Date"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>To Date</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="To Date"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Reason</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Reason"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Replaced Plate</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Replaced Plate"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Replaced Plate Cost Center</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Replaced Plate Cost Center"
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
