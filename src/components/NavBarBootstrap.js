import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Titulo } from './Titulo';
import { CardWidget } from './CardWidget';

export const NavBarBootstrap = () => {
    return (
        <>
            <Navbar expand="xxxl" className="navbar navBarBg">
                <Container>
                    <Navbar.Brand href="#home" className='home'>
                        <Titulo />
                    </Navbar.Brand>
                    {/* CardWidget */}
                    <CardWidget />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='fs-2' href="#link">Juegos 64bits</Nav.Link>
                            <Nav.Link className='fs-2' href="#link">Revistas Retro</Nav.Link>
                            <Nav.Link className='fs-2' href="#link">Figuras</Nav.Link>
                            <NavDropdown className='fs-2' title="Consolas Retro" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">
                                    PlayStation
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Xbox
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Nintendo
                                </NavDropdown.Item>
                                {/* <NavDropdown.Divider /> */}
                                <NavDropdown.Item href="#action/3.4">
                                    Portatiles
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
