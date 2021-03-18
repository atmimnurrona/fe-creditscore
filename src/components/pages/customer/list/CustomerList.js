import React, {useEffect, useState} from 'react'
import {Button, Col, Container, Row,} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faInfo, faTrash, faUserPlus} from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {ButtonGroup, Spinner} from "reactstrap";
import {findAll} from "../../../../action/customerAction";
import ContainerError from "../../../containers/ContainerError";
import {PaginationButton} from "../../../button";

const {SearchBar} = Search;

const defaultSorted = [{
    dataField: 'no',
    order: 'asc'
}];

function CustomerList({ isLoading, customers, findAll, error, size, total, currentPage}) {
    //Pagination
    const [pageParam, setPageParam] = useState(0);
    const [sizeParam, setSizeParam] = useState(10);
    const totalPage = Math.ceil(total / size);

    const onReload = () => {
        findAll(
            { page: pageParam, size: sizeParam }
        )};

    useEffect(onReload, []);

    useEffect(onReload, [findAll, pageParam, sizeParam]);

    const columns = [
        {
            dataField: 'no',
            text: 'No',
            sort: true,
            headerStyle: () => {
                return {width: "5%"};
            },
        }, {
            dataField: 'idNumber',
            text: 'ID Card',
            sort: true
        }, {
            dataField: 'name',
            text: 'Full Name',
            sort: true
        }, {
            dataField: 'email',
            text: 'Email Address',
            sort: true
        }, {
            dataField: 'employeeType',
            text: 'Employee Type',
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

    console.log(findAll)

    return (
        <ContainerError error={error}>
        <Container>
            {
                console.log(findAll)
            }
            {!isLoading ? customers && (
                <ToolkitProvider
                    bootstrap4
                    keyField='id'
                    data={customers}
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
                            <Row>
                                <Col>
                                    <PaginationButton currentPage={currentPage} setPage={setPageParam} totalPage={totalPage}/>
                                </Col>
                                <Col>
                                    <div className="float-right" >
                                        <ButtonGroup size="md">
                                            <Button onClick={() => { setSizeParam(1) }} color="primary"> 1
                                            </Button>
                                            <Button onClick={() => { setSizeParam(2) }} color="primary"> 2
                                            </Button>
                                            <Button onClick={() => { setSizeParam(3) }} color="primary"> 3
                                            </Button>
                                        </ButtonGroup>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    )}
                </ToolkitProvider>
            ) : (
                <div className="text-center">
                    {customers.error ? (
                        <h4>{customers.error}</h4>
                    ) : (
                        <Spinner color="dark" />
                    )}
                </div>
            )}

        </Container>
        </ContainerError>
    );
}



const mapStateToProps = (state) => {
    return {
        customers: state.findAllCustomer.data || [],
        isLoading: state.findAllCustomer.isLoading,
        error: state.findAllCustomer.error,
        size: state.findAllCustomer.pagination.size,
        total: state.findAllCustomer.pagination.total,
        currentPage: state.findAllCustomer.pagination.page
    };
};


const mapDispatchToProps = { findAll }

export default connect(mapStateToProps, mapDispatchToProps) (CustomerList);