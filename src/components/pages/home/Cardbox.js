import {Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {CardImg} from "react-bootstrap";
import React from "react";
import undraw_Hiring_re_yk5n from '../../images/undraw_Hiring_re_yk5n.svg';
import undraw_selection_re_ycpo from '../../images/undraw_selection_re_ycpo.svg';
import undraw_data_processing_yrrv from '../../images/undraw_data_processing_yrrv.svg';
import {Button, CardBody} from "reactstrap";
import {Card} from "reactstrap";
import {Link} from "react-router-dom";

const Cardbox = (props) => {
    return (
        <div>
            <Container className="container-fluid">
                <div className="card-home">
                    <Col md={6}>
                        <Link to={'/form'}>
                            <Card body>
                                <CardImg
                                    alt="Card image"
                                    className="n-logo"
                                    src={undraw_data_processing_yrrv}
                                    height="250px"
                                    width="300px"
                                />
                                <CardBody>
                                    <Button size="lg" block style={{background:"#E42256", borderBlockColor:"#FFB8B8", fontSize:"30px"}}>Form Transaction</Button>
                                </CardBody>
                            </Card>
                    </Link>
                    </Col>
                    <Col md={6}>
                        <Link to={'/list'}>
                            <Card body>
                                <CardImg
                                    alt="Card image"
                                    className="n-logo"
                                    src={undraw_selection_re_ycpo}
                                    height="250px"
                                    width="300px"
                                />
                                <CardBody>
                                    <Button size="lg" block style={{background:"#E42256", borderBlockColor:"#FFB8B8", fontSize:"30px"}}>List Transaction</Button>
                                </CardBody>
                            </Card>
                        </Link>
                    </Col>
                    <Col md={6}>
                        <Link to={'/report'}>
                            <Card body>
                                <CardImg
                                    alt="Card image"
                                    src={undraw_Hiring_re_yk5n}
                                    height="250px"
                                    width="300px"
                                />
                                <CardBody>
                                    <Button size="lg" block style={{background:"#E42256", borderBlockColor:"#FFB8B8", fontSize:"30px"}}>Report Transaction</Button>
                                </CardBody>
                            </Card>
                        </Link>
                    </Col>
                </div>
            </Container>
        </div>
    );
};

export default Cardbox;