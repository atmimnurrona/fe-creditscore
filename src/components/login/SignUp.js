import React, {Component} from "react";
import undraw_Updated_resume_re_q1or from "../images/undraw_Updated_resume_re_q1or.svg"
import {
    faIcons,
    faInfoCircle,
    faKey,
    faMailBulk,
    faServer,
    faUser,
    faUserCircle
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./Form.css"
import {Button} from "reactstrap";

class SignUp extends Component {
    render() {
        return (
        <div class="container">
            <div class="row py-5 mt-4 align-items-center">
                <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
                    <img src={undraw_Updated_resume_re_q1or} alt="" class="img-fluid mb-3 d-none d-md-block"/>
                        <h1 style={{color:"#e42256", fontSize:"55px"}}>Create an Account</h1>
                </div>
                <div class="col-md-7 col-lg-6 ml-auto">
                    <form action="#">
                        <div class="row">
                            <div class="input-group col-lg-6 mb-4">
                                <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <FontAwesomeIcon icon={faUserCircle}/>
                            </span>
                                </div>
                                <input id="fullName" type="text" name="fullname" placeholder="Full Name" class="form-control bg-white border-left-0 border-md"/>
                            </div>

                            <div className="input-group col-lg-6 mb-4">
                                <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <FontAwesomeIcon icon={faUser}/>
                            </span>
                                </div>
                                <input id="userName" type="text" name="username" placeholder="Username"
                                       className="form-control bg-white border-left-0 border-md"/>
                            </div>

                            <div class="input-group col-lg-12 mb-4">
                                <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <FontAwesomeIcon icon={faMailBulk}/>
                            </span>
                                </div>
                                <input id="email" type="email" name="email" placeholder="Email Address" class="form-control bg-white border-left-0 border-md"/>
                            </div>

                            <div class="input-group col-lg-6 mb-4">
                                <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <FontAwesomeIcon icon={faKey}/>
                            </span>
                                </div>
                                <input id="password" type="password" name="password" placeholder="Password" class="form-control bg-white border-left-0 border-md"/>
                            </div>

                            <div class="input-group col-lg-6 mb-4">
                                <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <FontAwesomeIcon icon={faKey}/>
                            </span>
                                </div>
                                <input id="passwordConfirmation" type="text" name="passwordConfirmation" placeholder="Confirm Password" class="form-control bg-white border-left-0 border-md"/>
                            </div>

                            <div className="input-group col-lg-12 mb-4">
                                <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <FontAwesomeIcon icon={faServer}/>
                            </span>
                                </div>
                                <select id="job" name="jobtitle"
                                        className="form-control custom-select bg-white border-left-0 border-md">
                                    <option selected>---Choose the role---</option>
                                    <option value="1">Supervisor</option>
                                    <option value="0">Staff</option>
                                </select>
                            </div>

                            <div class="form-group col-lg-12 mx-auto mb-0">
                                <Button style={{background:"#e42256"}} block>
                                    <a href="#" className="btn btn-block py-2">
                                        <span className="font-weight-bold" style={{color: "#ffff"}}>Create account</span>
                                    </a>
                                </Button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
    }
}

export default SignUp;