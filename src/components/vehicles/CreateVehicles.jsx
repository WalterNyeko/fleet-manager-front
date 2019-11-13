import React from "react";
import VehicleMajorComponent from "./CreateVehicle";
import VehicleSummaryComponent from "./VehicleSummary";
import VehicleBasicComponent from "./VehicleBasic";

export default function CreateVehicles() {
  return (
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-10">
        <div class="row add-vehicle">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <h4 class="mt-0 header-title">Vehicle Information</h4>
                <ul class="nav nav-pills nav-justified" role="tablist">
                  <li class="nav-item waves-effect waves-light">
                    <a
                      class="nav-link active"
                      data-toggle="tab"
                      href="#default-1"
                      role="tab"
                    >
                      <span class="d-block d-sm-none">
                        <i class="fas fa-home"></i>
                      </span>{" "}
                      <span class="d-none d-sm-block">Default</span>
                    </a>
                  </li>
                  <li class="nav-item waves-effect waves-light">
                    <a
                      class="nav-link"
                      data-toggle="tab"
                      href="#summary-1"
                      role="tab"
                    >
                      <span class="d-block d-sm-none">
                        <i class="far fa-user"></i>
                      </span>{" "}
                      <span class="d-none d-sm-block">Summary</span>
                    </a>
                  </li>
                  <li class="nav-item waves-effect waves-light">
                    <a
                      class="nav-link"
                      data-toggle="tab"
                      href="#basic-1"
                      role="tab"
                    >
                      <span class="d-block d-sm-none">
                        <i class="far fa-envelope"></i>
                      </span>{" "}
                      <span class="d-none d-sm-block">Basic</span>
                    </a>
                  </li>
                  <li class="nav-item waves-effect waves-light">
                    <a
                      class="nav-link"
                      data-toggle="tab"
                      href="#diary-1"
                      role="tab"
                    >
                      <span class="d-block d-sm-none">
                        <i class="fas fa-cog"></i>
                      </span>{" "}
                      <span class="d-none d-sm-block">Diary</span>
                    </a>
                  </li>
                  <li class="nav-item waves-effect waves-light">
                    <a
                      class="nav-link"
                      data-toggle="tab"
                      href="#repairs-1"
                      role="tab"
                    >
                      <span class="d-block d-sm-none">
                        <i class="far fa-user"></i>
                      </span>{" "}
                      <span class="d-none d-sm-block">Repairs</span>
                    </a>
                  </li>
                  <li class="nav-item waves-effect waves-light">
                    <a
                      class="nav-link"
                      data-toggle="tab"
                      href="#allocation-1"
                      role="tab"
                    >
                      <span class="d-block d-sm-none">
                        <i class="far fa-user"></i>
                      </span>{" "}
                      <span class="d-none d-sm-block">Allocation</span>
                    </a>
                  </li>
                  <li class="nav-item waves-effect waves-light">
                    <a
                      class="nav-link"
                      data-toggle="tab"
                      href="#assets-1"
                      role="tab"
                    >
                      <span class="d-block d-sm-none">
                        <i class="far fa-user"></i>
                      </span>{" "}
                      <span class="d-none d-sm-block">Assets</span>
                    </a>
                  </li>
                  <li class="nav-item waves-effect waves-light">
                    <a
                      class="nav-link"
                      data-toggle="tab"
                      href="#majorcomponents-1"
                      role="tab"
                    >
                      <span class="d-block d-sm-none">
                        <i class="far fa-user"></i>
                      </span>{" "}
                      <span class="d-none d-sm-block">Components</span>
                    </a>
                  </li>
                  <li class="nav-item waves-effect waves-light">
                    <a
                      class="nav-link"
                      data-toggle="tab"
                      href="#lease-1"
                      role="tab"
                    >
                      <span class="d-block d-sm-none">
                        <i class="far fa-user"></i>
                      </span>{" "}
                      <span class="d-none d-sm-block">Lease</span>
                    </a>
                  </li>
                  <li class="nav-item waves-effect waves-light">
                    <a
                      class="nav-link"
                      data-toggle="tab"
                      href="#notes-1"
                      role="tab"
                    >
                      <span class="d-block d-sm-none">
                        <i class="far fa-user"></i>
                      </span>{" "}
                      <span class="d-none d-sm-block">Notes</span>
                    </a>
                  </li>
                </ul>
                <div class="tab-content">
                  <div
                    class="tab-pane active p-3"
                    id="default-1"
                    role="tabpanel"
                  >
                    <VehicleMajorComponent />
                  </div>
                  <div class="tab-pane p-3" id="summary-1" role="tabpanel">
                    <VehicleSummaryComponent />
                  </div>
                  <div class="tab-pane p-3" id="basic-1" role="tabpanel">
                    <VehicleBasicComponent />
                  </div>
                  <div class="tab-pane p-3" id="diary-1" role="tabpanel">
                    <p class="mb-0">Vehicle Diary Page</p>
                  </div>
                  <div class="tab-pane p-3" id="repairs-1" role="tabpanel">
                    <p class="mb-0">Vehicle Repair Page</p>
                  </div>
                  <div class="tab-pane p-3" id="allocation-1" role="tabpanel">
                    <p class="mb-0">Vehicle Allocation Page</p>
                  </div>
                  <div class="tab-pane p-3" id="assets-1" role="tabpanel">
                    <p class="mb-0">Vehicle Assets Page</p>
                  </div>
                  <div
                    class="tab-pane p-3"
                    id="majorcomponents-1"
                    role="tabpanel"
                  >
                    <p class="mb-0">Vehicle Major Components Page</p>
                  </div>
                  <div class="tab-pane p-3" id="lease-1" role="tabpanel">
                    <p class="mb-0">Vehicle Lease Page</p>
                  </div>
                  <div class="tab-pane p-3" id="notes-1" role="tabpanel">
                    <p class="mb-0">Vehicle Notes Page</p>
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
