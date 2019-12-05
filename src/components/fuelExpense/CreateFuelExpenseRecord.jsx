import React from "react";

export default function AddFuelExpense() {
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
                      <h4 className="page-title">Add Fuel Expense</h4>
                    </div>
                    <div className="col-sm-6"></div>
                  </div>
                </div>
                <form className="row" action="#">
                  <div className="card col-md-12 my-card mr-1">
                    <div className="card-body custom-card">
                      <div className="row">
                        <div className="form-group col-md-4">
                          <label>Registration No.</label>{" "}
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
                          <label>Pump</label>
                          <select className="browser-default custom-select">
                            <option selected></option>
                            <option value="pump">ESSO EXPRESS</option>
                            <option value="pump">SHELL</option>
                            <option value="pump">Q8 EXPRESS</option>
                            <option value="pump">BP</option>
                            <option value="pump">ARAL</option>
                          </select>
                        </div>
                        <div className="form-group col-md-4">
                          <label>Location Code</label>
                          <select className="browser-default custom-select">
                            <option selected></option>
                            <option value="code">Location 1</option>
                            <option value="code">Location 2</option>
                            <option value="code">Location 3</option>
                            <option value="code">Location 4</option>
                            <option value="code">Location 5</option>
                          </select>
                        </div>
                        <div className="form-group col-md-4">
                          <label>Fuel Type</label>
                          <div>
                            <select className="browser-default custom-select">
                              <option selected></option>
                              <option value="fueltype">
                                Compressed Natural Gass @ 2400PSI
                              </option>
                              <option value="fueltype">Disel</option>
                              <option value="fueltype">Electric</option>
                              <option value="fueltype">Gasoline</option>
                              <option value="fueltype">Hybrid</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group col-md-4">
                          <label>Unit of measure</label>
                          <div>
                            <select className="browser-default custom-select">
                              <option selected></option>
                              <option value="unit">Litres</option>
                              <option value="unit">Gallons</option>
                              <option value="unit">US Gallons</option>
                              <option value="unit">Quarts</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group col-md-4">
                          <label>Record status</label>
                          <div>
                            <select className="browser-default custom-select">
                              <option selected></option>
                              <option value="status">Normal</option>
                              <option value="status">No Fuel Card</option>
                              <option value="status">Invalid Date</option>
                              <option value="status">Invalid Invoice</option>
                              <option value="status">Unknown Vehicle</option>
                              <option value="status">Bad Cost Center</option>
                              <option value="status">Other Exception</option>
                              <option value="status">Invalid Odometer</option>
                              <option value="status">No Key Field</option>
                              <option value="status">Quantity Exception</option>
                              <option value="status">
                                Transaction before allocation
                              </option>
                              <option value="status">GROSS NET + TAX </option>
                              <option value="status">
                                File Type not recognised
                              </option>
                              <option value="status">
                                Fuel tranaction and card vehicle - No Match
                              </option>
                              <option value="status">
                                Driver has multiple allocation at the time of
                                transaction
                              </option>
                              <option value="status">Fuel Type mismatch</option>
                              <option value="status">Other Exception</option>
                              <option value="status">MSGRECSTATE_1</option>
                              <option value="status">
                                Invalid import option on (Property) vehicle
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group col-md-4">
                          <label>Tank Size</label>{" "}
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder=""
                          />
                        </div>
                        <div className="form-group col-md-4">
                          <label>Driver Name</label>{" "}
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder=""
                          />
                        </div>
                        <div className="form-group col-md-4">
                          <label>Amount</label>{" "}
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder=""
                          />
                        </div>
                        <div className="form-group col-md-4">
                          <label>Price per unit</label>
                          <div>
                            <input
                              type="type"
                              className="form-control"
                              required
                              parsley-type="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="form-group col-md-4">
                          <label>Cost</label>
                          <div>
                            <input
                              type="type"
                              className="form-control"
                              required
                              parsley-type="email"
                              placeholder=""
                            />
                          </div>
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
