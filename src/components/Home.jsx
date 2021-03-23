import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import items from '../data/menu.json'
import DishComments from './DishComments'

// functional components are great to work with and they can use the props
// but if we want to use the state, we need a CLASS BASED component

class Home extends React.Component {

    state = {
        selectedDish: null
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-center mt-3">
                    <Col xs={12} md={6}>
                        <h1>Welcome to Strivestaurant</h1>
                        <p>The best dishes you can find on the web!</p>
                        <Carousel>
                            {
                                items.map(item => (
                                    <Carousel.Item key={item.id}>
                                        <img
                                            className="d-block w-100"
                                            src={item.image}
                                            alt={item.name}
                                            onClick={() => this.setState({
                                                selectedDish: item
                                            })}
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
                <Row>
                    <DishComments selectedDish={this.state.selectedDish} />
                </Row>
            </Container>
        )
    }
}

export default Home