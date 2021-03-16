import React from 'react'

import BootstrapTable from 'react-bootstrap-table-next';
import {Button, Col, Container, Row,} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faInfo, faTrash, faUserPlus} from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {Link} from "react-router-dom";

const {SearchBar} = Search;

const columns = [
    {
        dataField: 'no',
        text: 'No',
        sort: true,
        headerStyle: () => {
            return {width: "5%"};
        },
    }, {
        dataField: 'idCard',
        text: 'Id Card',
        sort: true
    }, {
        dataField: 'fullName',
        text: 'Full Name',
        sort: true
    }, {
        dataField: 'email',
        text: 'Email Address',
        sort: true
    }, {
        dataField: 'noHp',
        text: 'No. Hp',
        sort: true
    }, {
        dataField: 'address',
        text: 'Address',
        sort: true
    }, {
        dataField: 'link',
        text: 'Action',
        headerStyle: () => {
            return {width: "27%"};
        },
        formatter: (rowContent, row) => {
            return (
                <div>
                    <Link to={'customer/detail/' + row.no}>
                        <Button color='dark' className='mr-2'>
                            <FontAwesomeIcon icon={faInfo}/> Detail
                        </Button>
                    </Link>

                    <Link to={'customer/edit/' + row.no}>
                        <Button color='dark' className='mr-2'>
                            <FontAwesomeIcon icon={faEdit}/> Edit
                        </Button>
                    </Link>

                    <Button color='dark' className='mr-2'>
                        <FontAwesomeIcon icon={faTrash}/> Delete
                    </Button>
                </div>
            )
        }
    }
];

const defaultSorted = [{
    dataField: 'no',
    order: 'asc'
}];


const CustomerList = (props) => {
    return (
        <Container>

            <ToolkitProvider
                bootstrap4
                keyField='id'
                data={props.customers}
                columns={columns}
                defaultSorted={defaultSorted}
                search
            >
                {(props) => (
                    <div>
                        <Row>
                            <Col>
                                <Link to={'/customer/form'}>
                                    <Button color='dark' className='mr-2'>
                                        <FontAwesomeIcon icon={faUserPlus}/> Add
                                    </Button>
                                </Link>
                            </Col>

                            <Col>
                                <div className= 'float-right'>
                                    <SearchBar {...props.searchProps} placeholder="Search .." />
                                </div>
                            </Col>
                        </Row>
                        <BootstrapTable {...props.baseProps} pagination={ paginationFactory() } />
                    </div>
                )}
            </ToolkitProvider>
        </Container>
    );
};
export default CustomerList