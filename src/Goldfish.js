import { Link } from "react-router-dom";
import goldfishImg from "./Goldfish.jpeg";

const Goldfish = () => {
  return (
    <div>
      <h3>Cheddar Goldfish</h3>
      <img
        src={goldfishImg}
        alt="Cheddar Goldfish"
      />
      <h3><Link to='/'>Go back</Link></h3>
    </div>
  );
}

export default Goldfish;
