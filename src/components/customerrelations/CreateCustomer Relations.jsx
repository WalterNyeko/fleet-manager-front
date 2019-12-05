import React from "react";

export default function CreateCustomerRelations() {
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
                      <h4 className="page-title">Add Customer Relations</h4>
                    </div>
                    <div className="col-sm-6"></div>
                  </div>
                </div>
                <form className="row" action="#">
                  <div className="card col-md-12 my-card mr-1">
                    <div className="card-body custom-card">
                      <div className="row">
                        <div className="form-group col-md-4">
                          <label>CR Code</label>{" "}
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder=""
                          />
                        </div>
                        <div className="form-group col-md-4">
                          <label>Job Status</label>{" "}
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder=""
                          />
                        </div>
                        <div className="form-group col-md-4">
                          <label>Date</label>{" "}
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder=""
                          />
                        </div>
                        <div className="form-group col-md-4">
                          <label>Phone Number</label>{" "}
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder=""
                          />
                        </div>
                        <div className="form-group col-md-4">
                          <label>Extra Registration No.</label>{" "}
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder=""
                          />
                        </div>
                        <div className="form-group col-md-4">
                          <label>Vehicle Registration No.</label>{" "}
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
                          <label>Workshop</label>{" "}
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder=""
                          />
                        </div>
                        <div className="form-group col-md-4">
                          <label>Job Approved Date</label>{" "}
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder=""
                          />
                        </div>
                        <div className="form-group col-md-4">
                          <label>Reason</label>{" "}
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder=""
                          />
                        </div>
                        <div className="form-group col-md-4">
                          <label>Comments</label>{" "}
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder=""
                          />
                        </div>
                        <div className="form-group col-md-4">
                          <label>Description</label>{" "}
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder=""
                          />
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
