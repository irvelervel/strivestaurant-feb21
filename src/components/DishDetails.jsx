import React from 'react'
import items from '../data/menu.json'
// this component will list all the details about a dish


class DishDetails extends React.Component {

    componentDidMount = () => {
        let dishId = this.props.match.params.dishId
        let selectedDish = items.find(dish => dish.id.toString() === dishId)
        console.log(selectedDish)
    }

    render() {
        return <h1>HERE WILL COME THE DETAILS of the dish with id {this.props.match.params.dishId}</h1>
    }
}

export default DishDetails