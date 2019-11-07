import React from "react";
import { NavLink } from "react-router-dom";

export default function TopNav() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <a href="index.html" className="logo">
          <span>
            <span>Fleet Manager</span>
          </span>
          <i>
            <img src="assets/images/logo-sm.png" alt="" height="22" />
          </i>
        </a>
      </div>
      <nav className="navbar-custom">
        <ul className="navbar-right list-inline float-right mb-0">
          <li className="dropdown notification-list list-inline-item d-none d-md-inline-block">
            <form role="search" className="app-search">
              <div className="form-group mb-0">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search.."
                />{" "}
                <button type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </form>
          </li>
          <li className="dropdown notification-list list-inline-item d-none d-md-inline-block">
            <a
              className="nav-link waves-effect"
              href="/home"
              id="btn-fullscreen"
            >
              <i className="mdi mdi-fullscreen noti-icon"></i>
            </a>
          </li>
          <li className="dropdown notification-list list-inline-item">
            <a
              className="nav-link dropdown-toggle arrow-none waves-effect"
              data-toggle="dropdown"
              href="/home"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <i className="mdi mdi-bell-outline noti-icon"></i>{" "}
              <span className="badge badge-pill badge-danger noti-icon-badge">
                3
              </span>
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg">
              <h6 className="dropdown-item-text">Notifications (258)</h6>
              <div className="slimscroll notification-item-list">
                <a href="/home" className="dropdown-item notify-item active">
                  <div className="notify-icon bg-success">
                    <i className="mdi mdi-cart-outline"></i>
                  </div>
                  <p className="notify-details">
                    Your order is placed
                    <span className="text-muted">
                      Dummy text of the printing and typesetting industry.
                    </span>
                  </p>
                </a>
                <a href="/home" className="dropdown-item notify-item">
                  <div className="notify-icon bg-warning">
                    <i className="mdi mdi-message-text-outline"></i>
                  </div>
                  <p className="notify-details">
                    New Message received
                    <span className="text-muted">
                      You have 87 unread messages
                    </span>
                  </p>
                </a>
                <a href="/home" className="dropdown-item notify-item">
                  <div className="notify-icon bg-info">
                    <i className="mdi mdi-glass-cocktail"></i>
                  </div>
                  <p className="notify-details">
                    Your item is shipped
                    <span className="text-muted">
                      It is a long established fact that a reader will
                    </span>
                  </p>
                </a>
                <a href="/home" className="dropdown-item notify-item">
                  <div className="notify-icon bg-primary">
                    <i className="mdi mdi-cart-outline"></i>
                  </div>
                  <p className="notify-details">
                    Your order is placed
                    <span className="text-muted">
                      Dummy text of the printing and typesetting industry.
                    </span>
                  </p>
                </a>
                <a href="/home" className="dropdown-item notify-item">
                  <div className="notify-icon bg-danger">
                    <i className="mdi mdi-message-text-outline"></i>
                  </div>
                  <p className="notify-details">
                    New Message received
                    <span className="text-muted">
                      You have 87 unread messages
                    </span>
                  </p>
                </a>
              </div>{" "}
              <a
                href="/home"
                className="dropdown-item text-center text-primary"
              >
                View all <i className="fi-arrow-right"></i>
              </a>
            </div>
          </li>
          <li className="dropdown notification-list list-inline-item">
            <div className="dropdown notification-list nav-pro-img">
              <a
                className="dropdown-toggle nav-link arrow-none waves-effect nav-user"
                data-toggle="dropdown"
                href="/home"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <img
                  src="assets/images/users/user-4.jpg"
                  alt="user"
                  className="rounded-circle"
                />
              </a>
              <div className="dropdown-menu dropdown-menu-right profile-dropdown">
                <a className="dropdown-item" href="/home">
                  <i className="mdi mdi-account-circle m-r-5"></i> Walter
                </a>{" "}
                <a className="dropdown-item" href="/home">
                  <i className="mdi mdi-wallet m-r-5"></i> My Account
                </a>{" "}
                <a className="dropdown-item d-block" href="/home">
                  <span className="badge badge-success float-right">11</span>
                  <i className="mdi mdi-settings m-r-5"></i> Settings
                </a>{" "}
                <a className="dropdown-item" href="/home">
                  <i className="mdi mdi-lock-open-outline m-r-5"></i> Lock
                  screen
                </a>
                <div className="dropdown-divider"></div>
                <NavLink className="dropdown-item text-danger" to="/">
                  <i className="mdi mdi-power text-danger"></i> Logout
                </NavLink>
              </div>
            </div>
          </li>
        </ul>
        <ul className="list-inline menu-left mb-0">
          <li className="float-left">
            <button className="button-menu-mobile open-left waves-effect">
              <i className="mdi mdi-menu"></i>
            </button>
          </li>
          <li className="d-none d-sm-block">
            <div className="dropdown pt-3 d-inline-block">
              <a
                className="btn btn-light dropdown-toggle"
                href="/home"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Create
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <NavLink className="dropdown-item" to="/createvehicle">
                  New Vehicle
                </NavLink>{" "}
                <NavLink className="dropdown-item" to="/createvehicledefects">
                  New Defects Record
                </NavLink>{" "}
                <a className="dropdown-item" href="/home">
                  New Accident Record
                </a>
                <a className="dropdown-item" href="/home">
                  New Vehicle Asset
                </a>
                <a className="dropdown-item" href="/home">
                  New Costing Incurred
                </a>
                <a className="dropdown-item" href="/home">
                  New Maintenance Record
                </a>
                <a className="dropdown-item" href="/home">
                  New Pullcar Incidence
                </a>
                <a className="dropdown-item" href="/home">
                  New Stock Record
                </a>
                <a className="dropdown-item" href="/home">
                  New Accident Record
                </a>
                <a className="dropdown-item" href="/home">
                  New Accident Record
                </a>
                {/* <div className="dropdown-divider"></div> */}
                <a className="dropdown-item" href="/home">
                  New Vehicle Hire
                </a>
                <a className="dropdown-item" href="/home">
                  New Fuel Expense Record
                </a>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
