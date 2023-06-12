import { Link } from "react-router-dom";
import combosImg from "./Combos.jpeg";

const Combos = () => {
  return (
    <div>
      <h3>Combos</h3>
      <img
        src={combosImg}
        alt="Combos"
      />
      <h3><Link to='/'>Go back</Link></h3>
    </div>
  );
}

export default Combos;
