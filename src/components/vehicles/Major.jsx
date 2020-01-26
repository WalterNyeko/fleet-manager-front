import React from "react";

export default function Major({
                 state: {
                   frontTyreMake,
                   frontTyreSize,
                   frontTyrePsi,
                   rearTyreMake,
                   rearTyreSize,
                   rearTyrePsi,
                   batteryMake,
                   batterySize,
                   batteryType,
                   bodyMake,
                   bodySerial,
                   gearBoxMake,
                   gearBoxSerial,
                   limiterMake,
                   limiterNumber,
                   limiterDate,
                   tachnographMake,
                   tachnographNumber,
                   tachnograph2year,
                   tachnograph6year,
                   tailLift,
                   tailNum,
                   tailSwl,
                   axleType,
                   axleNumber,
                   axleRatio,
    numberOfWheels, 
    forkLightHeight
                   
                 },
                 handleInputChange
               }) {
                 return (
                   <div className='row'>
                     <form className='row' action='#'>
                       <div className='card col-md-12 my-card mr-1'>
                         <div className='card-body custom-card'>
                           <div className='card-title'>Major Components</div>
                           <hr />
                           <div className='row'>
                             <div className='form-group col-md-4'>
                               <label>Front Tyre Make</label>{" "}
                               <input
                                 type='text'
                                 className='form-control'
                                 required
                                 placeholder=''
                                 name='frontTyreMake'
                                 value={frontTyreMake}
                                 onChange={handleInputChange}
                               />
                             </div>

                             <div className='form-group col-md-4'>
                               <label>Front Tyre Size</label>{" "}
                               <input
                                 type='text'
                                 className='form-control'
                                 required
                                 placeholder=''
                                 name='frontTyreSize'
                                 value={frontTyreSize}
                                 onChange={handleInputChange}
                               />
                             </div>
                             <div className='form-group col-md-4'>
                               <label>Front Tyre PSI</label>{" "}
                               <input
                                 type='text'
                                 className='form-control'
                                 required
                                 placeholder=''
                                 name='frontTyrePsi'
                                 value={frontTyrePsi}
                                 onChange={handleInputChange}
                               />
                             </div>
                             <div className='form-group col-md-4'>
                               <label>Rear Tyre Make</label>{" "}
                               <input
                                 type='text'
                                 className='form-control'
                                 required
                                 placeholder=''
                                 name='rearTyreMake'
                                 value={rearTyreMake}
                                 onChange={handleInputChange}
                               />
                             </div>
                             <div className='form-group col-md-4'>
                               <label>Rear Tyre Size</label>{" "}
                               <input
                                 type='text'
                                 className='form-control'
                                 required
                                 placeholder=''
                                 name='rearTyreSize'
                                 value={rearTyreSize}
                                 onChange={handleInputChange}
                               />
                             </div>
                             <div className='form-group col-md-4'>
                               <label>Rear Tyre PSI</label>{" "}
                               <input
                                 type='text'
                                 className='form-control'
                                 required
                                 placeholder=''
                                 name='rearTyrePsi'
                                 value={rearTyrePsi}
                                 onChange={handleInputChange}
                               />
                             </div>
                             <div className='form-group col-md-4'>
                               <label>Battery Make</label>{" "}
                               <input
                                 type='text'
                                 className='form-control'
                                 required
                                 placeholder=''
                                 name='batteryMake'
                                 value={batteryMake}
                                 onChange={handleInputChange}
                               />
                             </div>
                             <div className='form-group col-md-4'>
                               <label>Battery Size</label>{" "}
                               <input
                                 type='text'
                                 className='form-control'
                                 required
                                 placeholder=''
                                 name='batterySize'
                                 value={batterySize}
                                 onChange={handleInputChange}
                               />
                             </div>
                             <div className='form-group col-md-4'>
                               <label>Battery Type</label>{" "}
                               <input
                                 type='text'
                                 className='form-control'
                                 required
                                 placeholder=''
                                 name='batteryType'
                                 value={batteryType}
                                 onChange={handleInputChange}
                               />
                             </div>
                             <div className='form-group col-md-4'>
                               <label>Body Make</label>{" "}
                               <input
                                 type='text'
                                 className='form-control'
                                 required
                                 placeholder=''
                                 name='bodyMake'
                                 value={bodyMake}
                                 onChange={handleInputChange}
                               />
                             </div>
                             <div className='form-group col-md-4'>
                               <label>Body Serial</label>{" "}
                               <input
                                 type='text'
                                 className='form-control'
                                 required
                                 placeholder=''
                                 name='bodySerial'
                                 value={bodySerial}
                                 onChange={handleInputChange}
                               />
                             </div>
                             <div className='form-group col-md-4'>
                               <label>Gearbox Make</label>{" "}
                               <input
                                 type='text'
                                 className='form-control'
                                 required
                                 placeholder=''
                                 name='gearBoxMake'
                                 value={gearBoxMake}
                                 onChange={handleInputChange}
                               />
                             </div>
                             <div className='form-group col-md-4'>
                               <label>Gearbox Serial</label>{" "}
                               <input
                                 type='text'
                                 className='form-control'
                                 required
                                 placeholder=''
                                 name='gearBoxSerial'
                                 value={gearBoxSerial}
                                 onChange={handleInputChange}
                               />
                             </div>
                             <div className='form-group col-md-4'>
                               <label>Limiter Make</label>{" "}
                               <input
                                 type='text'
                                 className='form-control'
                                 required
                                 placeholder=''
                                 name='limiterMake'
                                 value={limiterMake}
                                 onChange={handleInputChange}
                               />
                             </div>
                             <div className='form-group col-md-4'>
                               <label>Limiter Number</label>{" "}
                               <input
                                 type='text'
                                 className='form-control'
                                 required
                                 placeholder=''
                                 name='limiterNumber'
                                 value={limiterNumber}
                                 onChange={handleInputChange}
                               />
                             </div>
                             <div className='form-group col-md-4'>
                               <label>Limiter Date</label>{" "}
                               <input
                                 type='text'
                                 className='form-control'
                                 required
                                 placeholder=''
                                 name='limiterDate'
                                 value={limiterDate}
                                 onChange={handleInputChange}
                               />
                             </div>
                             <div className='form-group col-md-4'>
                               <label>Tachograph Make</label>{" "}
                               <input
                                 type='text'
                                 className='form-control'
                                 required
                                 placeholder=''
                                 name='tachnographMake'
                                 value={tachnographMake}
                                 onChange={handleInputChange}
                               />
                             </div>
                             <div className='form-group col-md-4'>
                               <label>Tachograph Number</label>{" "}
                               <input
                                 type='text'
                                 className='form-control'
                                 required
                                 placeholder=''
                                 name='tachnographNumber'
                                 value={tachnographNumber}
                                 onChange={handleInputChange}
                               />
                             </div>
                             <div className='form-group col-md-4'>
                               <label>Tachograph 2 Year</label>{" "}
                               <input
                                 type='text'
                                 className='form-control'
                                 required
                                 placeholder=''
                                 name='tachnograph2year'
                                 value={tachnograph2year}
                                 onChange={handleInputChange}
                               />
                             </div>
                             <div className='form-group col-md-4'>
                               <label>Tachograph 6 Year</label>{" "}
                               <input
                                 type='text'
                                 className='form-control'
                                 required
                                 placeholder=''
                                 name='tachnograph6year'
                                 value={tachnograph6year}
                                 onChange={handleInputChange}
                               />
                             </div>
                             <div className='form-group col-md-4'>
                               <label>Tail Lift</label>{" "}
                               <input
                                 type='text'
                                 className='form-control'
                                 required
                                 placeholder=''
                                 name='tailLift'
                                 value={tailLift}
                                 onchange={handleInputChange}
                               />
                             </div>
                             <div className='form-group col-md-4'>
                               <label>Tail num</label>{" "}
                               <input
                                 type='text'
                                 className='form-control'
                                 required
                                 placeholder=''
                                 name='tailNum'
                                 value={tailNum}
                                 onchange={handleInputChange}
                               />
                             </div>
                             <div className='form-group col-md-4'>
                               <label>Tail swl</label>{" "}
                               <input
                                 type='text'
                                 className='form-control'
                                 required
                                 placeholder=''
                                 name='tailSwl'
                                 value={tailSwl}
                                 onchange={handleInputChange}
                               />
                             </div>
                             <div className='form-group col-md-4'>
                               <label>Axle Type</label>{" "}
                               <input
                                 type='text'
                                 className='form-control'
                                 required
                                 placeholder=''
                                 name='axleType'
                                 value={axleType}
                                 onchange={handleInputChange}
                               />
                             </div>
                             <div className='form-group col-md-4'>
                               <label>Axle Number</label>{" "}
                               <input
                                 type='text'
                                 className='form-control'
                                 required
                                 placeholder=''
                                 name='axleNumber'
                                 value={axleNumber}
                                 onchange={handleInputChange}
                               />
                             </div>
                             <div className='form-group col-md-4'>
                               <label>Axle Ratio</label>{" "}
                               <input
                                 type='text'
                                 className='form-control'
                                 required
                                 placeholder=''
                                 name='axleRatio'
                                 value={axleRatio}
                                 onchange={handleInputChange}
                               />
                             </div>
                             <div className='form-group col-md-4'>
                               <label>Number of Wheels</label>{" "}
                               <input
                                 type='text'
                                 className='form-control'
                                 required
                                 placeholder=''
                                 name='numberOfWheels'
                                 value={numberOfWheels}
                                 onchange={handleInputChange}
                               />
                             </div>
                             <div className='form-group col-md-4'>
                               <label>Fork Lift Height</label>{" "}
                               <input
                                 type='text'
                                 className='form-control'
                                 required
                                 placeholder=''
                                 name='forkLightHeight'
                                 value={forkLightHeight}
                                 onchange={handleInputChange}
                               />
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
               }
