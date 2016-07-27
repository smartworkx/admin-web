import React from "react";
import {Link} from "react-router";
import {Navbar, Nav, NavItem} from "react-bootstrap";

export default function Main({children}) {
    return (
        <div>
            <header>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Home</Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#"><Link to="/vatReport">Vat report</Link></NavItem>
                        <NavItem eventKey={2} href="#"><Link to="/journalize">Journalize</Link></NavItem>
                        <NavItem eventKey={3} href="#"><Link to="/importFfs">Import financial facts</Link></NavItem>
                    </Nav>
                </Navbar>
            </header>
            <div style={{marginTop: '1.5em'}}>{children}</div>
        </div>
    )
}