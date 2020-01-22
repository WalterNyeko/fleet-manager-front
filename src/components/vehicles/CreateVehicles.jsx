import React from "react";
import VehicleMajorComponent from "./CreateVehicle";
import VehicleSummaryComponent from "./VehicleSummary";
import VehicleBasicComponent from "./VehicleBasic";
import VehicleDiaryComponent from "./VehicleDiary";
import VehicleAllocationComponent from "./VehicleAllocation";
import VehicleAssetComponent from "./VehicleAsset";
import LeaseComponent from "./Lease";
import NotesComponent from "./Notes";
import MajorComponent from "./Major";
import AddAccidentComponent from "./CreateAccidentRecord";

export default function CreateVehicles({
  handleDateChange,
  handleLeaseEndDateChange,
  handleContractStartDateChange,
  handlePaymentDateChange,
  handleReleaseDateChange,
  handleWorkshopReturnDateChange,
  handleRegistrationDateChange,
  contractStartDate,
  paymentDate,
  releaseDate,
  leaseEndDate,
  workshopReturnDate,
  registrationDate,
  date,
  mySettings,
  handleInputChange,
  state
}) {
  return (
    <div className='row'>
      <div className='col-md-2'></div>
      <div className='col-md-10'>
        <div class='row add-vehicle'>
          <div class='col-lg-12'>
            <div class='card'>
              <div class='card-body'>
                <h4 class='mt-0 header-title'>Vehicle Information</h4>
                <ul class='nav nav-pills nav-justified' role='tablist'>
                  <li class='nav-item waves-effect waves-light'>
                    <a
                      class='nav-link active'
                      data-toggle='tab'
                      href='#default-1'
                      role='tab'
                    >
                      <span class='d-block d-sm-none'>
                        <i class='fas fa-home'></i>
                      </span>{" "}
                      <span class='d-none d-sm-block'>Default</span>
                    </a>
                  </li>
                  <li class='nav-item waves-effect waves-light'>
                    <a
                      class='nav-link'
                      data-toggle='tab'
                      href='#summary-1'
                      role='tab'
                    >
                      <span class='d-block d-sm-none'>
                        <i class='far fa-user'></i>
                      </span>{" "}
                      <span class='d-none d-sm-block'>Summary</span>
                    </a>
                  </li>
                  <li class='nav-item waves-effect waves-light'>
                    <a
                      class='nav-link'
                      data-toggle='tab'
                      href='#basic-1'
                      role='tab'
                    >
                      <span class='d-block d-sm-none'>
                        <i class='far fa-envelope'></i>
                      </span>{" "}
                      <span class='d-none d-sm-block'>Basic</span>
                    </a>
                  </li>
                  <li class='nav-item waves-effect waves-light'>
                    <a
                      class='nav-link'
                      data-toggle='tab'
                      href='#diary-1'
                      role='tab'
                    >
                      <span class='d-block d-sm-none'>
                        <i class='fas fa-cog'></i>
                      </span>{" "}
                      <span class='d-none d-sm-block'>Diary</span>
                    </a>
                  </li>
                  <li class='nav-item waves-effect waves-light'>
                    <a
                      class='nav-link'
                      data-toggle='tab'
                      href='#repairs-1'
                      role='tab'
                    >
                      <span class='d-block d-sm-none'>
                        <i class='far fa-user'></i>
                      </span>{" "}
                      <span class='d-none d-sm-block'>Repairs</span>
                    </a>
                  </li>
                  <li class='nav-item waves-effect waves-light'>
                    <a
                      class='nav-link'
                      data-toggle='tab'
                      href='#allocation-1'
                      role='tab'
                    >
                      <span class='d-block d-sm-none'>
                        <i class='far fa-user'></i>
                      </span>{" "}
                      <span class='d-none d-sm-block'>Allocation</span>
                    </a>
                  </li>
                  <li class='nav-item waves-effect waves-light'>
                    <a
                      class='nav-link'
                      data-toggle='tab'
                      href='#assets-1'
                      role='tab'
                    >
                      <span class='d-block d-sm-none'>
                        <i class='far fa-user'></i>
                      </span>{" "}
                      <span class='d-none d-sm-block'>Assets</span>
                    </a>
                  </li>
                  <li class='nav-item waves-effect waves-light'>
                    <a
                      class='nav-link'
                      data-toggle='tab'
                      href='#majorcomponents-1'
                      role='tab'
                    >
                      <span class='d-block d-sm-none'>
                        <i class='far fa-user'></i>
                      </span>{" "}
                      <span class='d-none d-sm-block'>Components</span>
                    </a>
                  </li>
                  <li class='nav-item waves-effect waves-light'>
                    <a
                      class='nav-link'
                      data-toggle='tab'
                      href='#lease-1'
                      role='tab'
                    >
                      <span class='d-block d-sm-none'>
                        <i class='far fa-user'></i>
                      </span>{" "}
                      <span class='d-none d-sm-block'>Lease</span>
                    </a>
                  </li>
                  <li class='nav-item waves-effect waves-light'>
                    <a
                      class='nav-link'
                      data-toggle='tab'
                      href='#notes-1'
                      role='tab'
                    >
                      <span class='d-block d-sm-none'>
                        <i class='far fa-user'></i>
                      </span>{" "}
                      <span class='d-none d-sm-block'>Notes</span>
                    </a>
                  </li>
                </ul>
                <div class='tab-content'>
                  <div
                    class='tab-pane active p-3'
                    id='default-1'
                    role='tabpanel'
                  >
                    <VehicleMajorComponent
                      handleWorkshopReturnDateChange={
                        handleWorkshopReturnDateChange
                      }
                      handleRegistrationDateChange={
                        handleRegistrationDateChange
                      }
                      workshopReturnDate={workshopReturnDate}
                      registrationDate={registrationDate}
                      mySettings={mySettings}
                      handleInputChange={handleInputChange}
                      state={state}
                    />
                  </div>
                  <div class='tab-pane p-3' id='summary-1' role='tabpanel'>
                    <VehicleSummaryComponent
                      mySettings={mySettings}
                      handleInputChange={handleInputChange}
                      state={state}
                    />
                  </div>
                  <div class='tab-pane p-3' id='basic-1' role='tabpanel'>
                    <VehicleBasicComponent
                      mySettings={mySettings}
                      handleInputChange={handleInputChange}
                      state={state}
                    />
                  </div>
                  <div class='tab-pane p-3' id='diary-1' role='tabpanel'>
                    <VehicleDiaryComponent
                      mySettings={mySettings}
                      handleInputChange={handleInputChange}
                      state={state}
                    />
                  </div>
                  <div class='tab-pane p-3' id='repairs-1' role='tabpanel'>
                    <AddAccidentComponent
                      mySettings={mySettings}
                      handleInputChange={handleInputChange}
                      state={state}
                    />
                  </div>
                  <div class='tab-pane p-3' id='allocation-1' role='tabpanel'>
                    <VehicleAllocationComponent
                      mySettings={mySettings}
                      handleInputChange={handleInputChange}
                      state={state}
                    />
                  </div>
                  <div class='tab-pane p-3' id='assets-1' role='tabpanel'>
                    <VehicleAssetComponent
                      mySettings={mySettings}
                      handleInputChange={handleInputChange}
                      state={state}
                    />
                  </div>
                  <div
                    class='tab-pane p-3'
                    id='majorcomponents-1'
                    role='tabpanel'
                  >
                    <MajorComponent
                      mySettings={mySettings}
                      handleInputChange={handleInputChange}
                      state={state}
                    />
                  </div>
                  <div class='tab-pane p-3' id='lease-1' role='tabpanel'>
                    <LeaseComponent
                      handleLeaseEndDateChange={handleLeaseEndDateChange}
                      handleContractStartDateChange={
                        handleContractStartDateChange
                      }
                      handlePaymentDateChange={handlePaymentDateChange}
                      handleReleaseDateChange={handleReleaseDateChange}
                      leaseEndDate={leaseEndDate}
                      contractStartDate={contractStartDate}
                      paymentDate={paymentDate}
                      releaseDate={releaseDate}
                      mySettings={mySettings}
                      handleInputChange={handleInputChange}
                      state={state}
                    />
                  </div>
                  <div class='tab-pane p-3' id='notes-1' role='tabpanel'>
                    <NotesComponent
                      handleDateChange={handleDateChange}
                      date={date}
                      mySettings={mySettings}
                      handleInputChange={handleInputChange}
                      state={state}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
