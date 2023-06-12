import './App.css';
import { BrowserRouter, Route, Link, NavLink} from 'react-router-dom';
import VendingMachine from './VendingMachine';
import CheesePuff from './CheesePuff';
import Goldfish from './Goldfish';
import Combos from './Combos';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Navbar />
        <Route exact path='/'>
          <VendingMachine />
        </Route>
        <Route exact path='/cheesepuff'>
          <CheesePuff />
        </Route>
        <Route exact path='/goldfish'>
          <Goldfish />
        </Route>
        <Route exact path='/combos'>
          <Combos />
        </Route>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
