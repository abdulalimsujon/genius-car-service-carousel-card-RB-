import { signOut } from 'firebase/auth';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'

const Header = () => {


    const [user] = useAuthState(auth);
    const hundleSignOut = () => {
        signOut(auth);
    }

    return (
        <>

            <Navbar collapseOnSelect expand="lg" bg="primary" sticky='top' variant="dark">

                <Container>

                    <Navbar.Brand as={Link} to="/">
                        <img height={30} src={logo} alt=''></img>
                    </Navbar.Brand>


                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link href="#experts">Exparts</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>

                            {
                                user ?

                                    <button onClick={hundleSignOut}>Sign out</button>

                                    :

                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </>
    );
};

export default Header;