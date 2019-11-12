import React from "react";

export default function CreateInsuaranceCertificate() {
  return (
    <div className="row add-vehicle">
      <div className="col-md-2"></div>
      <div className="col-md-10">
        <div className="content">
          <div className="container-fluid">
            <div className="page-title-box">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <h4 className="page-title">Add Insurance Certificate</h4>
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
                        <label>Code</label>{" "}
                        <input
                          type="text"
                          className="form-control"
                          required
                          placeholder="Code"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Vehicle Reg 2</label>
                        <div>
                          <input
                            type="password"
                            id="pass2"
                            className="form-control"
                            required
                            placeholder="Vehicle Reg 2"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Vehicle Registration No.</label>
                        <div>
                          <input
                            type="password"
                            className="form-control"
                            required
                            data-parsley-equalto="#pass2"
                            placeholder="Vehicle Registration No."
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Acknowledgment Recieved</label>
                        <div>
                          <input
                            type="email"
                            className="form-control"
                            required
                            parsley-type="email"
                            placeholder="Acknowledgement Recieved"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Collected By</label>
                        <div>
                          <input
                            parsley-type="url"
                            type="url"
                            className="form-control"
                            required
                            placeholder="Collected By"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Phone No.</label>
                        <div>
                          <input
                            data-parsley-type="digits"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Phone No."
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Data Collected</label>
                        <div>
                          <input
                            data-parsley-type="digits"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Data Collected"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Workshop</label>
                        <div>
                          <input
                            data-parsley-type="digits"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Workshop"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Created By</label>
                        <div>
                          <input
                            data-parsley-type="digits"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Created By"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Date</label>
                        <div>
                          <input
                            data-parsley-type="digits"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Date"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Changed By</label>
                        <div>
                          <input
                            data-parsley-type="digits"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Changed By"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Date</label>
                        <div>
                          <input
                            data-parsley-type="digits"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Date"
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
