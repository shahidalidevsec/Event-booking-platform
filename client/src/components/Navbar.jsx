import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FaTicketAlt } from "react-icons/fa";


const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-[#070E24] shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-4">
          <Link
            to="/"
            className="text-red-500 text-2xl font-bold flex items-center gap-2"
          >
            <img className="  object-cover border border-red-500 p-1 rounded-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAaCAMAAACTisy7AAABJlBMVEVHcEyqSzG5SC6/RDLvt6X6//W5XE2xPyrWjXy8YUz/5tfIcmD///+6SDKjRzPNTzfMZFHjnI3gnI68VknMa1H5wa6zQyu1VDzYd2W1NR3gi3mfMh7YXUv/7+C+TDfck4a5XEzmppbCOzCnQi/XjHa/OBbJVjr/zLXqnYnecl/0y7r6yr3Xd2P/7OXhoJbxvbb/3c7PLAzCNB340MCtOx3Vq5/QhnyrPx/pppP5zLn41dTPVDzjg3n/+fP0nH3JnZDano3/NwbTJhTPJwXTLAThJgW6MhTcJgPFKwbMLwrEQCLEJQLZIQPVKQHWJQrSIgThIAbCLxfZLgfAU0CyKwiwPSHPfG3NNhu7HgzZQifIHQD1qI/aZUvacGTHc164DADMAAD/xazideo1AAAAQnRSTlMAYcLr+wIkNCc8IFIO/FD+/fpFba4r3Ih88Pv7/n+iBtUc/HZx9vyjw8lNivM4qsL7w8Xyi3WA6tgzcerfR76PasM680Z9AAABiUlEQVQokZXRx3LiQBAAUBkkJJkcTMbZOId1Wme7mByUCQac9v9/YoEDhbTrg/vSU/2qZ6p7FOUnsaYn1r4zoxKPJyK1pcutjWmuxDDw9AiWKd6apGUMfDuKKzUL7BSVQhlK5GfNCO44CPYy54AQKZYit6Zqrktw5hfx4SBXNYzlkK53XH+KrP2g1nMfN5nkgt92iYWT56K3u+eNhKBedn9hoJ7viP2jj+fDpgDQkkh6MWOOSfbJ+Ekh9cKHAwCRJLB7pc2kGq/d/1HTjckM2kHrNE0t2O32D2bb6VGbMP7UujhWlEK/kT97a/+u7876EjEMpYscKj7zj4XTgDpfw9b8Ob2MAULIorx+EfRVIdHr4Rw1s5JmAo6yYzUQOZVbNj1aWIFmbtff38fjgMpmngOLNUIr0lbu1IAzCw3fMASQVyPrPXm1HX+UO+sDSVgsjGazgxDgJeV6s+Oy1ZBpukdsZ/A0GbW42Yknw506ZrRdSk2PxdXolxrr6dK2pvw/NMPc+Iam+m/pL643Rvu9HOfxAAAAAElFTkSuQmCC" alt="" />
             Eventora
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a className="relative pb-2 text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 cursor-pointer after:bg-red-500 after:transition-transform after:duration-300 hover:after:scale-x-100">
              <Link to='/'>
              Home
              </Link>
            </a>

            <a className="relative pb-2 text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full cur after:origin-left after:scale-x-0 cursor-pointer after:bg-red-500 after:transition-transform after:duration-300 hover:after:scale-x-100">
              <Link to="/about">
  About
</Link>
              
            </a>

            <a className="relative pb-2 text-white  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 cursor-pointer after:bg-red-500 after:transition-transform after:duration-300 hover:after:scale-x-100">
              <Link to="/gallery">Gallery</Link>
            </a>

               <a className="relative pb-2 text-white  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 cursor-pointer after:bg-red-500 after:transition-transform after:duration-300 hover:after:scale-x-100">
              <Link to="/Contactus">Contact us</Link>
            </a>


            <Link
              to="/"
              className=" relative pb-2 text-white  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-red-500 after:transition-transform after:duration-300 hover:after:scale-x-100   cursor-pointer"
            >
              Events
            </Link>
            {user ? (
              <>
                <Link
                  to={user.role === "admin" ? "/admin" : "/dashboard"}
                  className="relative pb-2 text-white  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-red-500 after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-[#FF244D] hover:bg-red-300 font-serif text-white px-4 py-1 cursor-pointer rounded-md transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="relative pb-2 text-white  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-red-500 after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-white text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-md  hover:text-red-500 font-semibold transition"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
