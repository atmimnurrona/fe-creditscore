import {Button, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Back = () => {
    return(
        <Row className="mb-2 ">
            <Col>
                <Link to={'/customer'}>
                    <Button>
                        <FontAwesomeIcon icon={faArrowLeft} />Back
                    </Button>
                </Link>
            </Col>
        </Row>
    )
}
export default Back