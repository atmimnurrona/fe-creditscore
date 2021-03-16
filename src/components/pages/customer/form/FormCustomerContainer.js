import React, {Component} from 'react'
import Header from "../../../navbar/NavbarElement";
import FormCustomer from "./FormCustomer";

export default class FormCustomerContainer extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="container" style={{marginTop:"10px"}}>
                    <h1 style={{fontSize:"5vw", color:"#e42556"}}>Form Customer </h1>
                    <FormCustomer/>
                </div>
            </div>
        )
    }
}