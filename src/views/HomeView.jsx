import { CiInstagram } from "react-icons/ci";
import {
  FaHeart,
  FaHome,
  FaPaperPlane,
  FaPlusSquare,
  FaRegBookmark,
  FaRegComment,
  FaSearch,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";

const HomeView = () => {
  return (
    <div className="flex min-h-screen bg-base-200">
      {/* sidebar desktop */}
      <aside className="hidden lg:flex w-64 p-6 flex-col shadow-md shadow-info justify-between sticky top-0 h-screen overflow-hidden">
        <div>
          <h1 className="text-5xl font-logo mb-5 text-center">VistaGram</h1>
          <ul className="menu gap-3 text-base w-full">
            <li>
              <a href="">
                <FaHome /> Home
              </a>
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
        <FaHome className="tesxt-2xl cursor-pointer" />
        <FaSearch className="tesxt-2xl cursor-pointer" />
        <FaPlusSquare className="tesxt-2xl cursor-pointer" />
        <FaUserCircle className="tesxt-2xl cursor-pointer" />
        <FaSignOutAlt className="tesxt-2xl cursor-pointer text-error" />
      </aside>

      {/* main */}
      <main className="flex-1 flex justify-center pb-16 md:pb-0">
        <div className="w-full max-w-xl">
          {/* header */}
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src="https://i.pravatar.cc/150?img=1" alt="" />
                </div>
              </div>
              <span className="font-semibold text-sm">Username</span>
            </div>
            <span className="cursor-pointer">...</span>
          </div>
          {/* images */}
          <img
            src="https://picsum.photos/seed/1/600/600"
            alt=""
            className="w-full rounded-sm"
          />
          {/* action */}
          <div className="flex justify-between px-4 py-3">
            <div className="flex gap-4 text-xl">
              <FaHeart className="cursor-pointer hover:text-red-500 transition" />
              <FaRegComment className="cursor-pointer" />
              <FaPaperPlane className="cursor-pointer" />
            </div>
            <FaRegBookmark className="cursor-pointer text-xl" />
          </div>

          {/* caption */}
          <div className="px-4 text-sm">
            <p className="font-semibold">1500 likes</p>
            <p className="">
              <span className="font-bold">username</span> Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Quisquam necessitatibus, eaque
              tenetur itaque accusantium rerum voluptate dignissimos, aperiam
              modi veritatis totam hic impedit minus aspernatur temporibus fugit
              obcaecati, veniam blanditiis.
            </p>
            <p className="text-xs text-gray-500 mt-1">2 jam yang lalu</p>
          </div>
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-base-300 flex justify-around py-3 md:hidden">
        <FaHome className="text-xl cursor-pointer" />
        <FaSearch className="text-xl cursor-pointer" />
        <FaPlusSquare className="text-xl cursor-pointer" />
        <FaUserCircle className="text-xl cursor-pointer" />
        <FaSignOutAlt className="text-xl cursor-pointer text-error" />
      </nav>
    </div>
  );
};

export default HomeView;
