import { NavLink, useLocation } from "react-router-dom";

const Nav = () => {

  const location = useLocation();

  function blur(e) {
    e.target.blur();
  }

  return (
    <nav className={`main-nav self-center hidden sm:block sm:justify-evenly sm:transition-all sm:duration-500 sm:absolute sm:bg-orange-200 sm:w-full sm:left-0 animate-flydown sm:h-screen sm:z-50`} onClick={blur}>
      <ul className="font-bold text-left ml-8">
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
