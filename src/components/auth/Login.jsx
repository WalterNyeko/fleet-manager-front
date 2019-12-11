import React from "react";
import { NavLink } from "react-router-dom";

const Home = ({ handleSubmit, onChangeHandler, username, password }) => {
  return (
    <div>
      <div className="wrapper-page">
        <div className="card overflow-hidden account-card mx-3">
          <div className="bg-primary p-4 text-white text-center position-relative">
            <h4 className="font-20 m-b-5">Welcome Back !</h4>
            <p className="text-white-50 mb-4">
              Sign in to continue to Fleet Manager.
            </p>
            <a href="index.html" className="logo logo-admin">
              <img src="assets/images/logo-sm.png" height="24" alt="logo" />
            </a>
          </div>
          <div className="account-card-content">
            <form
              className="form-horizontal m-t-30"
              action="https://themesbrand.com/veltrix/layouts/vertical/index.html"
            >
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter username"
                  name="username"
                  value={username}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="userpassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="userpassword"
                  placeholder="Enter password"
                  name="password"
                  value={password}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="form-group row m-t-20">
                <div className="col-sm-6">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customControlInline"
                    />{" "}
                    <label
                      className="custom-control-label"
                      htmlFor="customControlInline"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="col-sm-6 text-right">
                  <button
                    className="btn btn-primary w-md waves-effect waves-light"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Log In
                  </button>
                </div>
              </div>
              <div className="form-group m-t-10 mb-0 row">
                <div className="col-12 m-t-20">
                  <NavLink to="/forgotpassword" className="mdi mdi-lock">
                    Forgot your password?
                  </NavLink>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="m-t-40 text-center">
          <p>
            Don't have an account ?{" "}
            <NavLink to="/register" className="font-500 text-primary">
              Signup now
            </NavLink>
          </p>

          <NavLink to="/login" className="font-500 text-primary"></NavLink>
          <p>
            © 2019 SoftEarth Technologies, Inc. Crafted with{" "}
            <i className="mdi mdi-heart text-danger"></i> by Fleet Lovers
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
