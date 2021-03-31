import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import items from '../data/menu.json'
import DishComments from './DishComments'
// this component will list all the details about a dish


class DishDetails extends React.Component {

    state = {
        selectedDish: null
    }

    componentDidMount = () => {
        let dishId = this.props.match.params.dishId
        let selectedDish = items.find(dish => dish.id.toString() === dishId)
        if (selectedDish) {
            this.setState({
                selectedDish
            })
        }
        console.log(selectedDish)
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-center mt-5">
                    <Col xs={8}>
                        {this.state.selectedDish ? <Card style={{ width: '10rem' }}>
                            <Card.Img variant="top" src={this.state.selectedDish.image} />
                            <Card.Body>
                                <Card.Title>{this.state.selectedDish.name}</Card.Title>
                                <Card.Text>
                                    {this.state.selectedDish.description}
                                </Card.Text>
                            </Card.Body>
                        </Card> : <h1>LOADING...</h1>}
                    </Col>
                    <Col xs={8}>
                        <DishComments selectedDish={this.state.selectedDish} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default DishDetails