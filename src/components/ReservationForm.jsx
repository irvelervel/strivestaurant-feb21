import React from 'react'
import { Button, Form } from 'react-bootstrap'

// name
// phone
// numberOfPersons
// smoking
// dateTime
// specialRequests

class ReservationForm extends React.Component {

    state = {
        reservation: {
            name: '',
            phone: '',
            numberOfPersons: 1,
            smoking: false,
            dateTime: '',
            specialRequests: ''
        }
    }

    render() {
        return (
            <>
                <h2>Book your table NOW!!</h2>
                <Form>
                    <Form.Group controlId="name">
                        <Form.Label>Your name</Form.Label>
                        <Form.Control
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            onChange={e => {
                                this.setState({
                                    reservation: {
                                        ...this.state.reservation, // I'm adding to the new reservation all the existing
                                        // properties already in the state
                                        name: e.target.value
                                    }
                                })
                            }}
                            value={this.state.reservation.name}
                        />
                    </Form.Group>

                    <Form.Group controlId="phone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            type="number"
                            id="phone"
                            placeholder="Enter your phone"
                            onChange={e => {
                                this.setState({
                                    reservation: {
                                        ...this.state.reservation, // I'm adding to the new reservation all the existing
                                        // properties already in the state
                                        phone: e.target.value
                                    }
                                })
                            }}
                            value={this.state.reservation.phone} />
                    </Form.Group>

                    <Form.Group controlId="smoking">
                        <Form.Check type="checkbox" id="smoking" label="Smoking?" value={this.state.reservation.smoking} />
                    </Form.Group>

                    <Form.Group controlId="numberOfPersons">
                        <Form.Label>How many people?</Form.Label>
                        <Form.Control id="numberOfPersons" as="select" value={this.state.reservation.numberOfPersons}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="dateTime">
                        <Form.Label>Date for the reservation</Form.Label>
                        <Form.Control type="datetime-local" id="dateTime" value={this.state.reservation.dateTime} />
                    </Form.Group>

                    <Form.Group controlId="specialRequests">
                        <Form.Label>Any special request?</Form.Label>
                        <Form.Control as="textarea" id="specialRequests" rows={5} value={this.state.reservation.specialRequests} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </>
        )
    }
}

export default ReservationForm