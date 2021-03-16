import React, {Component} from "react";
import ListTransaction from "./ListTransaction";
import Header from "../../../navbar/NavbarElement";

class ListTransactionContainer extends Component {

state = {
    users: [
        {
            idCustomer: 1,
            typeCustomer: "non-employee",
            idEmployee: 3,
            loan: 2000000,
            interestRate: 2,
            tenor: 3
        },
        {
            idCustomer: 2,
            typeCustomer: "permanent",
            idEmployee: 1,
            loan: 3000000,
            interestRate: 2,
            tenor: 3
        },
        {
            idCustomer: 3,
            typeCustomer: "temporary",
            idEmployee: 2,
            loan: 2000000,
            interestRate: 2,
            tenor: 3
        },
        {
            idCustomer: 4,
            typeCustomer: "permanent",
            idEmployee: 1,
            loan: 6000000,
            interestRate: 2,
            tenor: 3
        },
    ]
}

    render() {
        return (
            <div>
                <Header/>
                <div className="container" style={{marginTop:"10px"}}>
                    <h1 style={{fontSize:"5vw", color:"#e42556"}}>List Transaction</h1>
                    <ListTransaction users={this.state.users}/>
                </div>
            </div>
        );
    }
}

export default ListTransactionContainer;