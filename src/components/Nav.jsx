import { NavLink, useLocation } from "react-router-dom";
import SocialMedia from "./SocialMedia";

const Nav = () => {

  const location = useLocation();

  function blur(e) {
    e.target.blur();
  }

  return (
    <nav className={`main-nav self-center hidden md:block md:justify-evenly md:transition-all md:duration-500`} onClick={blur}>

      <ul className="font-bold text-left ml-8 flex">
        <li className="md:pr-4 md:text-[1.1rem] min-[900px]:text-xl min-[900px]:pr-8  md:hover:scale-[1.2] md:transition-all md:duration-300 md:ease-in-out">
          <NavLink to="/"
            className={`${location.pathname === "/" ? "text-soil underline" : ""} `}>Home</NavLink>
        </li>
        <li className="md:pr-4 md:text-[1.1rem] min-[900px]:text-xl min-[900px]:pr-8 md:hover:scale-[1.2] md:transition-all md:duration-300 md:ease-in-out">
          <NavLink to="/about" 
            className={location.pathname === "/about" ? "text-soil underline" : ""}>About</NavLink>
        </li >
        <li className="md:pr-4 md:text-[1.1rem] min-[900px]:text-xl min-[900px]:pr-8 md:hover:scale-[1.2] md:transition-all md:duration-300 md:ease-in-out">
          <NavLink to="/projects"          
            className={location.pathname === "/projects" ? "text-soil underline" : ""}>Projects</NavLink>
        </li>
        <li className="md:pr-4 md:text-[1.1rem] min-[900px]:text-xl min-[900px]:pr-8 md:hover:scale-[1.2] md:transition-all md:duration-300 md:ease-in-out">
          <NavLink to="/experiences"         
            className={location.pathname === "/experiences" ? "text-soil underline" : ""}>Experiences</NavLink>
        </li>
        <li className="md:text-[1.1rem] min-[900px]:text-xl md:hover:scale-[1.2] md:transition-all md:duration-300 md:ease-in-out">
          <NavLink to="/connect"      
            className={location.pathname === "/connect" ? "text-soil underline" : ""}>Connect</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
