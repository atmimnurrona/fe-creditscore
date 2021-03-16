import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import {Button} from "reactstrap";
import {faEdit, faInfoCircle, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';

const { SearchBar, ClearSearchButton } = Search;


const columns = [{
    dataField: 'idCustomer',
    text: 'ID Customer',
    sort: true,
    headerStyle: () => {
        return { width: "13%"};
    }
}, {
    dataField: 'typeCustomer',
    text: 'Type Customer',
    headerStyle: () => {
        return { width: "15%"};
    }
}, {
    dataField: 'idEmployee',
    text: 'ID Employee',
    sort: true,
    headerStyle: () => {
        return { width: "13%"};
    }
}, {
    dataField: 'loan',
    text: 'Loan',
    sort: true,
    headerStyle: () => {
        return { width: "10%"};
    }
}, {
    dataField: 'interestRate',
    text: 'Interest Rate',
    sort: true,
    headerStyle: () => {
        return { width: "13%"};
    }
}, {
    dataField: 'tenor',
    text: 'Tenor',
    headerStyle: () => {
        return {width: "7%"};
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

const defaultSorted = [{
    dataField: 'idCustomer',
    order: 'desc'
}];

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
                            <div className="float-right">
                                <SearchBar { ...props.searchProps } placeholder="search.."/>
                            </div>
                            <BootstrapTable { ...props.baseProps } pagination={ paginationFactory() } />
                        </div>
                    )
                }
            </ToolkitProvider>
        </div>
    )
}

export default ListTransaction;