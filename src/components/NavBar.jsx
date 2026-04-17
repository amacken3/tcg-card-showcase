import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink to="/shop">Shop</NavLink>
      {" | "}
      <NavLink to="/">Home</NavLink>
      {" | "}
      <NavLink to="/admin">Admin</NavLink>
    </nav>
  );
}

export default NavBar;