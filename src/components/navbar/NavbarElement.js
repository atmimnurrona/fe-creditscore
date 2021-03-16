import React, {useState} from "react";
import {NavbarText, NavbarBrand, Navbar, UncontrolledDropdown} from "reactstrap";
import {NavbarToggler} from "reactstrap";
import {Collapse} from "reactstrap";
import {Nav} from "reactstrap";
import {NavItem} from "reactstrap";
import {NavLink} from "reactstrap";
import "./NavbarElement.css";
import {DropdownToggle} from "reactstrap";
import {DropdownMenu} from "reactstrap";
import {DropdownItem} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCheck,
    faCheckDouble,
    faCopy,
    faHome,
    faListAlt,
    faMoneyCheck, faSignOutAlt,
    faUsers
} from "@fortawesome/free-solid-svg-icons";


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
                            <NavLink href="/home" style={{fontSize:"20px", color:"#FFffff"}}><FontAwesomeIcon icon={faHome} style={{color:"#FFffff"}}/> Home  </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret style={{fontSize:"20px", color:"#FFffff"}}>
                                <FontAwesomeIcon icon={faUsers} style={{color:"#FFffff"}}/>  Customer
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <NavLink href="/customer/form" style={{fontSize:"20px", color:"#e42256"}}>
                                        <FontAwesomeIcon icon={faCopy} style={{color:"#e42256"}}/>  Form Customer</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="/customer" style={{fontSize:"20px", color:"#e42256"}}>
                                        <FontAwesomeIcon icon={faListAlt} style={{color:"#e42256"}}/>  List Customer</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret style={{fontSize:"20px", color:"#FFffff"}}>
                                <FontAwesomeIcon icon={faMoneyCheck} style={{color:"#FFffff"}}/> Transaction
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <NavLink href="/form/transaction" style={{fontSize:"20px", color:"#e42256"}}>
                                        <FontAwesomeIcon icon={faCopy} style={{color:"#e42256"}}/>  Form Transaction</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="/list/transaction" style={{fontSize:"20px", color:"#e42256"}}>
                                        <FontAwesomeIcon icon={faListAlt} style={{color:"#e42256"}}/>  List Transaction</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem className="nav-item">
                            <NavLink href="/report" style={{fontSize:"20px", color:"#FFffff"}}>
                                <FontAwesomeIcon icon={faCheckDouble} style={{color:"#FFffff"}}/>  Report</NavLink>
                        </NavItem>
                        <NavItem className="nav-item" >
                            <NavLink href="/" style={{fontSize:"20px", color:"#FFffff"}}>
                                <FontAwesomeIcon icon={faSignOutAlt} style={{color:"#FFffff"}}/>  Log out</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header