import { ListGroup } from 'react-bootstrap'
import React from 'react'

class DishComments extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            test: false
        }
    }
    componentDidMount() {
        setTimeout(() => { this.setState({ test: !this.state.test }) }, 1000)
    }

    render() {
        return (
            <>
                {!this.props.selectedDish && <h3>Nothing yet</h3>}
                { this.props.selectedDish && <ListGroup>
                    <h2>Comments for {this.props.selectedDish.name}</h2>
                    {
                        this.props.selectedDish.comments.map(c => (
                            <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
                        ))
                    }
                </ListGroup>}

            </>
        )
    }

}


export default DishComments

// mapping props.selectedDish.comments