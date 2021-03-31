import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Reservations from './components/Reservations'
import DishDetails from './components/DishDetails'
import Menu from './components/Menu'

// Router will be the main wrapper for your Routes

function App() {
  return (
    <div>
      <Router>
        <NavBar title="Strivestaurant" links={['Home', 'Menu', 'Reservations']} />
        <Route path="/" exact component={Home} />
        {/* / is called root */}
        {/* you can use the render prop to pass you own props to the component inside the route */}
        {/* but this will exclude the router props automatically passed down to the Route */}
        {/* if you want to mix them, just pass the router props as the parameter to the render function */}
        {/* and then you can spread them over your component */}
        <Route path="/reservations" exact render={(routerProps) => <Reservations {...routerProps} title="Stefano" />} />
        <Route path="/details/:dishId" component={DishDetails} />
        {/* this is a dynamic route */}
        <Route path="/menu" component={Menu} />
        {/* HOC High order component */}
      </Router>
    </div>
  )
}

export default App
