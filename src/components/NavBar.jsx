import { Navbar, Nav } from 'react-bootstrap'

const MyCustomNavbar = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Strivestaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="#features">Menu</Nav.Link>
                <Nav.Link href="#pricing">Reservation</Nav.Link>
                <Nav.Link href="#pricing">Where we are</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default MyCustomNavbar