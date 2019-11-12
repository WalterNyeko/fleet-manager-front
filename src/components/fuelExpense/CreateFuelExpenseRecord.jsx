import React from "react";

export default function AddFuelExpense() {
  return (
    <div className="row add-vehicle">
      <div className="col-md-2"></div>
      <div className="col-md-10">
        <div className="content">
          <div className="container-fluid">
            <div className="page-title-box">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <h4 className="page-title">Add Fuel Expense</h4>
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
                        <label>Registration No.</label>{" "}
                        <input
                          type="text"
                          className="form-control"
                          required
                          placeholder="Registration No."
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Import Issue</label>
                        <div>
                          <input
                            type="password"
                            id="pass2"
                            className="form-control"
                            required
                            placeholder="Import Issue"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Date</label>
                        <div>
                          <input
                            type="password"
                            className="form-control"
                            required
                            data-parsley-equalto="#pass2"
                            placeholder="Date"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Amount</label>
                        <div>
                          <input
                            type="email"
                            className="form-control"
                            required
                            parsley-type="email"
                            placeholder="Amount"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Cost</label>
                        <div>
                          <input
                            parsley-type="url"
                            type="url"
                            className="form-control"
                            required
                            placeholder="Cost"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Price Per Unit</label>
                        <div>
                          <input
                            data-parsley-type="digits"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Price Per Unit"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Fuel Type</label>
                        <div>
                          <input
                            data-parsley-type="number"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Fuel Type"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Odometer</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Odometer"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Location Code</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Location Code"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Litres per 100K</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Litres per 100K"
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
