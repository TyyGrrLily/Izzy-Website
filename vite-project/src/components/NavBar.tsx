import { Nav, NavLink, NavMenu } from "./NavBarElements";

export const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/main">Main</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/experience">Job Experience</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/blog">Blogs</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
