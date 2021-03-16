import React from 'react';
import { InputGroup, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {InputGroupText} from "reactstrap";

const FormCustomer = (props) => {

    return (
        <div className="col-md-13">
            <div className="form form-container">
                <Form>
                    <FormGroup row>
                        <Label for="name" sm={2}>Customer's Name</Label>
                        <Col sm={10}>
                            <Input type="name" name="name" id="email" placeholder="input name" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="email" sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input type="email" name="email" id="email" placeholder="input email" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="username" sm={2}>Username</Label>
                        <Col sm={10}>
                            <Input type="username" name="username" id="username" placeholder="input username" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="idcardnumber" sm={2}>ID card number</Label>
                        <Col sm={10}>
                            <Input type="idcardnumber" name="idcardnumber" id="idcardnumber" placeholder="input id card number" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleText" sm={2}>Address</Label>
                        <Col sm={10}>
                            <Input type="textarea" name="text" id="exampleText" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="income" sm={2}>Income</Label>
                        <Col sm={10}>
                            <InputGroup>
                                <InputGroupText>Rp</InputGroupText>
                                <Input placeholder="income" min={0} max={100} type="number" step="1" />
                                <InputGroupText>.00</InputGroupText>
                            </InputGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="outcome" sm={2}>Outcome</Label>
                        <Col sm={10}>
                            <InputGroup>
                                <InputGroupText>Rp</InputGroupText>
                                <Input placeholder="outcome" min={0} max={100} type="number" step="1" />
                                <InputGroupText>.00</InputGroupText>
                            </InputGroup>
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
                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button>Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        </div>
    );
}

export default FormCustomer;

