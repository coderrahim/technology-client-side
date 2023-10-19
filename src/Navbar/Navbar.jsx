import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)

  const navMenu = <>
    <li><NavLink to='/'> Home </NavLink></li>
    <li> <NavLink to='addproduct'> Add Product </NavLink> </li>
    <li><NavLink to='/mycart'>My Cart</NavLink></li>
    <li><NavLink to='/addbrand'>Add brand</NavLink></li>
  </>
  return (
    < div className=" shadow-md">
      <div className="navbar bg-base-100 h-20 max-w-7xl mx-auto">
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
        <div className="navbar-end">
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