import React from "react";

export default function AddAccident() {
  return (
    <div className="row add-vehicle">
      <div className="col-md-2"></div>
      <div className="col-md-10">
        <div className="content">
          <div className="container-fluid">
            <div className="page-title-box">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <h4 className="page-title">Add Accident</h4>
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
                        <label>Accident Ref.</label>{" "}
                        <input
                          type="text"
                          className="form-control"
                          required
                          placeholder="Accident Ref."
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Registration No.</label>
                        <div>
                          <input
                            type="password"
                            id="pass2"
                            className="form-control"
                            required
                            placeholder="Registration No."
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Accident Status</label>
                        <div>
                          <input
                            type="password"
                            className="form-control"
                            required
                            data-parsley-equalto="#pass2"
                            placeholder="Accident Status"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Extra Registration No.</label>
                        <div>
                          <input
                            type="email"
                            className="form-control"
                            required
                            parsley-type="email"
                            placeholder="Extra Registration No."
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Third Party Involved</label>
                        <div>
                          <input
                            parsley-type="url"
                            type="url"
                            className="form-control"
                            required
                            placeholder="Third Party Involved"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Total Cost (Net)</label>
                        <div>
                          <input
                            data-parsley-type="digits"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Total Cost (Net)"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Accident Date</label>
                        <div>
                          <input
                            data-parsley-type="number"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Accident Date"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Driver Name</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Driver Name"
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
                      <div className="form-group col-md-6">
                        <label>Model Code</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
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
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Division/Client"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Comment</label>
                        <div>
                          <input
                            data-parsley-type="alphanum"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Comment"
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
