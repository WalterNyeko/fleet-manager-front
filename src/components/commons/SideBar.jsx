import React from "react";
import "../../index.css";
import {NavLink} from "react-router-dom";

export default function SideBar() {
  return (
    <div className="left side-menu">
      <div className="slimscroll-menu" id="remove-scroll">
        <div id="sidebar-menu">
          <ul className="metismenu" id="side-menu">
            <li className="menu-title">Main</li>
            <li>
              <a href="index.html" className="waves-effect">
                <i className="ti-home"></i>
                <span className="badge badge-primary badge-pill float-right">
                  2
                </span>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <NavLink to="/allvehicles" className="waves-effect">
                <i className="ti-calendar"></i>
                <span>Vehicles</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/allveichleshire" className="waves-effect">
                <i className="ti-calendar"></i>
                <span>Vehicles Hire</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/allveichlesoffroad" className="waves-effect">
                <i className="ti-calendar"></i>
                <span>Vehicles Off Road</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/allmarkedveichlesassets" className="waves-effect">
                <i className="ti-calendar"></i>
                <span>Marked Vehicle Assets</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/alltyres" className="waves-effect">
                <i className="ti-calendar"></i>
                <span>Tyres</span>
              </NavLink>
            </li>
            <li>
              <a href="calendar.html" className="waves-effect">
                <i className="ti-calendar"></i>
                <span>Fuel</span>
              </a>
            </li>
            <li>
              <a href="calendar.html" className="waves-effect">
                <i className="ti-calendar"></i>
                <span>Defects</span>
              </a>
            </li>
            <li>
              <a href="calendar.html" className="waves-effect">
                <i className="ti-calendar"></i>
                <span>Accidents</span>
              </a>
            </li>
            <li>
              <a href="calendar.html" className="waves-effect">
                <i className="ti-calendar"></i>
                <span>Maintenance</span>
              </a>
            </li>
            <li>
              <a href="calendar.html" className="waves-effect">
                <i className="ti-calendar"></i>
                <span>Poolcar Planner</span>
              </a>
            </li>
            <li>
              <a href="calendar.html" className="waves-effect">
                <i className="ti-calendar"></i>
                <span>Costings</span>
              </a>
            </li>
            <li>
              <a href="calendar.html" className="waves-effect">
                <i className="ti-calendar"></i>
                <span>Purchase Orders</span>
              </a>
            </li>
            <li>
              <a href="calendar.html" className="waves-effect">
                <i className="ti-calendar"></i>
                <span>Stock</span>
              </a>
            </li>
            <li>
              <a href="calendar.html" className="waves-effect">
                <i className="ti-calendar"></i>
                <span>Customer Relations</span>
              </a>
            </li>
            <li>
              <a href="calendar.html" className="waves-effect">
                <i className="ti-calendar"></i>
                <span>Insurance Certificate</span>
              </a>
            </li>
            <li>
              <a href="calendar.html" className="waves-effect">
                <i className="ti-calendar"></i>
                <span>Management Reports</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  );
}
