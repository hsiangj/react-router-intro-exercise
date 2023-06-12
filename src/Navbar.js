import {NavLink} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='Navbar'>
      <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/cheesepuff">Cheese Puff</NavLink>
      <NavLink exact to="/goldfish">Cheddar Goldfish</NavLink>
      <NavLink exact to="/combos">Combos</NavLink>
    </nav>
  )
}

export default Navbar;