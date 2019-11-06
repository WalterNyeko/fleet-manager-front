import React from "react";
import { NavLink } from "react-router-dom";

const PasswordReset = () =>{
    return(
        <div>
                <div class="wrapper-page"><div class="card overflow-hidden account-card mx-3">

                    <div class="bg-primary p-4 text-white text-center position-relative">
                        <h4 class="font-20 mb-4">Reset Password</h4>
                            <NavLink to="/forgotpassword" className="font-500 text-primary">
                            </NavLink>
                        <a href="index.html" class="logo logo-admin">
                            <img src="assets/images/logo-sm.png" height="24" alt="logo"/></a></div>

                            <div class="account-card-content"><div class="alert alert-success m-t-30" role="alert">Enter your Email and instructions will be sent to you!</div>

                            <form class="form-horizontal m-t-30" action="https://themesbrand.com/veltrix/layouts/vertical/index.html">
                            <div class="form-group"><label for="useremail">Email</label> <input type="email" class="form-control" id="useremail" placeholder="Enter email"/></div>
                            <div class="form-group row m-t-20 mb-0"><div class="col-12 text-right">
                                <button class="btn btn-primary w-md waves-effect waves-light" type="submit">Reset</button>
                                </div></div>
                                </form>
                                </div></div><div class="m-t-40 text-center"><p>Remember It ? 
                                <NavLink to="/login" className="font-500 text-primary">
                                Sign In here
                            </NavLink>

                                </p><p>© 2019 SoftEarth Technologies. Crafted with <i class="mdi mdi-heart text-danger"></i> by Fleet Lovers</p></div>
                                </div>
                                
        </div>
    )
}
export default PasswordReset;