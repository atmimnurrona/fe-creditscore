import React, {Component} from "react";
import Cardbox from "./Cardbox";
import {Row, Button, Jumbotron, Col} from "reactstrap";
import './HomeContainer.css';
import Image from "../../images/undraw_Code_thinking_re_gka2.svg"
import Header from "../../navbar/NavbarElement";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class HomeContainer extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="jumbotron">
                    <Jumbotron className="jumbotron-fluid" style={{height:"30vh"}}>
                        <Row style={{marginTop:"-5%"}}>
                            <Col>
                                <h1 style={{color: "#e42256", fontSize:"5vw", marginLeft:"15%"}}>Hello, Admin!</h1>
                                <p style={{fontSize:"2vw", marginLeft:"15%"}}>What do you want to do?</p>
                                <Button href="/add/account" style={{background:"#e42256", marginLeft:"15%", marginTop:"5%"}}><FontAwesomeIcon icon={faPlus}/> New Account</Button>
                            </Col>
                            <Col>
                                <img src = {Image} alt="image" className="img-fluid float-right" style={{marginRight:"15%"}}/>
                            </Col>
                        </Row>
                    </Jumbotron>
                </div>
                <Cardbox/>
            </div>
        );
    }
}

export default HomeContainer;