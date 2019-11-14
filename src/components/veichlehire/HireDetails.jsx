import React from "react";

export default function HireDetails() {
  return (
    <div className="row">
      <form className="row" action="#">
        <div className="form-group col-md-4">
          <label>Name of Person Collecting</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Force Number</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Hiring Divison/Client</label>
          <select className="browser-default custom-select">
            <option selected></option>
            <option value="suplier">Client 1</option>
            <option value="suplier">Client 2</option>
            <option value="suplier">Client 3</option>
            <option value="suplier">Client 4</option>
            <option value="suplier">Client 5</option>
          </select>
        </div>
        <div className="form-group col-md-4">
          <label>Telephone</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Collection Address</label>{" "}
          <input type="text" className="form-control" required placeholder="" />
        </div>
        <div className="form-group col-md-4">
          <label>Collection Post Code</label>{" "}
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
