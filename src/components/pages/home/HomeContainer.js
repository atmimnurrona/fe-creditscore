import React, {Component} from "react";
import Cardbox from "./Cardbox";
import {Button, Jumbotron} from "reactstrap";
import './HomeContainer.css';
import Image from "../../images/undraw_Code_thinking_re_gka2.svg"
import Header from "../../navbar/NavbarElement";

class HomeContainer extends Component {
    render() {
        return (

            <div>
                <Header/>
                <div className="jumbotron">
                    <Jumbotron className="jumbotron-fluid">
                        <h1 className="display-2">Hello, Admin!</h1>
                        <p className="display-3">What do you want to do?</p>
                        <Button href="/add/account">New Account</Button>
                        <img src = {Image} alt="image" className="img-fluid float-right" style={{marginTop:"-300px"}}/>
                    </Jumbotron>
                </div>
                <Cardbox/>
            </div>
        );
    }
}

export default HomeContainer;