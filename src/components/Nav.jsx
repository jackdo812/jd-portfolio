import { NavLink, useLocation } from "react-router-dom";

const Nav = () => {

  const location = useLocation();

  function blur(e) {
    e.target.blur();
  }

  return (
    <nav className="h-full main-nav self-center hidden sm:block sm:justify-evenly pb-8 transition-all duration-500" onClick={blur}>
      <ul className="font-bold flex justify-evenly ">
        <li>
          <NavLink to="/"
            className={location.pathname === "/" ? "text-green-500 underline" : ""}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about"
            className={location.pathname === "/about" ? "text-green-500 underline" : ""}>About</NavLink>
        </li>
        <li>
          <NavLink to="/projects"
            className={location.pathname === "/projects" ? "text-green-500 underline" : ""}>Projects</NavLink>
        </li>
        <li>
          <NavLink to="/experiences"
            className={location.pathname === "/experiences" ? "text-green-500 underline" : ""}>Experiences</NavLink>
        </li>
        <li>
          <NavLink to="/connect"
            className={location.pathname === "/connect" ? "text-green-500 underline" : ""}>Connect</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
