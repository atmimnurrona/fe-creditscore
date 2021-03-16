import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import {Col, Button, Row} from "reactstrap";
import {faEdit, faInfoCircle, faTrash, faUserPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { connect } from 'react-redux'

const { SearchBar } = Search;

const columns = [{
    dataField: 'id',
    text: 'ID',
    sort: true,
    headerStyle: () => {
        return { width: "5%"};
    }
}, {
    dataField: 'idCustomer',
    text: 'ID Customer',
    sort: true,
    headerStyle: () => {
        return { width: "12%"};
    }
}, {
    dataField: 'typeCustomer',
    text: 'Type Customer',
    headerStyle: () => {
        return { width: "14%"};
    }
}, {
    dataField: 'idEmployee',
    text: 'ID Employee',
    sort: true,
    headerStyle: () => {
        return { width: "12%"};
    }
}, {
    dataField: 'loan',
    text: 'Loan',
    sort: true,
    headerStyle: () => {
        return { width: "9%"};
    }
}, {
    dataField: 'interestRate',
    text: 'Interest Rate',
    sort: true,
    headerStyle: () => {
        return { width: "12%"};
    }
}, {
    dataField: 'tenor',
    text: 'Tenor',
    headerStyle: () => {
        return {width: "6%"};
    }
}, {
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
        return (
            <div>
                <Button href={"/detail/transaction/" + row.id} color="dark" className="mr-2">
                    <FontAwesomeIcon icon={faInfoCircle} /> Detail
                </Button>
                <Button href={"/edit/transaction/" + row.id} color="dark" className="mr-2">
                    <FontAwesomeIcon icon={faEdit} /> Edit
                </Button>
                <Button color="dark" className="mr-2">
                    <FontAwesomeIcon icon={faTrash} /> Delete
                </Button>
            </div>
        )
    }
}];

const defaultSorted = [{
    dataField: 'idCustomer',
    order: 'desc'
}];

const mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}

const ListTransaction = (props) => {
    return(
        <div>
            <ToolkitProvider
                bootstrap4
                keyField='id'
                data={ props.users }
                columns={ columns }
                defaultSorted={ defaultSorted }
                search
            >
                {
                    props => (
                        <div>
                            <Row>
                                <Col>
                                    <Button href={"/form/transaction/"} color="dark" className="mr-2">
                                        <FontAwesomeIcon icon={faUserPlus} /> Add
                                    </Button>
                                </Col>
                                <Col>
                                    <div className="float-right">
                                        <SearchBar { ...props.searchProps } placeholder="search.."/>
                                    </div>
                                </Col>
                            </Row>
                            <BootstrapTable { ...props.baseProps } pagination={ paginationFactory() } />
                        </div>
                    )
                }
            </ToolkitProvider>
        </div>
    )
}

export default connect(mapStateToProps, null) (ListTransaction);