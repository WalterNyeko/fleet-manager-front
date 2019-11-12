import React from "react";

export default function AddInvoice() {
  return (
    <div className="row add-vehicle">
      <div className="col-md-2"></div>
      <div className="col-md-10">
        <div className="content">
          <div className="container-fluid">
            <div className="page-title-box">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <h4 className="page-title">Add Purchase Order</h4>
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
                        <label>Order No.</label>{" "}
                        <input
                          type="text"
                          className="form-control"
                          required
                          placeholder="Order No."
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Created By</label>
                        <div>
                          <input
                            type="password"
                            id="pass2"
                            className="form-control"
                            required
                            placeholder="Created By"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Reference No.</label>
                        <div>
                          <input
                            type="password"
                            className="form-control"
                            required
                            data-parsley-equalto="#pass2"
                            placeholder="Reference No."
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Supplier</label>
                        <div>
                          <input
                            type="email"
                            className="form-control"
                            required
                            parsley-type="email"
                            placeholder="Supplier"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Workshop</label>
                        <div>
                          <input
                            parsley-type="url"
                            type="url"
                            className="form-control"
                            required
                            placeholder="Workshop"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Order Date</label>
                        <div>
                          <input
                            data-parsley-type="digits"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Order Date"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Cost Center</label>
                        <div>
                          <input
                            data-parsley-type="number"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Cost Center"
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
                        <label>Total Net</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Total Net"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Invoice No.</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Invoice No."
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Order Status</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Order Status"
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
