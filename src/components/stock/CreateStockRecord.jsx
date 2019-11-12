import React from "react";

export default function CreateStockRecord() {
  return (
    <div className="row add-vehicle">
      <div className="col-md-2"></div>
      <div className="col-md-10">
        <div className="content">
          <div className="container-fluid">
            <div className="page-title-box">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <h4 className="page-title">Add Stock Record</h4>
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
                        <label>Part No.</label>{" "}
                        <input
                          type="text"
                          className="form-control"
                          required
                          placeholder="Part No."
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
                        <label>Description</label>
                        <div>
                          <input
                            type="password"
                            className="form-control"
                            required
                            data-parsley-equalto="#pass2"
                            placeholder="Description"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Quantity</label>
                        <div>
                          <input
                            type="email"
                            className="form-control"
                            required
                            parsley-type="email"
                            placeholder="Quantity"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Units</label>
                        <div>
                          <input
                            parsley-type="url"
                            type="url"
                            className="form-control"
                            required
                            placeholder="Units"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Last Price</label>
                        <div>
                          <input
                            data-parsley-type="digits"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Last Price"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Re-Order</label>
                        <div>
                          <input
                            data-parsley-type="number"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Re-Order"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Maximum Stock</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Maximum Stock"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Last Issued</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Last Issued"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Supplier 1</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Supplier 1"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Supplier 2</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Supplier 2"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Supplier 3</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Supplier 3"
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
