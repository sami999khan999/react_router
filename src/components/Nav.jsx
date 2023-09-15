import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h1>React Router</h1>
      <div>
        <NavLink end to="/">
          Home
        </NavLink>
        <NavLink end to="/about">
          About
        </NavLink>
        <NavLink end to="/theater">
          Theater
        </NavLink>
        <NavLink end to="/contact">
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
