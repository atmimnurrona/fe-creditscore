import React, {Component} from 'react';
import undraw_Updated_resume_re_q1or from "../images/undraw_Updated_resume_re_q1or.svg"
import {
    faEnvelope,
    faKey,
    faServer,
    faUser,
    faUserCircle
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./Form.css"
import {Button} from "reactstrap";

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: {},
            errors: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;

        this.setState({
            input
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.validate()) {
            console.log(this.state)

            let input = {};
            input["fullname"] = "";
            input["username"] = "";
            input["email"] = "";
            input["password"] = "";
            input["confirm_password"] = "";
            input["role"]="";
            this.setState({input: input});

            alert('New Account created')
        }
    }

    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["fullname"]) {
            isValid = false;
            errors["fullname"] = "Please enter full name.";
        }

        if (!input["username"]) {
            isValid = false;
            errors["username"] = "Please enter username.";
        }

        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email address!";
        }
        if (typeof input["email"] !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
                isValid = false;
                errors["email"] = "Please enter valid email address.";
            }
        }
        if (!input["password"]) {
            isValid = false;
            errors["password"] = "Please enter password.";
        }

        if (!input["confirm_password"]) {
            isValid = false;
            errors["confirm_password"] = "Please enter confirm password.";
        }
        if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {

            if (input["password"] !== input["confirm_password"]) {
                isValid = false;
                errors["password"] = "Passwords don't match.";
            }
        }
        if (!input["role"]) {
            isValid = false;
            errors["role"] = "Please select the role.";
        }
        this.setState({
            errors: errors
        });
        return isValid;
    }

    render() {
        return (
            <div className="container">
                <div class="row py-5 mt-4 align-items-center">

                    <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
                        <img src={undraw_Updated_resume_re_q1or} alt="" class="img-fluid mb-3 d-none d-md-block"/>
                        <h1 style={{color: "#e42256", fontSize: "55px"}}>Create new account</h1>
                    </div>

                    <div className="col-md-7 col-lg-6 ml-auto">
                        <form onSubmit={this.handleSubmit}>
                            <div class="row">

                                <div class="input-group col-lg-12 mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                            <FontAwesomeIcon icon={faUserCircle}/>
                                        </span>
                                    </div>
                                    <input id="fullname"
                                           type="text"
                                           name="fullname"
                                           placeholder="Full Name"
                                           value={this.state.input.fullname}
                                           onChange={this.handleChange}
                                           class="form-control bg-white border-left-0 border-md"/><br/>
                                    <div className="text-danger">{this.state.errors.fullname}</div>
                                </div>

                                    <div className="input-group col-lg-12 mb-4">
                                        <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            <FontAwesomeIcon icon={faUser}/>
                                        </span>
                                        </div>
                                        <input id="username"
                                               type="text"
                                               name="username"
                                               placeholder="Username"
                                               value={this.state.input.username}
                                               onChange={this.handleChange}
                                               className="form-control bg-white border-left-0 border-md"/>
                                    </div>
                                <div className="text-danger">{this.state.errors.username}</div>


                                <div class="input-group col-lg-12 mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                            <FontAwesomeIcon icon={faEnvelope}/>
                                        </span>
                                    </div>
                                    <input id="email"
                                           type="email"
                                           name="email"
                                           placeholder="Email Address"
                                           value={this.state.input.email}
                                           onChange={this.handleChange}
                                           class="form-control bg-white border-left-0 border-md"/><br/>
                                    <div className="text-danger">{this.state.errors.email}</div>
                                </div>

                                <div class="input-group col-lg-12 mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                            <FontAwesomeIcon icon={faKey}/>
                                        </span>
                                    </div>
                                    <input id="password"
                                           type="password"
                                           name="password"
                                           placeholder="Password"
                                           value={this.state.input.password}
                                           onChange={this.handleChange}
                                           class="form-control bg-white border-left-0 border-md"/><br/>
                                    <div className="text-danger">{this.state.errors.password}</div>
                                </div>

                                <div class="input-group col-lg-12 mb-4">
                                    <div className="text-danger">{this.state.errors.password}</div>
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                            <FontAwesomeIcon icon={faKey}/>
                                        </span>
                                    </div>
                                    <input id="passwordConfirmation"
                                           type="password"
                                           name="passwordConfirmation"
                                           placeholder="Confirm Password"
                                           value={this.state.input.confirm_password}
                                           onChange={this.handleChange}
                                           class="form-control bg-white border-left-0 border-md"/><br/>
                                    <div className="text-danger justify-content-sm-end">{this.state.errors.confirm_password}</div>
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
                                        value={this.state.input.fullname}
                                        onChange={this.handleChange}
                                    </select><br/>
                                    <div className="text-danger justify-content-sm-end">{this.state.errors.role}</div>
                                </div>

                                <div class="form-group col-lg-12 mx-auto mb-0">
                                    <Button style={{background: "#e42256"}} block>
                                        <a href="/home" className="btn btn-block py-2">
                                            <span className="font-weight-bold"
                                                  style={{color: "#ffff"}}>Create account</span>
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