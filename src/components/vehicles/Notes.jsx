import React from "react";

export default function Notes() {
  return (
    <div className="row">
      <form className="row" action="#">
      <div className="form-group col-md-4">
          <label>Date</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Contract Baloon Payment</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Notes</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4 mb-0">
          <div>
            <button
              type="submit"
              className="btn btn-primary waves-effect waves-light mr-1"
            >
              Submit
            </button>{" "}
            <button type="reset" className="btn btn-secondary waves-effect">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
