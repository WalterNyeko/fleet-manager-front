import React from "react";

export default function AccidentDescription() {
  return (
    <div className="row">
      <form className="row" action="#">
        <div className="card col-md-12 my-card ml-1">
          <div className="card-body custom-card">
            <div className="card-title">Claim Documentation Checklist</div>
            <hr />
            <div className="row">
              <div className="form-group col-md-4">
                <label>Claim Form Recieved</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="claim">Yes</option>
                  <option value="claim">No</option>
                  <option value="claim">N/A</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label>Claim Police Abstract Recieved?</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="claimpolice">Yes</option>
                  <option value="claimpolice">No</option>
                  <option value="claimpolice">N/A</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label>Driver License Recieved?</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="license">Yes</option>
                  <option value="license">No</option>
                  <option value="license">N/A</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label>Claim Repair Estimate Recieved?</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="estimate">Yes</option>
                  <option value="estimate">No</option>
                  <option value="estimate">N/A</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label>Claim Inspection Report Recieved?</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="inspection">Yes</option>
                  <option value="inspection">No</option>
                  <option value="inspection">N/A</option>
                </select>
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
