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
                    <Jumbotron className="jumbotron-fluid" style={{height:"200px"}}>
                        <Row style={{marginTop:"-70px"}}>
                            <Col>
                                <h1 className="display-2" style={{color: "#e42256", fontSize:"80px", marginLeft:"100px"}}>Hello, Admin!</h1>
                                <p className="display-3" style={{fontSize:"40px", marginLeft:"100px"}}>What do you want to do?</p>
                                <Button href="/add/account" style={{background:"#e42256", marginLeft:"100px", marginTop:"30px"}}><FontAwesomeIcon icon={faPlus}/> New Account</Button>
                            </Col>
                            <Col>
                                <img src = {Image} alt="image" className="img-fluid float-right"/>
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