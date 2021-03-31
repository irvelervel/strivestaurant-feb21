import items from '../data/menu.json'
import { Container, Col, Row, Badge, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => (
    <Container>
        {items.map(dish => (
            <Row className="justify-content-center">
                <Col md={8}>
                    <Link to={'/details/' + dish.id}><Image src={dish.image} /></Link>
                    <h4>{dish.name}
                        <Badge variant="yellow">{dish.price}</Badge>
                        <Badge variant="danger">{dish.label}</Badge>
                    </h4>
                    {dish.description}
                </Col>
            </Row>
        ))}
    </Container>
)

export default Menu