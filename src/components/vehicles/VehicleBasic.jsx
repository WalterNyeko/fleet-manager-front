import React from "react";

const VehicleBasic = ({
  mySettings: { vehiclegearbox, vehicledeductability },
  state: {
    exteriorColor,
    gearBox,
    ecoScore,
    interiorColor,
    numberOfDoors,
    cogkm,
    keyNumber,
    chassisNumber,
    fiscalHp,
    engineNumber,
    engineCc,
    distanceHomeToWork,
    vehiclePhoneNumber,
    bhp,
    deducability,
    grossVehicleWeight,
    winterTyres,
    winterTyresLocation,
    tankSize
  },
  handleInputChange
}) => {
  return (
    <div className='row'>
      <form className='row' action='#'>
        <div className='card col-md-12 my-card mr-1'>
          <div className='card-body custom-card'>
            <div className='row'>
              <div className='form-group col-md-4'>
                <label>Exterior Colour</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='exteriorColor'
                  value={exteriorColor}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group col-md-4'>
                <label>Gear Box</label>
                <select
                  className='browser-default custom-select'
                  name='gearBox'
                  value={gearBox}
                  onChange={handleInputChange}
                >
                  <option value='gear' selected>
                    Select Vehicle Gear Box
                  </option>
                  {vehiclegearbox &&
                    vehiclegearbox.length &&
                    vehiclegearbox.map(({ gear_box_name }) => (
                      <option value='gear'>{gear_box_name}</option>
                    ))}
                </select>
              </div>
              <div className='form-group col-md-4'>
                <label>Ecoscore</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='ecoScore'
                  value={ecoScore}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group col-md-4'>
                <label>Interior Colour</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='interiorColor'
                  value={interiorColor}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group col-md-4'>
                <label>No. of Doors</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='numberOfDoors'
                  value={numberOfDoors}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group col-md-4'>
                <label>Co2gkm</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='cogkm'
                  value={cogkm}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group col-md-4'>
                <label>Key Number</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='keyNumber'
                  value={keyNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group col-md-4'>
                <label>Chassis Number</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='chassisNumber'
                  value={chassisNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group col-md-4'>
                <label>Fiscal hp</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='fiscalHp
                  '
                  value={fiscalHp}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group col-md-4'>
                <label>Engine Number</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='engineNumber'
                  value={engineNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group col-md-4'>
                <label>Engine Cc</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='engineCc'
                  value={engineCc}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group col-md-4'>
                <label>Distance home to work</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='distanceHomeToWork'
                  value={distanceHomeToWork}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group col-md-4'>
                <label>Vehicle Phone Number</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='vehiclePhoneNumber'
                  value={vehiclePhoneNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group col-md-4'>
                <label>BHP</label>{" "}
                <input
                  type='text'
                  className='form-control'
                  required
                  placeholder=''
                  name='bhp'
                  value={bhp}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group col-md-4'>
                <label>CO2 Deducability</label>
                <div>
                  <select
                    className='browser-default custom-select'
                    name='deducability'
                    value={deducability}
                    onChange={handleInputChange}
                  >
                    <option value='deducability' selected>
                      Select Vehicle Deducability
                    </option>
                    {vehicledeductability &&
                      vehicledeductability.length &&
                      vehicledeductability.map(({ deductability_name }) => (
                        <option value='deducability'>
                          {deductability_name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div className='form-group col-md-4'>
                <label>Gross Vehicle Weight</label>
                <div>
                  <input
                    type='email'
                    className='form-control'
                    required
                    parsley-type='email'
                    placeholder=''
                    name='grossVehicleWeight'
                    value={grossVehicleWeight}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className='form-group col-md-4'>
                <label>Winter Tyres</label>
                <div>
                  <input
                    type='email'
                    className='form-control'
                    required
                    parsley-type='email'
                    placeholder=''
                    name='winterTyres'
                    value={winterTyres}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className='form-group col-md-4'>
                <label>Winter Tyres Location</label>
                <div>
                  <input
                    type='email'
                    className='form-control'
                    required
                    parsley-type='email'
                    placeholder=''
                    name='winterTyresLocation'
                    value={winterTyresLocation}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className='form-group col-md-4'>
                <label>Tank Size</label>
                <div>
                  <input
                    type='email'
                    className='form-control'
                    required
                    parsley-type='email'
                    placeholder=''
                    name='tankSize'
                    value={tankSize}
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
export default VehicleBasic;
