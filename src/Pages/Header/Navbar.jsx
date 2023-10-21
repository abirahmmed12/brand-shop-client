import { Link, NavLink } from 'react-router-dom';

import { useContext } from 'react';
import { AuthContext } from '../../Authprovider/Authprovider';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignout = () => {
    logOut()
      .then()
      .catch();
  };

  const Navlinks = (
    <>
       <li><NavLink to={'/'}>Home</NavLink></li>
       {user && (
      <li><NavLink to={'/addproduct'}>Add Product</NavLink></li>
       )}
       {user && (
      <li><NavLink to={'/mycart'}>My Cart</NavLink></li>
       )}

      <li><NavLink to={'/login'}>Login</NavLink></li>
      <li><NavLink to={'/Registration'}>Register</NavLink></li>

    </>
  );

  return (
    <div className="navbar p-5 shadow-2xl max-w-screen-xl m-auto ">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {Navlinks}
          </ul>
        </div>
        <img
          className='lg:w-20 w-6'
          src="https://i.ibb.co/0sSpyMJ/kisspng-hamburger-black-and-white-food-monochrome-painting-western-food-5b3900af6db9a9-4477478015304.png"
          alt=""
        />
        <p className='lg:text-xl lg:font-semibold text-sm'>CulinaryCrafters</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Navlinks}</ul>
      </div>
      <div className="navbar-end">
      {user ? (
          <>
            <div className="flex items-center gap-2 mr-4">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="User Icon"
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <img
                  src="https://i.ibb.co/QmgzZ1N/Sample-User-Icon.png"
                  alt="Default User Icon"
                  className="w-8 h-8 rounded-full"
                />
              )}
              <span className="text-sm mr-2 lg:text-lg text-gray-800">
                {user.displayName || user.email}
              </span>
            </div>
            <button
              onClick={handleSignout}
              className="btn bg-black  text-white hover:bg-blue-100"
            >
              Log out
            </button>
          </>
        ) : (
          <Link to={'/login'}>
            <button className="btn bg-black text-white hover:bg-blue-100">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
