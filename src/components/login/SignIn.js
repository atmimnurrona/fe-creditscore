import React, {Component} from "react";
import image from "../images/undraw_Hiring_re_yk5n.svg"
import {faIcons, faInfoCircle, faKey, faLock, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button, Container} from "reactstrap";
import undraw_Access_account_re_8spm from "../images/undraw_Access_account_re_8spm.svg"
import "./Form.css"

class SignIn extends Component {
    render() {
        return (
            <div class="container">
                <div class="row py-5 mt-4 align-items-center">
                    <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
                        <img src={undraw_Access_account_re_8spm} alt="" class="img-fluid mb-3 d-none d-md-block"/>
                    </div>

                    <div class="col-md-7 col-lg-6 ml-auto">
                        <h1 style={{color:"#e42256", fontSize:"55px"}}>Sign In</h1>
                        <br/>
                        <form action="#">
                            <div class="row">
                                <div class="input-group col-lg-12 mb-4">
                                    <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <FontAwesomeIcon icon={faUser}/>
                            </span>
                                    </div>
                                    <input id="username" type="text" name="username" placeholder="Username" class="form-control bg-white border-left-0 border-md"/>
                                </div>

                                <div class="input-group col-lg-12 mb-4">
                                    <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <FontAwesomeIcon icon={faKey}/>
                            </span>
                                    </div>
                                    <input id="password" type="password" name="password" placeholder="Password" class="form-control bg-white border-left-0 border-md"/>
                                </div>


                                <div class="form-group col-lg-12 mx-auto mb-0" >
                                    <Button style={{background:"#e42256"}} block>
                                        <a href="#" className="btn btn-block py-2">
                                            <span className="font-weight-bold" style={{color: "#ffff"}}>SIGN IN</span>
                                        </a>
                                    </Button>
                                </div>

                                <div class="text-center w-100">
                                    <p class="text-muted font-weight-bold">Forgot Password? <a href="#" class="text-primary ml-2">Click here</a></p>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default SignIn;