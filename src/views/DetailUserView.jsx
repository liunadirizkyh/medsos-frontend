import React from "react";
import { FaBookmark, FaCog, FaTh } from "react-icons/fa";

const DetailUserView = () => {
  return (
    <div className="flex-1 flex justify-center items-center pb-16 md:pb-0">
      <div className="flex justify-center bg-base-100 min-h-screen">
        <div className="w-full max-w-4xl px-4">
          {/* profile header */}
          <div className="flex flex-col md:flex-row gap-8 py-10">
            {/* avatar */}
            <div className="flex justify-center md:w-1/3">
              <div className="avatar">
                <div className="w-36 rounded-full">
                  <img src="https://i.pravatar.cc/300?img=1" alt="" />
                </div>
              </div>
            </div>
            {/* info */}
            <div className="flex-1 space-y-4">
              {/* username */}
              <div className="flex items-center gap-4 flex-wrap">
                <h2 className="text-xl font-light">Fullname</h2>
                <button className="btn btn-sm btn-primary">Follow</button>
                <FaCog className="text-xl cursor-pointer" />
              </div>
              {/* stats */}
              <div className="flex gap-6 text-sm">
                <p>
                  <span className="font-bold">24</span> Post
                </p>
                <p>
                  <span className="font-bold">344</span> Followers
                </p>
                <p>
                  <span className="font-bold">174</span> Following
                </p>
              </div>
              {/* biodata */}
              <div className="text-sm ">
                <p className="font-semibold">username</p>
                <p>ngoding nih brok</p>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          {/* tab menu */}
          <div className="flex justify-center gap-10 text-sm uppercase tracking-widest">
            <button className="py-3 flex items-center gap-2 border-b-2 border-white">
              <FaTh />
              Posts
            </button>
            <button className="py-3 flex items-center gap-2 border-b-2 border-gray-400">
              <FaBookmark />
              Bookmark
            </button>
          </div>
          {/* post grid */}
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm: grid-cols-2 gap-1 mt-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((post) => (
              <div
                key={post}
                className="aspect-square overflow-hidden cursor-pointer "
              >
                <img
                  src={`https://picsum.photos/seed/${post}/600/600`}
                  alt=""
                  className="w-full h-full object-cover hover:scale-110 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailUserView;
