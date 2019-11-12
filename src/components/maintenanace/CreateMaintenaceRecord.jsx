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
                        <label>Job Authorization No.</label>{" "}
                        <input
                          type="text"
                          className="form-control"
                          required
                          placeholder="Job Authorization No."
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Workshop</label>
                        <div>
                          <input
                            type="password"
                            id="pass2"
                            className="form-control"
                            required
                            placeholder="Workshop"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Job Status</label>
                        <div>
                          <input
                            type="password"
                            className="form-control"
                            required
                            data-parsley-equalto="#pass2"
                            placeholder="Job Status"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Registration No.</label>
                        <div>
                          <input
                            type="email"
                            className="form-control"
                            required
                            parsley-type="email"
                            placeholder="Registration No."
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Extra Registration No.</label>
                        <div>
                          <input
                            parsley-type="url"
                            type="url"
                            className="form-control"
                            required
                            placeholder="Extra Registration No."
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Model Code</label>
                        <div>
                          <input
                            data-parsley-type="digits"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Model Code"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Division/Client</label>
                        <div>
                          <input
                            data-parsley-type="number"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Division/Client"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Cost Center</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Cost Center"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Odometer In</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Odometer In"
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
                        <label>Job Date</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Job Date"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Job End Date</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Job End Date"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Invoice</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Invoice"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Total Invoice</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Total Invoice"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Comments</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Comments"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Paperwork Status</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Paperwork Status"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Cost Labour</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Cost Labour"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Created By</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
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
                            data-parsley-type="alphanum"
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
                            data-parsley-type="alphanum"
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
                            data-parsley-type="alphanum"
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
