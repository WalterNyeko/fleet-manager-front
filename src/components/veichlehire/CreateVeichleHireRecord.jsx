import React from "react";
import HireInfoComponent from "./HireInfo";

export default function CreateVehiclesHireRecord() {
  return (
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-10">
        <div class="row add-vehicle">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <h4 class="mt-0 header-title">Vehicle Hire Information</h4>
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
                      <span class="d-none d-sm-block">Vehicle Hire</span>
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
                      <span class="d-none d-sm-block">Rental Collection Details</span>
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
                      <span class="d-none d-sm-block">Rental Revenue</span>
                    </a>
                  </li>
                </ul>
                <div class="tab-content">
                  <div
                    class="tab-pane active p-3"
                    id="default-1"
                    role="tabpanel"
                  >
                    <HireInfoComponent />
                  </div>
                  <div class="tab-pane p-3" id="summary-1" role="tabpanel">
                    {/* <VehicleSummaryComponent /> */}
                  </div>
                  <div class="tab-pane p-3" id="basic-1" role="tabpanel">
                    {/* <VehicleBasicComponent /> */}
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
