import React, {useState} from "react";
import {NavbarText, Dropdown, NavbarBrand, Navbar, UncontrolledDropdown} from "reactstrap";
import {NavbarToggler} from "reactstrap";
import {Collapse} from "reactstrap";
import {Nav} from "reactstrap";
import {NavItem} from "reactstrap";
import {NavLink} from "reactstrap";
import "./NavbarElement.css";
import {DropdownToggle} from "reactstrap";
import {DropdownMenu} from "reactstrap";
import {DropdownItem} from "reactstrap";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="navbar" light expand="sm">
                <NavbarBrand href="/">OK'Finance</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem className="nav-item">
                            <NavLink href="/" style={{fontSize:"20px", color:"#FFffff"}}>Home</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret style={{fontSize:"20px", color:"#FFffff"}}>
                                Customer
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <NavLink href="/form/customer" style={{fontSize:"20px", color:"#e42256"}}>Form Customer</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="/list/customer" style={{fontSize:"20px", color:"#e42256"}}>List Customer</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret style={{fontSize:"20px", color:"#FFffff"}}>
                                Transaction
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <NavLink href="/form/transaction" style={{fontSize:"20px", color:"#e42256"}}>Form Transaction</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="/list/transaction" style={{fontSize:"20px", color:"#e42256"}}>List Transaction</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem className="nav-item">
                            <NavLink href="/report" style={{fontSize:"20px", color:"#FFffff"}}>Report</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink href="/" style={{fontSize:"20px", color:"#FFffff"}}>Log out</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header