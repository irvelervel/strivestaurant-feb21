import { Navbar, Nav } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'

const NavBar = (props) => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/">
            <Navbar.Brand>{props.title} - Strive for food</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                {props.links.map(link => (
                    <Link
                        className={link === 'Home' && props.location.pathname === '/' ? 'nav-link active' : props.location.pathname === '/' + link.toLowerCase() ? 'nav-link active' : 'nav-link'}
                        to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} >
                        {link}
                    </Link>
                ))}
                {/* <Link className={props.location.pathname === '/' ? 'nav-link active' : 'nav-link'} to="/">
                    Homepage
                </Link>
                <Link className={props.location.pathname === '/menu' ? 'nav-link active' : 'nav-link'} to="/menu">
                    Menu
                </Link>
                <Link
                    className={props.location.pathname === '/reservations' ? 'nav-link active' : 'nav-link'}
                    to="/reservations">
                    Reservations
                </Link> */}
            </Nav>
        </Navbar.Collapse>
    </Navbar >
)

export default withRouter(NavBar)
// withRouter gives the component you pass as the parameter history, location and match without the need
// of wrapping it into a Route component

// functional components are a touch faster than class based ones
