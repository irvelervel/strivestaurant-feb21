import { Carousel, Col, Container, Row } from 'react-bootstrap'
import items from '../data/menu.json'

const Home = () => (
    <Container>
        <Row className="justify-content-center mt-3">
            <Col xs={12} md={6}>
                <Carousel>
                    {
                        items.map(item => (
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={item.image}
                                    alt={item.name}
                                />
                                <Carousel.Caption>
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                        )
                    }
                </Carousel>
            </Col>
        </Row>
    </Container>
)

export default Home