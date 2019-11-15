import React from "react";
// import RepairInfoComponent from "./RepairInfo";

export default function RepairRecord() {
  return (
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
          <ul class="nav nav-tabs nav-justified" role="tablist">
            <li class="nav-item waves-effect waves-light">
              <a
                class="nav-link active"
                data-toggle="tab"
                href="#default"
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
                href="#description-1"
                role="tab"
              >
                <span class="d-block d-sm-none">
                  <i class="far fa-user"></i>
                </span>{" "}
                <span class="d-none d-sm-block">Description</span>
              </a>
            </li>
            <li class="nav-item waves-effect waves-light">
              <a class="nav-link" data-toggle="tab" href="#cost-1" role="tab">
                <span class="d-block d-sm-none">
                  <i class="far fa-envelope"></i>
                </span>{" "}
                <span class="d-none d-sm-block">Estimated Cost</span>
              </a>
            </li>
            <li class="nav-item waves-effect waves-light">
              <a
                class="nav-link"
                data-toggle="tab"
                href="#invoice-1"
                role="tab"
              >
                <span class="d-block d-sm-none">
                  <i class="fas fa-cog"></i>
                </span>{" "}
                <span class="d-none d-sm-block">Invoice Details</span>
              </a>
            </li>
            <li class="nav-item waves-effect waves-light">
              <a
                class="nav-link"
                data-toggle="tab"
                href="#service-1"
                role="tab"
              >
                <span class="d-block d-sm-none">
                  <i class="far fa-user"></i>
                </span>{" "}
                <span class="d-none d-sm-block">Service History</span>
              </a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane active p-3" id="default" role="tabpanel">
              {/* <RepairInfoComponent /> */}
            </div>
            <div class="tab-pane p-3" id="description-1" role="tabpanel">
              {/* <RepairDescriptionComponent /> */}
            </div>
            <div class="tab-pane p-3" id="cost-1" role="tabpanel">
              {/* <RepairCostComponent /> */}
            </div>
            <div class="tab-pane p-3" id="invoice-1" role="tabpanel">
              {/* <RepairInvoiceComponent /> */}
            </div>
            <div class="tab-pane p-3" id="service-1" role="tabpanel">
            {/* <RepairHistoryComponent /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
