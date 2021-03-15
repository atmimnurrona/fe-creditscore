import React, {Component} from "react";
import ListTransaction from "./ListTransaction";
import {Container} from "reactstrap";
import Header from "../../navbar/NavbarElement";

class ListContainer extends Component {

state = {
    users: [
        {
            id: 1,
            customersName: "atmim",
            email: "atmimm@gmail.cm",
            noHp: 76563422545,
            idCard: 3515184112960001,
            address: "sidoarjo",
            income: 7000000,
            outcome: 3000000,
            loan: 2000000,
            interestRate: 2,
            tenor: 3
        },
        {
            id: 2,
            customersName: "arinda",
            email: "arindakw@gmail.cm",
            noHp: 65656e45343,
            idCard: 3515184112960001,
            address: "lampung",
            income: 6000000,
            outcome: 4000000,
            loan: 3000000,
            interestRate: 2,
            tenor: 6
        },
        {
            id: 3,
            customersName: "eka",
            email: "ekanr@gmail.cm",
            noHp: 87896756,
            idCard: 3515184112960001,
            address: "mojokerto",
            income: 5000000,
            outcome: 2000000,
            loan: 1000000,
            interestRate: 2,
            tenor: 6
        },
        {
            id: 4,
            customersName: "wulan",
            email: "twuland@gmail.cm",
            noHp: 8786756454,
            idCard: 3515184112960001,
            address: "indramayu",
            income: 4000000,
            outcome: 3000000,
            loan: 2000000,
            interestRate: 2,
            tenor: 6
        }
    ]
}

    render() {
        return (
            <div style={{margin:"100px"}}>
                <Header/>
                    <h1 className="display-2">List Transaction</h1>
                    <ListTransaction users={this.state.users}/>
            </div>
        );
    }
}

export default ListContainer;