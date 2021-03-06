import React from "react";

export default function OffRoadJobApproval() {
  return (
    <div className="row">
      <form className="row" action="#">
        <div className="card col-md-12 my-card ml-4">
          <div className="card-body custom-card">
            <div className="card-title">Suplimentary Job</div>
            <hr />
            <div className="row">
              <div className="form-group col-md-4">
                <label>Quotation Amount</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Suplimentary Job Approval Date</label>{" "}
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
  );
}
