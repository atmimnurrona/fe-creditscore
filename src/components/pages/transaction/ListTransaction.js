import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import {Button} from "reactstrap";
import {faEdit, faInfoCircle, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const columns = [{
    dataField: 'id',
    text: 'No.',
    headerStyle: () => {
        return { width: "3%"};
    }
}, {
    dataField: 'customersName',
    text: 'Cuctomers Name'
}, {
    dataField: 'email',
    text: 'Email'
}, {
    dataField: 'noHp',
    text: 'HP',
    headerStyle: () => {
        return { width: "7%"};
    }
}, {
    dataField: 'idCard',
    text: 'ID Card',
    headerStyle: () => {
        return { width: "7%"};
    }
}, {
    dataField: 'address',
    text: 'Address'
}, {
    dataField: 'income',
    text: 'Income',
    headerStyle: () => {
        return { width: "7%"};
    }
}, {
    dataField: 'outcome',
    text: 'Outcome',
    headerStyle: () => {
        return { width: "7%"};
    }
}, {
    dataField: 'loan',
    text: 'Loan',
    headerStyle: () => {
        return { width: "7%"};
    }
}, {
    dataField: 'interestRate',
    text: 'Interest Rate',
    headerStyle: () => {
        return { width: "6%"};
    }
}, {
    dataField: 'tenor',
    text: 'Tenor',
    headerStyle: () => {
        return { width: "4%"};
    }
}, {
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
        return (
            <div>
                <Button color="dark" className="mr-2">
                    <FontAwesomeIcon icon={faInfoCircle} /> Detail
                </Button>
                <Button color="dark" className="mr-2">
                    <FontAwesomeIcon icon={faEdit} /> Edit
                </Button>
                <Button color="dark" className="mr-2">
                    <FontAwesomeIcon icon={faTrash} /> Delete
                </Button>
            </div>
        )
    }
}];

const ListTransaction = (props) => {
    return(
        <div>
            <BootstrapTable keyField='id' data={ props.users } columns={ columns } />
        </div>
    )
}

export default ListTransaction;