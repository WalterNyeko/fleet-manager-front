import React from "react";

const VehicleSummary = ({
  mySettings: {
    vehiclelocationcode,
    vehiclecountry,
    vehiclecurrencycodes,
    vehicleinpull
  },
  state: {
    estimatedOdometer,
    locationCode,
    vehicleCountry,
    nextService,
    nextInspection,
    currencyCodes,
    inPull,
    lperkm,
    costperkm,
    totalCost,
    numberOfTyres,
    cumilativeBalance
  },
  handleInputChange
}) => {
  return (
    <div className='row'>
      <form className='row' action='#'>
        <div className='card col-md-12 my-card mr-1'>
          <div className='card-body custom-card'>
            <div className='card-title'>Statistics of your Operation</div>
            <hr />
            <div className='row'>
              <div className='form-group col-md-4'>
                <label>Estimated Odometer</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='estimatedOdometer'
                  value={estimatedOdometer}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group col-md-4'>
                <label>Location Code</label>
                <select
                  className='browser-default custom-select'
                  name='locationCode'
                  value={locationCode}
                  onChange={handleInputChange}
                >
                  <option value='location' selected>
                    Select Vehicle Location Code
                  </option>
                  {vehiclelocationcode &&
                    vehiclelocationcode.length &&
                    vehiclelocationcode.map(({ location_code_name }) => (
                      <option>{location_code_name}</option>
                    ))}
                </select>
              </div>
              <div className='form-group col-md-4'>
                <label>Country</label>
                <div>
                  <select
                    className='browser-default custom-select'
                    name='vehicleCountry'
                    value={vehicleCountry}
                    onChange={handleInputChange}
                  >
                    <option selected>Select Vehicle Country</option>
                    {vehiclecountry &&
                      vehiclecountry.length &&
                      vehiclecountry.map(({ country_name }) => (
                        <option value='country'>{country_name}</option>
                      ))}
                  </select>
                </div>
              </div>
              <div className='form-group col-md-4'>
                <label>Next Service</label>
                <div>
                  <input
                    type='email'
                    className='form-control'
                    required
                    parsley-type='email'
                    placeholder=''
                    name='nextService'
                    value={nextService}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className='form-group col-md-4'>
                <label>Next Inspection</label>
                <div>
                  <input
                    type='email'
                    className='form-control'
                    required
                    parsley-type='email'
                    placeholder=''
                    name='nextInspection'
                    value={nextInspection}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className='form-group col-md-4'>
                <label>Currency Codes</label>
                <div>
                  <select
                    className='browser-default custom-select'
                    name='currencyCodes'
                    value={currencyCodes}
                    onChange={handleInputChange}
                  >
                    <option value='currency' selected>
                      Select Vehicle Currency Code
                    </option>
                    {vehiclecurrencycodes &&
                      vehiclecurrencycodes.length &&
                      vehiclecurrencycodes.map(({ currency_codes_name }) => (
                        <option value='currency'>{currency_codes_name}</option>
                      ))}
                  </select>
                </div>
              </div>
              <div className='form-group col-md-4'>
                <label>In Pull</label>
                <div>
                  <select
                    className='browser-default custom-select'
                    name='inPull'
                    value={inPull}
                    onChange={handleInputChange}
                  >
                    <option selected>Select Vehicle In Pull</option>
                    {vehicleinpull &&
                      vehicleinpull.length &&
                      vehicleinpull.map(({ in_pull_name }) => (
                        <option value='inpull'>{in_pull_name}</option>
                      ))}
                  </select>
                </div>
              </div>
              <div className='form-group col-md-4'>
                <label>L/100Km</label>
                <div>
                  <input
                    data-parsley-type='alphanum'
                    type='text'
                    className='form-control'
                    required
                    placeholder=''
                    name='lperkm'
                    value={lperkm}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className='form-group col-md-4'>
                <label>Cost per Km</label>
                <div>
                  <input
                    data-parsley-type='alphanum'
                    type='text'
                    className='form-control'
                    required
                    placeholder=''
                    name='costperkm'
                    value={costperkm}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className='form-group col-md-4'>
                <label>Total Cost</label>
                <div>
                  <input
                    data-parsley-type='alphanum'
                    type='text'
                    className='form-control'
                    required
                    placeholder=''
                    name='totalCost'
                    value={totalCost}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className='form-group col-md-4'>
                <label>Number of Remaining Tyres</label>
                <div>
                  <input
                    data-parsley-type='alphanum'
                    type='text'
                    className='form-control'
                    required
                    placeholder=''
                    name='numberOfTyres'
                    value={numberOfTyres}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className='form-group col-md-4'>
                <label>Cumilative Balance</label>
                <div>
                  <input
                    data-parsley-type='alphanum'
                    type='text'
                    className='form-control'
                    required
                    placeholder=''
                    name='cumilativeBalance'
                    value={cumilativeBalance}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className='form-group col-md-4 mb-0'>
                <div>
                  <button
                    type='submit'
                    className='btn btn-primary waves-effect waves-light mr-1'
                  >
                    Submit
                  </button>{" "}
                  <button
                    type='reset'
                    className='btn btn-secondary waves-effect'
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
};
export default VehicleSummary;
