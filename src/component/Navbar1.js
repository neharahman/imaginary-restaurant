import react from 'react';
import { Navbar,Container, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
const Navbar1 = () =>{
    return(
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className="display-1 b" href="#home" style={{fontFamily: 'Tangerine'}}>Kalpanik Rasoi</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#menu">Menu</Nav.Link>
                <Nav.Link className="pl-5"href="#sign-up">signup</Nav.Link>
                <Nav.Link href="#sign-in">signin</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    )

}
export default Navbar1;