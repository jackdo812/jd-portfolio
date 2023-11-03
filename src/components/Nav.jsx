import { NavLink, useLocation } from "react-router-dom";
import SocialMedia from "./SocialMedia";

const Nav = ({connectData, closeMenu}) => {

  const location = useLocation();

  function blur(e) {
    e.target.blur();
  }

  return (
    <nav className={`main-nav self-center hidden md:block md:justify-evenly md:transition-all md:duration-500 md:absolute md:bg-orange-200 md:w-full md:left-0 animate-flydown md:h-screen md:z-50`} onClick={blur}>
     
        <SocialMedia linkedInLink={connectData.linkedin_link} githubLink={connectData.github_link} height={'30px'} width={'30px'}/>
  
      <ul className="font-bold text-left ml-8">
        <li>
          <NavLink to="/"
            onClick={closeMenu}
            className={location.pathname === "/" ? "text-green-500 underline" : ""}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about"
            onClick={closeMenu}
            className={location.pathname === "/about" ? "text-green-500 underline" : ""}>About</NavLink>
        </li>
        <li>
          <NavLink to="/projects"
           onClick={closeMenu}
            className={location.pathname === "/projects" ? "text-green-500 underline" : ""}>Projects</NavLink>
        </li>
        <li>
          <NavLink to="/experiences"
           onClick={closeMenu}
            className={location.pathname === "/experiences" ? "text-green-500 underline" : ""}>Experiences</NavLink>
        </li>
        <li>
          <NavLink to="/connect"
           onClick={closeMenu}
            className={location.pathname === "/connect" ? "text-green-500 underline" : ""}>Connect</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
