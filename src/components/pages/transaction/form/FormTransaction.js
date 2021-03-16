import React from 'react';
import { InputGroup, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {InputGroupText} from "reactstrap";
import './FormTransaction.css'

const FormTransaction = (props) => {
    return (

        <div className="col-md-13">
            <div className="form">
                <Form>
                    <FormGroup row>
                        <Label for="idCustomer" sm={2}>ID Customer</Label>
                        <Col sm={10}>
                            <Input type="number" name="id" id="id" placeholder="input ID Customer" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="select" sm={2}>Type of customer</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" id="select">
                                <option>1. Permanent Employee</option>
                                <option>2. Temporary Employee</option>
                                <option>3. Not an Employee</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="idEmplyee" sm={2}>ID Employee</Label>
                        <Col sm={10}>
                            <Input type="number" name="id" id="id" placeholder="input ID Employee" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="loan" sm={2}>Loan</Label>
                        <Col sm={10}>
                            <Input type="number" name="loan" id="loan" placeholder="input loan" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="interestRate" sm={2}>Interest Rate</Label>
                        <Col sm={10}>
                            <InputGroup>
                                <Input placeholder="interest rate" min={0} max={100} type="number" step="1" />
                                <InputGroupText>%</InputGroupText>
                            </InputGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="select" sm={2}>Tenorr</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" id="select">
                                <option>3 months</option>
                                <option>6 months</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button className="float-right" style={{background:"#e42256"}}>Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        </div>

    );
}

export default FormTransaction;