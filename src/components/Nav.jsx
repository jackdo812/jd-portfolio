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
        <li className="md:pr-4 md:text-[1.1rem] min-[900px]:md:text-xl min-[900px]:pr-8 md:hover:animate-fill">
          <NavLink to="/"
            className={`md:hover:animate-fill ${location.pathname === "/" ? "text-green-500 underline" : ""} `}>Home</NavLink>
        </li>
        <li className="md:pr-4 md:text-[1.1rem] min-[900px]:md:text-xl min-[900px]:pr-8">
          <NavLink to="/about" 
            className={location.pathname === "/about" ? "text-green-500 underline" : ""}>About</NavLink>
        </li >
        <li className="md:pr-4 md:text-[1.1rem] min-[900px]:md:text-xl min-[900px]:pr-8">
          <NavLink to="/projects"          
            className={location.pathname === "/projects" ? "text-green-500 underline" : ""}>Projects</NavLink>
        </li>
        <li className="md:pr-4 md:text-[1.1rem] min-[900px]:md:text-xl min-[900px]:pr-8">
          <NavLink to="/experiences"         
            className={location.pathname === "/experiences" ? "text-green-500 underline" : ""}>Experiences</NavLink>
        </li>
        <li className="md:text-[1.1rem] min-[900px]:md:text-xl">
          <NavLink to="/connect"      
            className={location.pathname === "/connect" ? "text-green-500 underline" : ""}>Connect</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
