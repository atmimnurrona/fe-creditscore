import {Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {CardImg} from "react-bootstrap";
import React from "react";
import undraw_Resume_re_hkth from '../../images/undraw_Resume_re_hkth.svg';
import undraw_No_data_re_kwbl from '../../images/undraw_No_data_re_kwbl.svg';
import undraw_selection_re_ycpo from '../../images/undraw_selection_re_ycpo.svg';
import {Button, CardBody} from "reactstrap";
import {CardTitle} from "reactstrap";
import {Card} from "reactstrap";
import {Link} from "react-router-dom";
import undraw_data_processing_yrrv from "../../images/undraw_data_processing_yrrv.svg";
import undraw_Hiring_re_yk5n from "../../images/undraw_Hiring_re_yk5n.svg";

const Cardboxtransaction = (props) => {
    return (
        <div className="container">
            <div className="card-columns">
                <div className="card">
                    <div className="card-body text-center">
                        <CardImg
                            alt="Card image"
                            className="n-logo"
                            src={undraw_data_processing_yrrv}
                            height="250px"
                            width="300px"
                        />
                        <CardBody>
                            <Button href="/form" size="lg" block style={{background:"#E42256", borderBlockColor:"#FFB8B8", fontSize:"20px"}}>Form Customer</Button>
                            <Button href="/list" size="lg" block style={{background:"#E42256", borderBlockColor:"#FFB8B8", fontSize:"20px"}}>List Customer</Button>
                        </CardBody>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body text-center">
                        <CardImg
                            alt="Card image"
                            className="n-logo"
                            src={undraw_selection_re_ycpo}
                            height="250px"
                            width="300px"
                        />
                        <CardBody>
                            <Button size="lg" block style={{background:"#E42256", borderBlockColor:"#FFB8B8", fontSize:"20px"}}>Add Transaction</Button>
                            <Button size="lg" block style={{background:"#E42256", borderBlockColor:"#FFB8B8", fontSize:"20px"}}>List Transaction</Button>
                        </CardBody>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body text-center">
                        <CardImg
                            alt="Card image"
                            src={undraw_Hiring_re_yk5n}
                            height="250px"
                            width="300px"
                        />
                        <CardBody>
                            <Button size="lg" block style={{background:"#E42256", borderBlockColor:"#FFB8B8", fontSize:"20px"}}>Report Transaction</Button>
                        </CardBody>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cardboxtransaction;