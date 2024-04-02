import { Nav, NavLink, NavMenu } from "./NavBarElements";

export const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          <NavLink to="/sign-up">Sign Up</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
