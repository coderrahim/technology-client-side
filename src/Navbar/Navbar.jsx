import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)

  const [theme, setTheme] = useState("");

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const userPreferredTheme = localStorage.getItem("theme");

    if (userPreferredTheme) {
      setTheme(userPreferredTheme);
    } else {
      if (prefersDarkScheme) {
        setTheme("night");
      } else {
        setTheme("light");
      }
    }
  }, []);

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
      theme === "night"
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "night" : "light";
    setTheme(newTheme);
  };

  const navMenu = <>
    <li><NavLink to='/'> Home </NavLink></li>
    <li> <NavLink to='addproduct'> Add Product </NavLink> </li>
    <li><NavLink to='/mycart'>My Cart</NavLink></li>
    <li><NavLink to='/addbrand'>Add brand</NavLink></li>
  </>
  return (
    < div className=" shadow-md sticky top-0 z-50 dark:bg-indigo-950 bg-white">
      <div className="navbar bg-base-100 dark:bg-indigo-950 h-20 max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl capitalize">
              {navMenu}
            </ul>
          </div>
          <div className="">
            <Link to='/' className="btn btn-ghost normal-case text-xl">
              <img className="h-10 w-10 rounded-full shadow-xl" src="https://yt3.googleusercontent.com/S1yWGAxC2fJEAlOWhDegx8zFaxw0LHXZCZzDH_zl0EbZc3rlj0esm1aYe89BGxl5k9fJRFnj=s900-c-k-c0x00ffffff-no-rj" alt="TechZone" />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 capitalize font-semibold text-lg">
            {navMenu}
          </ul>
        </div>

        {/* DArk mode */}

        <li className="ml-5">
          <Link to={`#`} className="text-lg" onClick={toggleTheme}>
            {" "}
            {theme === "night" ? (
              <BsFillSunFill className="text-white" size={25} />
            ) : (
              <BsFillMoonStarsFill size={20} />
            )}
          </Link>
        </li>

        <div className="navbar-end flex items-center">
          
          {
            user ?
              <div className="flex items-center justify-center gap-5">

                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost shadow-xl btn-circle avatar">
                    <div className="w-12 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </label>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box text-right border">
                    <li className="text-xl my-3 font-medium"> {user?.displayName} </li>
                    <li className="text-xl my-3 font-medium "> {user?.email} </li>

                  </ul>
                </div>

                <div>
                  <button onClick={logOut} className="btn btn-outline btn-sm md:btn-md btn-primary">Logout</button>
                </div>
              </div>
              :
              <Link to='/login'>
                <button className="btn btn-outline btn-primary btn-sm md:btn-md">Login</button>
              </Link>

          }
        </div>
      </div>
    </div >
  );
};

export default Navbar;