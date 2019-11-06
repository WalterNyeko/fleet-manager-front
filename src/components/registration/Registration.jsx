
import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => { 
  return (
    <div>
        <div className="home-btn d-none d-sm-block">
            <a href="index.html" className="text-dark">
                <i className="fas fa-home h2"></i>
            </a>
        </div>
        <div className="wrapper-page">
            <div className="card overflow-hidden account-card mx-3">
                <div className="bg-primary p-4 text-white text-center position-relative">
                    <h4 className="font-20 m-b-5">
                        Free Register
                    </h4>
                    <p className="text-white-50 mb-4">
                        Get your free Veltrix account now.
                    </p>
                    <a href="index.html" className="logo logo-admin">
                        <img src="assets/images/logo-sm.png" height="24" alt="logo"/>
                    </a>
                </div>
                <div className="account-card-content">
                    <form className="form-horizontal m-t-30" action="https://themesbrand.com/veltrix/layouts/vertical/index.html">
                        <div className="form-group">
                            <label htmlFor="useremail">
                                Email
                            </label> 
                            <input type="email" className="form-control" id="useremail" placeholder="Enter email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">
                                Username
                            </label> 
                            <input type="text" className="form-control" id="username" placeholder="Enter username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="userpassword">
                                Password
                            </label> 
                            <input type="password" className="form-control" id="userpassword" placeholder="Enter password"/>
                        </div>
                        <div className="form-group row m-t-20">
                            <div className="col-12 text-right">
                                <button className="btn btn-primary w-md waves-effect waves-light" type="submit">
                                    Register
                                </button>
                            </div>
                        </div>
                        <div className="form-group m-t-10 mb-0 row">
                            <div className="col-12 m-t-20">
                                <p className="mb-0">By registering you agree to the Veltrix 
                                    <NavLink to="#" className="text-primary">
                                        Terms of Use
                                    </NavLink>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="m-t-40 text-center">
                <p>Already have an account ? 
                    <NavLink to="/" className="font-500 text-primary">
                        Login
                    </NavLink>
                </p>
                <p>
                    © 2019 SoftEarth Technologies, Inc. Crafted with{" "}
                    <i className="mdi mdi-heart text-danger"></i> by Fleet Lovers
                </p>
            </div>
        </div>
    </div>
  );
};

export default Register;
