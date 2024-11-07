import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const Link = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-white font-bold  rounded-md bg-purple-500"
            : "text-white  rounded-md"
        }
      >
        <li className="hover:underline hover:font-bold">
          <a>Home</a>
        </li>
      </NavLink>
      <NavLink
        to="/Statistics"
        className={({ isActive }) =>
          isActive
            ? "text-white  font-bold rounded-md bg-purple-500"
            : "text-white  rounded-md"
        }
      >
        <li className="hover:underline hover:font-bold">
          <a>Statistics</a>
        </li>
      </NavLink>
      <NavLink
        to="/Dashbord/List"
        className={({ isActive }) =>
          isActive
            ? "text-white font-bold rounded-md bg-purple-500"
            : "text-white  rounded-md"
        }
      >
        <li className="hover:underline hover:font-bold">
          <a>Dashbord</a>
        </li>
      </NavLink>
      <NavLink
        to="/Gaget"
        className={({ isActive }) =>
          isActive
            ? "text-white font-bold rounded-md bg-purple-500"
            : "text-white  rounded-md"
        }
      >
        <li className="hover:underline hover:font-bold">
          <a>Gadget Blog</a>
        </li>
      </NavLink>
    </>
  );
  return (
    <div className=" bg-purple-500 rounded-2xl mx-10">
      <div className="container mx-auto navbar text-white border-none mt-1  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content font-bold bg-purple-300 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {Link}
            </ul>
          </div>
          <a className="font-bold text-2xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-5 menu-horizontal px-1 ">{Link}</ul>
        </div>
        <div className="navbar-end">
          <NavLink to={"/Dashbord/Cart"} className="btn btn-ghost  btn-circle">
            <FontAwesomeIcon icon={faCartShopping} size="xl" />
          </NavLink>
          <button className="btn btn-ghost btn-circle">
            <NavLink to={"/Dashbord/List"} className="indicator">
              <FontAwesomeIcon icon={faHeart} size="xl" />
              <span className="badge badge-xs badge-primary indicator-item">
                {" "}
                1
              </span>
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
