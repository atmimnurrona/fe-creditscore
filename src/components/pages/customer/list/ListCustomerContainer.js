import React, {Component} from "react";
import CustomerList from "./CustomerList";
import Header from "../../../navbar/NavbarElement";

export default class ListCustomerContainer extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="container" style={{marginTop:"10px"}}>
                    <h1 style={{fontSize:"5vw", color:"#e42556"}}>List Customer</h1>
                    <CustomerList/>
                </div>
            </div>
        )
    }
}