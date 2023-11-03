
import { NavLink, useLocation } from "react-router-dom";
import React from "react";

const ThumbNav = () => {

  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
  
      <nav className="fixed bottom-0 left-0 z-50 w-full p-2 bg-foggybg sm:hidden">
        <ul className="text-light-purple text-center uppercase grid grid-cols-5">
          <li>
            <NavLink to="/">
              <div className={`flex flex-col items-center ${isActive("/") ? "text-orange-500" : "text-green-700"}`}>
                <svg className={`${isActive("/") ? "fill-orange-500" : "fill-green-700"}`} aria-hidden="true" role="img" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                  <title>Home Icon</title>
                  <path d="M6 23h-3v-5.486c-1.827-.518-3-2.24-3-3.988 0-.585.129-1.172.407-1.716-.323-1.661.657-3.344 2.356-3.881l.018-.005c.773-1.102 2.057-1.826 3.535-1.898l5.666-5.026 12.018 10.661-1.33 1.493-10.688-9.482-3.274 2.905c.305.162.591.358.849.589l2.415-2.142 9.026 7.989v9.987h-2.998v-7h-5l-.008 7h-5.992v-6.061c.546-.125 1.034-.463 1.317-1.044 2.096.786 3.746-2.273 1.82-3.562 1.073-1.237.188-2.747-1.208-2.525-.673-2.384-4.178-2.384-4.851 0-1.31-.235-2.295 1.094-1.385 2.291-1.654 1.38-.162 4.084 1.872 3.473.214.74.794 1.2 1.435 1.362v6.066zm.451-10.678c1.493-1.023 3.242.768 2.303 2.226.002-1.473-.853-2.282-2.303-2.226m-2.119 1.191c-.668-1.002-.34-2.366.705-2.968.589-.338 1.33-.369 1.953-.07 1.06.507-2.743-.678-2.658 3.038"/></svg>
                <span className="pt-1 text-sm font-bold text-[0.8rem] min-[450px]:text-[1rem]">Home</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <div className={`flex flex-col items-center ${isActive("/about") ? "text-orange-500" : "text-green-700"}`}>
                <svg className={`${isActive("/about") ? "fill-orange-500" : "fill-green-700"}`} aria-hidden="true" role="img"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <title>ID Card Icon</title>
                  <path d="M10 0v6h4v-6h-4zm2 4c-.552 0-1-.448-1-1s.448-1 1-1c.553 0 1 .448 1 1s-.447 1-1 1zm4 0v3h-8v-3h-4v20h16v-20h-4zm1 16h-10v-.417c-.004-1.112.044-1.747 1.324-2.043 1.403-.324 2.787-.613 2.122-1.841-1.973-3.637-.563-5.699 1.554-5.699 2.077 0 3.521 1.985 1.556 5.699-.647 1.22.688 1.51 2.121 1.841 1.284.297 1.328.936 1.323 2.057v.403z"/></svg>
                <span className="pt-1 text-sm font-bold text-[0.8rem] min-[450px]:text-[1rem]">About</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects">
              <div className={`flex flex-col items-center ${isActive("/projects") ? "text-orange-500" : "text-green-700"}`}>
                <svg className={`${isActive("/projects") ? "fill-orange-500" : "fill-green-700"}`} aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <title>Code Icon</title>
                  <path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z"/></svg>
                <span className="pt-1 text-sm font-bold text-[0.8rem] min-[450px]:text-[1rem]">Projects</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/experiences">
              <div className={`flex flex-col items-center ${isActive("/experiences") ? "text-orange-500" : "text-green-700"}`}>
                <svg className={`${isActive("/experiences") ? "fill-orange-500" : "fill-green-700"}`} aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <title>Briefcase Icon</title>
                  <path d="M12.23 15.5c-6.801 0-10.367-1.221-12.23-2.597v9.097h24v-8.949c-3.218 2.221-9.422 2.449-11.77 2.449zm1.77 2.532c0 1.087-.896 1.968-2 1.968s-2-.881-2-1.968v-1.032h4v1.032zm-14-8.541v-2.491h24v2.605c0 5.289-24 5.133-24-.114zm9-7.491c-1.104 0-2 .896-2 2v2h2v-1.5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1.5h2v-2c0-1.104-.896-2-2-2h-6z"/></svg>
                <span className="pt-1 text-sm font-bold text-[0.8rem] min-[450px]:text-[1rem]">Exp.</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/connect">
              <div className={`flex flex-col items-center ${isActive("/connect") ? "text-orange-500" : "text-green-700"}`}>
                <svg className={`${isActive("/connect") ? "fill-orange-500" : "fill-green-700"}`} aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <title>Email Icon</title>
                  <path d="M13.718 10.528c0 .792-.268 1.829-.684 2.642-1.009 1.98-3.063 1.967-3.063-.14 0-.786.27-1.799.687-2.58 1.021-1.925 3.06-1.624 3.06.078zm10.282 1.472c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-1.194c0-3.246-2.631-5.601-6.256-5.601-4.967 0-7.744 3.149-7.744 7.073 0 3.672 2.467 6.517 7.024 6.517 2.52 0 4.124-.726 5.122-1.288l-.687-.991c-1.022.593-2.251 1.136-4.256 1.136-3.429 0-5.733-2.199-5.733-5.473 0-5.714 6.401-6.758 9.214-5.071 2.624 1.642 2.524 5.578.582 7.083-1.034.826-2.199.799-1.821-.756 0 0 1.212-4.489 1.354-4.975h-1.364l-.271.952c-.278-.785-.943-1.295-1.911-1.295-2.018 0-3.722 2.19-3.722 4.783 0 1.73.913 2.804 2.38 2.804 1.283 0 1.95-.726 2.364-1.373-.3 2.898 5.725 1.557 5.725-3.525z"/></svg>
                <span className="pt-1 text-sm font-bold text-[0.8rem] min-[450px]:text-[1rem]">Connect</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
   
  );
};

export default ThumbNav;
