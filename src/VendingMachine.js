import { Link, NavLink} from 'react-router-dom';
import CheesePuff from './CheesePuff';
import Goldfish from './Goldfish';
import Combos from './Combos';

const VendingMachine = () => {
  return (
    <div>
      <h1>Cheesy vending machine</h1>
      <p>Which cheesy goodness would you like?</p>
      <h3><Link to ='/cheesepuff'>Cheese Puff</Link></h3>
      <h3><Link to ='/goldfish'>Cheddar Goldfish</Link></h3>
      <h3><Link to ='/combos'>Combos</Link></h3>
    </div>
    
  )
}


export default VendingMachine;