import React from "react";

export default function RepairInvoice() {
  return (
    <div className="row">
      <form className="row" action="#">
        <div className="card col-md-12 my-card ml-1">
          <div className="card-body custom-card">
            <div className="row">
              <div className="form-group col-md-4">
                <label>Invoice To</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="invoice">FLEET MANAGEMENT SERVICES</option>
                  <option value="invoice">NATIONAL ADMINISTRATION</option>
                  <option value="invoice">RELIEF CAR</option>
                  <option value="invoice">SERVICE PLAN</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label>Invoice Date</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Invoice No.</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Invoice Recieved By</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="recieved">OFFICER 1</option>
                  <option value="recieved">OFFICER 2</option>
                  <option value="recieved">OFFICER 3</option>
                  <option value="recieved">OFFICER 4</option>
                  <option value="recieved">OFFICER 5</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label>Invoice Recieved</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="recieved">YES</option>
                  <option value="recieved">NO</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label>Invoice Recieved Date</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Invoice Paid</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="recieved">YES</option>
                  <option value="recieved">NO</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label>Invoice Parts</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Invoice Labour</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Total Invoice</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Recharge</label>
                <select className="browser-default custom-select">
                  <option selected></option>
                  <option value="recieved">YES</option>
                  <option value="recieved">NO</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label>Invoice Comment</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Total Tax</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Total Gross</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-4">
                <label>Location Code</label>{" "}
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
