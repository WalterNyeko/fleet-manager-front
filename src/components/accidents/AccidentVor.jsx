import React from "react";

export default function AccidentVor() {
  return (
    <div className="row">
      <form className="row" action="#">
        <div className="card col-md-12 my-card ml-1">
          <div className="card-body custom-card">
            <div className="card-title">Total Loss</div>
            <hr />
            <div className="row">
              <div className="form-group col-md-12">
                <label>Write Off</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="loss">Yes</option>
                  <option value="loss">No</option>
                </select>
              </div>
              <div className="form-group col-md-12 mb-0">
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
