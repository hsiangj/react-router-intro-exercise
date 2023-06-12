import { Link } from "react-router-dom";
import cheesePuffsImg from "./CheesePuffs.jpeg";

const CheesePuff = () => {
  return (
    <div>
      <h3>Cheese Puff</h3>
      <img
        src={cheesePuffsImg}
        alt="Cheese Puffs"
      />
      <h3><Link to='/'>Go back</Link></h3>
    </div>
  );
}

export default CheesePuff;
