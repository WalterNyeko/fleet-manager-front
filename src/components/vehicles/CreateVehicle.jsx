import React from "react";

export default function CreateVehicle() {
  return (
    <div className="row">
      <form className="row" action="#">
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
          <label>Fleet Number</label>
          <div>
            <input
              type="password"
              id="pass2"
              className="form-control"
              required
              placeholder=""
            />
          </div>
        </div>
        <div className="form-group col-md-4">
          <label>Vehicle Tyre</label>
          <div>
            <select className="browser-default custom-select">
              <option selected></option>
              <option selected>Car</option>
              <option value="type">Chassis Cabine</option>
              <option value="type">Forklift</option>
              <option value="type">Locomotive</option>
              <option value="type">Pallettrucks</option>
              <option value="type">Pick up</option>
              <option value="type">Quad</option>
              <option value="type">SUV</option>
              <option value="type">Tractor</option>
              <option value="type">Trailor</option>
              <option value="type">Van</option>
            </select>
          </div>
        </div>
        <div className="form-group col-md-4">
          <label>Extra Registration No.</label>
          <div>
            <input
              type="email"
              className="form-control"
              required
              parsley-type="email"
              placeholder=""
            />
          </div>
        </div>
        <div className="form-group col-md-4">
          <label>Vehicle Status</label>
          <div>
            <select className="browser-default custom-select">
              <option value="status"></option>
              <option value="status">Live</option>
              <option value="status">Insure/Write Off</option>
              <option value="status">Lease Expired & Returned</option>
              <option value="status">Out of Service</option>
              <option value="status">Return to Lease</option>
              <option value="status">Returned Pending Lease Extension</option>
              <option value="status">Stolen</option>
            </select>
          </div>
        </div>
        <div className="form-group col-md-4">
          <label>Body Type</label>
          <div>
            <select className="browser-default custom-select">
              <option value="body"></option>
              <option value="body">Station Wagon 5dr</option>
              <option value="body">SUV</option>
              <option value="body">Targa 2dr</option>
              <option value="body">Tractor</option>
              <option value="body">Trailor Unit</option>
              <option value="body">Truck 2x4</option>
              <option value="body">Truck 4x4</option>
            </select>
          </div>
        </div>
        <div className="form-group col-md-4">
          <label>Returned to Workshop</label>
          <div>
            <select className="browser-default custom-select">
              <option value="returned"></option>
              <option value="returned">Workshop 1</option>
              <option value="returned">Workshop 2</option>
              <option value="returned">Workshop 3</option>
              <option value="returned">Workshop 4</option>
              <option value="returned">Workshop 5</option>
            </select>
          </div>
        </div>
        <div className="form-group col-md-4">
          <label>Date Returned to Workshop</label>
          <div>
            <input
              data-parsley-type="alphanum"
              type="text"
              className="form-control"
              required
              placeholder=""
            />
          </div>
        </div>
        <div className="form-group col-md-4">
          <label>Make Code</label>
          <div>
            <select className="browser-default custom-select">
              <option value="make"></option>
              <option value="make">Make 1</option>
              <option value="make">Make 2</option>
              <option value="make">Make 3</option>
              <option value="make">Make 4</option>
              <option value="make">Make 5</option>
            </select>
          </div>
        </div>
        <div className="form-group col-md-4">
          <label>Model Code</label>
          <div>
            <select className="browser-default custom-select">
              <option value="model"></option>
              <option value="model">Model 1</option>
              <option value="model">Model 2</option>
              <option value="model">Model 3</option>
              <option value="model">Model 4</option>
              <option value="model">Model 5</option>
            </select>
          </div>
        </div>
        <div className="form-group col-md-4">
          <label>Company Code</label>
          <div>
            <select className="browser-default custom-select">
              <option value="company"></option>
              <option value="company">Company 1</option>
              <option value="company">Company 2</option>
              <option value="company">Company 3</option>
              <option value="company">Company 4</option>
              <option value="company">Company 5</option>
            </select>
          </div>
        </div>
        <div className="form-group col-md-4">
          <label>Fuel Type</label>
          <div>
            <select className="browser-default custom-select">
              <option value="fuel">Petrol</option>
              <option value="fuel">Compressed Natural Gas @ 2400PSI</option>
              <option value="fuel">Diesel</option>
              <option value="fuel">Electric</option>
              <option value="fuel">Gasoline</option>
              <option value="fuel">Hybrid</option>
              <option value="fuel">LPG</option>
            </select>
          </div>
        </div>
        <div className="form-group col-md-4">
          <label>County</label>
          <div>
            <select className="browser-default custom-select">
              <option value="county"></option>
              <option value="county">County 1</option>
              <option value="county">County 2</option>
              <option value="county">County 3</option>
              <option value="county">County 4</option>
              <option value="county">County 5</option>
            </select>
          </div>
        </div>
        <div className="form-group col-md-4">
          <label>Date Registered</label>
          <div>
            <input
              data-parsley-type="alphanum"
              type="text"
              className="form-control"
              required
              placeholder=""
            />
          </div>
        </div>
        <div className="form-group col-md-4">
          <label>Cost Center</label>
          <div>
            <select className="browser-default custom-select">
              <option value="costcenter"></option>
              <option value="costcenter">Cost Center 1</option>
              <option value="costcenter">Cost Center 2</option>
              <option value="costcenter">Cost Center 3</option>
              <option value="costcenter">Cost Center 4</option>
              <option value="costcenter">Cost Center 5</option>
            </select>
          </div>
        </div>
        <div className="form-group col-md-4">
          <label>Year</label>
          <div>
            <input
              data-parsley-type="alphanum"
              type="text"
              className="form-control"
              required
              placeholder=""
            />
          </div>
        </div>
        <div className="form-group col-md-4">
          <label>Division/Client</label>
          <div>
            <select className="browser-default custom-select">
              <option value="division"></option>
              <option value="division">Division 1</option>
              <option value="division">Division 2</option>
              <option value="division">Division 3</option>
              <option value="division">Division 4</option>
              <option value="division">Division 5</option>
            </select>
          </div>
        </div>
        <div className="form-group col-md-4">
          <label>Conversion Type</label>
          <div>
            <select className="browser-default custom-select">
              <option value="conversion"></option>
              <option value="conversion">Fibre Body & rollcage with canvas</option>
              <option value="conversion">Superstructure with canvas</option>
              <option value="conversion">High sided boy SS & canvas</option>
              <option value="conversion">Low sided body SS W/bench seat & canvas</option>
              <option value="conversion">Rear Metallic Body</option>
              <option value="conversion">Simple structure with Canvas</option>
              <option value="conversion">Caravan</option>
            </select>
          </div>
        </div>
        <div className="form-group col-md-4">
          <label>Deriviate</label>
          <div>
            <select className="browser-default custom-select">
              <option value="conversion"></option>
            </select>
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
            <button type="reset" className="btn btn-secondary waves-effect">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
