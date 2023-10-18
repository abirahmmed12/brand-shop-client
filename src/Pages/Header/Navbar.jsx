import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li><NavLink to={'/'}>Home</NavLink></li>
      <li><NavLink to={'/addproduct'}>Add Product</NavLink></li>
      <li><NavLink to={'/mycart'}>My Cart</NavLink></li>
      <li><NavLink to={'/login'}>Login</NavLink></li>
      <li><NavLink to={'/register'}>Register</NavLink></li>
    </>
  );

  return (
    <div className="bg-black text-white max-w-screen-xl m-auto ">
      <div className="navbar bg-base-100 ">
        <div className=" bg-black h-[52px] lg:h-32">
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
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </div>
         <div className="flex items-center">
        <p className="text-2xl">CulinaryCrafters</p>
          <img className="h-14 " src="https://i.ibb.co/0sSpyMJ/kisspng-hamburger-black-and-white-food-monochrome-painting-western-food-5b3900af6db9a9-4477478015304.png" alt="" />
         </div>
        </div>
        <div className="navbar-center hidden lg:flex lg:h-32 bg-black ">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end bg-black h-[52px] lg:h-32 ">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
