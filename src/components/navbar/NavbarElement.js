import React, {useState} from "react";
import Dropdown, {NavbarBrand, Navbar} from "reactstrap";
import {NavbarToggler} from "reactstrap";
import {Collapse} from "reactstrap";
import {Nav} from "reactstrap";
import {NavItem} from "reactstrap";
import {NavLink} from "reactstrap";
import {NavbarText} from "reactstrap";
import "./NavbarElement.css";


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
                            <NavLink href="/" style={{fontSize:"30px", color:"#FFB8B8"}}>Home</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink href="/transaction" style={{fontSize:"30px", color:"#FFB8B8"}}>Transaction</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink href="/report" style={{fontSize:"30px", color:"#FFB8B8"}}>Report</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        <NavItem style={{listStyleType: "none"}}>
                            <NavLink href="/" style={{fontSize:"30px", color:"#FFB8B8"}}>Log out</NavLink>
                        </NavItem>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header