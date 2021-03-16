import React, {Component} from "react";
import CustomerList from "./CustomerList";
import Header from "../../../navbar/NavbarElement";


export default class ListCustomerContainer extends Component {
    state = {
        title : 'Customer',
        customers : [
            {
                no: 1,
                idCard: "197856789",
                fullName: "Arlin",
                email: "b@gmail.com",
                noHp: "0867654717",
                address: "Jakarta"
            },
            {
                no: 2,
                idCard: "123123459",
                fullName: "Ara",
                email: "c@gmail.com",
                noHp: "08788617",
                address: "Jakarta"
            },
            {
                no: 3,
                idCard: "123456789",
                fullName: "Arlinda",
                email: "a@gmail.com",
                noHp: "0867538617",
                address: "Jakarta"
            },
            {
                no: 4,
                idCard: "123456789",
                fullName: "Arlinda",
                email: "a@gmail.com",
                noHp: "0867538617",
                address: "Jakarta"
            },
            {
                no: 5,
                idCard: "123456789",
                fullName: "Arlinda",
                email: "a@gmail.com",
                noHp: "0867538617",
                address: "Jakarta"
            },
            {
                no: 6,
                idCard: "123456789",
                fullName: "Arlinda",
                email: "a@gmail.com",
                noHp: "0867538617",
                address: "Jakarta"
            },
            {
                no: 7,
                idCard: "123456789",
                fullName: "Arlinda",
                email: "a@gmail.com",
                noHp: "0867538617",
                address: "Jakarta"
            },
            {
                no: 8,
                idCard: "123456789",
                fullName: "Arlinda",
                email: "a@gmail.com",
                noHp: "0867538617",
                address: "Jakarta"
            },
            {
                no: 9,
                idCard: "123456789",
                fullName: "Arlinda",
                email: "a@gmail.com",
                noHp: "0867538617",
                address: "Jakarta"
            },
            {
                no: 10,
                idCard: "123456789",
                fullName: "Arlinda",
                email: "a@gmail.com",
                noHp: "0867538617",
                address: "Jakarta"
            },
            {
                no: 11,
                idCard: "123456789",
                fullName: "Arlinda",
                email: "a@gmail.com",
                noHp: "0867538617",
                address: "Jakarta"
            },
        ],
    };

    render() {
        return(
            <div>
                <Header/>
                <CustomerList customers={this.state.customers}/>
            </div>
        )
    }

}

function indexN(cell, row, enumObject, index) {
    return (<div>{index+1}</div>)
}