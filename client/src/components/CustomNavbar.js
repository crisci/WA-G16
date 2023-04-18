
import { Navbar, Container, Nav } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

export function CustomNavbar(props) {
    
    const navigate = useNavigate();
    
    return (
        <Navbar bg="dark" variant="dark" className="navbar navbar-dark bg-primary fixed-top">
            <Container fluid style={{ paddingLeft: "1.2rem", paddingRight: "1.2rem" }}>
                <Nav.Link className="d-sm-block navbar-brand" onClick={() => {navigate('/')}}>Tickets</Nav.Link>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            </Container>
        </Navbar>
    )
}