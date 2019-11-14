import React from "react";

export default function OffRoadTracking() {
  return (
    <div className="row">
      <form className="row" action="#">
        <div className="form-group col-md-4">
          <label>Workshop</label>
          <select className="browser-default custom-select">
            <option selected></option>
            <option value="workshop">Workshop 1</option>
            <option value="workshop">Workshop 2</option>
            <option value="workshop">Workshop 3</option>
            <option value="workshop">Workshop 4</option>
            <option value="workshop">Workshop 5</option>
          </select>
        </div>
        <div className="form-group col-md-4">
          <label>Date Vehicle Recieved at Workshop</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Vehicle Job completion date</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Awaiting Parts</label>
          <select className="browser-default custom-select">
            <option selected></option>
            <option value="parts">Yes</option>
            <option value="parts">No</option>
          </select>
        </div>
        <div className="form-group col-md-4">
          <label>Vehicle Job start date</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Vehicle collection date</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Remark/Comments/Status</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Status Owner</label>
          <select className="browser-default custom-select">
            <option selected></option>
            <option value="owner">Owner 1</option>
            <option value="owner">Owner 2</option>
            <option value="owner">Owner 3</option>
            <option value="owner">Owner 4</option>
            <option value="owner">Owner 5</option>
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
            <button type="reset" className="btn btn-secondary waves-effect">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
