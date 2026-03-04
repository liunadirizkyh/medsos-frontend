import { Link, Outlet } from "react-router";
import {
  FaHome,
  FaPlusSquare,
  FaSearch,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";

const HomeLayout = () => {
  return (
    <div className="flex min-h-screen bg-base-200">
      {/* sidebar desktop */}
      <aside className="hidden lg:flex w-64 p-6 flex-col shadow-md shadow-info justify-between sticky top-0 h-screen overflow-hidden">
        <div>
          <h1 className="text-5xl font-logo mb-5 text-center">VistaGram</h1>
          <ul className="menu gap-3 text-base w-full">
            <li>
              <Link to={"/"}>
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <a href="">
                <FaSearch /> Search
              </a>
            </li>
            <li>
              <a href="">
                <FaPlusSquare /> Create
              </a>
            </li>
            <li>
              <a href="">
                <FaUserCircle /> Profile
              </a>
            </li>
          </ul>
        </div>
        <button className="btn btn-outline btn-sm text-error">Logout</button>
      </aside>

      {/* sidebar tablet */}
      <aside className="hidden md:flex lg:hidden w-20 shadow-md shadow-info flex-col items-center py-6 gap-8 sticky top-0 h-screen overflow-hidden">
        <Link to={"/"}>
          <FaHome className="tesxt-2xl cursor-pointer" />
        </Link>
        <FaSearch className="tesxt-2xl cursor-pointer" />
        <FaPlusSquare className="tesxt-2xl cursor-pointer" />
        <FaUserCircle className="tesxt-2xl cursor-pointer" />
        <FaSignOutAlt className="tesxt-2xl cursor-pointer text-error" />
      </aside>

      {/* main */}
      <Outlet />

      <nav className="fixed bottom-0 left-0 right-0 bg-base-300 flex justify-around py-3 md:hidden">
        <Link to={"/"}>
          <FaHome className="text-xl cursor-pointer" />
        </Link>
        <FaSearch className="text-xl cursor-pointer" />
        <FaPlusSquare className="text-xl cursor-pointer" />
        <FaUserCircle className="text-xl cursor-pointer" />
        <FaSignOutAlt className="text-xl cursor-pointer text-error" />
      </nav>
    </div>
  );
};

export default HomeLayout;
