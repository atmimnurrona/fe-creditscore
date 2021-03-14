import {Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {CardImg} from "react-bootstrap";
import React from "react";
import undraw_Resume_re_hkth from '../../images/undraw_Resume_re_hkth.svg';
import undraw_No_data_re_kwbl from '../../images/undraw_No_data_re_kwbl.svg';
import undraw_selection_re_ycpo from '../../images/undraw_selection_re_ycpo.svg';
import {CardBody} from "reactstrap";
import {CardTitle} from "reactstrap";
import {Card} from "reactstrap";
import {Link} from "react-router-dom";

const Cardboxtransaction = (props) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={3}>
                        <Link to={'/form'}>
                            <Card>
                                <CardImg
                                    alt="Card image"
                                    className="n-logo"
                                    src={undraw_Resume_re_hkth}
                                    height="250px"
                                    width="300px"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">Form Transaction</CardTitle>
                                </CardBody>
                            </Card>
                        </Link>
                    </Col>
                    <Col md={3}>
                        <Link to={'/list'}>
                            <Card>
                                <CardImg
                                    alt="Card image"
                                    className="n-logo"
                                    src={undraw_selection_re_ycpo}
                                    height="250px"
                                    width="300px"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">List Transaction</CardTitle>
                                </CardBody>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Cardboxtransaction;