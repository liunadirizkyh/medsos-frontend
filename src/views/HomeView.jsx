import {
  FaHeart,
  FaPaperPlane,
  FaRegBookmark,
  FaRegComment,
} from "react-icons/fa";
import { Link } from "react-router";

const HomeView = () => {
  return (
    <>
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
              <Link to={"/liunadi"}>
                <span className="font-semibold text-sm on">Username</span>
              </Link>
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
    </>
  );
};

export default HomeView;
