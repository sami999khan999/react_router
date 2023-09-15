import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h1>React Router</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Nav;
