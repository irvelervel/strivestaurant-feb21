const DishComments = (props) => <h1>YOU CLICKED ON {props.selectedDish ? props.selectedDish.name : 'NOTHING YET'}</h1>

export default DishComments

// mapping props.selectedDish.comments