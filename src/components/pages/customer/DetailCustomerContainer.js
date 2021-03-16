import React, {Component} from 'react'
import {Container} from "react-bootstrap";
import Back from "./component/BackComponent";

export default class DetailCustomerContainer extends Component {
    render() {
        return(
            <Container>
                <Back/>
                <h1 >Detail Customer</h1>
            </Container>
        )
    }
}