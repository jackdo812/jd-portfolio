import { NavLink, useLocation } from "react-router-dom";
import ToggleButton from "./ToggleButton";
import { useSelector } from 'react-redux';

const Nav = () => {
  const isDarkMode = useSelector((state) => state.darkMode);
  const location = useLocation();

  function blur(e) {
    e.target.blur();
  }

  let currentPage = '';
  isDarkMode ? currentPage = 'text-sun underline' : currentPage = 'text-soil underline';

  return (
    <nav className={`main-nav self-center hidden md:block md:justify-evenly`} onClick={blur}>

      <ul className="font-bold text-left ml-8 flex">
        <li className="md:pr-4 md:text-[1.1rem] min-[900px]:text-xl min-[900px]:pr-8  md:hover:scale-[1.2] md:transition-all md:duration-300 md:ease-in-out">
          <NavLink to="/"
            className={`${location.pathname === "/" && currentPage} py-4 px-2 `}>Home</NavLink>
        </li>
        <li className="md:pr-4 md:text-[1.1rem] min-[900px]:text-xl min-[900px]:pr-8 md:hover:scale-[1.2] md:transition-all md:duration-300 md:ease-in-out">
          <NavLink to="/about" 
            className={`${location.pathname === "/about" && currentPage} py-4 px-2 `}>About</NavLink>
        </li >
        <li className="md:pr-4 md:text-[1.1rem] min-[900px]:text-xl min-[900px]:pr-8 md:hover:scale-[1.2] md:transition-all md:duration-300 md:ease-in-out">
          <NavLink to="/projects"          
            className={`${location.pathname === "/projects" && currentPage} py-4 px-2 `}>Projects</NavLink>
        </li>
        <li className="md:pr-4 md:text-[1.1rem] min-[900px]:text-xl min-[900px]:pr-8 md:hover:scale-[1.2] md:transition-all md:duration-300 md:ease-in-out">
          <NavLink to="/experiences"         
            className={`${location.pathname === "/experiences" && currentPage} py-4 px-2 `}>Experiences</NavLink>
        </li>
        <li className="md:pr-4 md:text-[1.1rem] min-[900px]:text-xl md:hover:scale-[1.2] md:transition-all md:duration-300 md:ease-in-out">
          <NavLink to="/connect"      
            className={`${location.pathname === "/connect" && currentPage} py-4 px-2`}>Connect</NavLink>
        </li>
        <li className="md:hover:scale-[1.2] md:transition-all md:duration-300 md:ease-in-out">
          <ToggleButton />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
