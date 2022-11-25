import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {FaBookOpen, FaMoon, FaSun, FaUserAlt } from 'react-icons/fa';
import { AuthContext, ThemeContext } from "../../../context/AuthProvider";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const { user, logOut } = useContext(AuthContext);

  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
    
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {user && user.uid ? (
              <li>
                <Link to="/profile">
                  <p>{user?.displayName}</p>
                  <img
                    className="w-8 h-8 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                </Link>
              </li>
            ) : undefined}
            <li>
              <Link to="/home">Home</Link>
            </li>
            
            {user ? (
            <>
              <li onClick={logOut}>
                <Link>Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Register</Link>
              </li>
            </>
          )}
            <div
              onClick={handleTheme}
              className="cursor-pinter flex items-center justify-start mx-3"
            >
              {theme === "dark" ? <FaSun></FaSun> : <FaMoon></FaMoon>}
            </div>
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl font-bold"><FaBookOpen className="text-orange-400 text-2xl mr-1"/><span className="text-info mr-1">THE COZY</span> LIBRARY</Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
        <li>
            <Link to="/home">Home</Link>
          </li>
          
          {user ? (
            <>
            <li><Link to='dashboard'>Dashboard</Link></li>
              <li onClick={logOut}>
                <Link>Logout</Link>
              </li>
              <div className="flex items-center gap-2">
                <li>{user?.displayName}</li>
                {
                  user.photoURL ? <img className="w-8 h-8 rounded-full" src={user?.photoURL} alt="" />
                  : <FaUserAlt></FaUserAlt>
                }
              </div>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Register</Link>
              </li>
            </>
          )}
          <div
            onClick={handleTheme}
            className="cursor-pinter flex items-center mx-3"
          >
            {theme === "dark" ? <FaSun></FaSun> : <FaMoon></FaMoon>}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
