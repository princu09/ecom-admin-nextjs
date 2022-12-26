import React from "react";
import { BsBell, BsSearch } from "react-icons/bs";
import { RiMenu2Line } from "react-icons/ri";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { AiOutlineSetting } from "react-icons/ai";
import { BrowserView } from "react-device-detect";

const Navbar = ({ menu, setMenu }) => {
  return (
    <div className="w-full h-20 flex items-center gap-5">
      <div className="min-w-[230px] flex justify-between items-center">
        <p className="font-semibold text-lg">NextJS Admin.</p>
        <button
          className="text-accentColor bg-accentLight p-2 rounded-lg"
          onClick={() => setMenu(!menu)}
        >
          <RiMenu2Line />
        </button>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="lg:min-w-[35%] flex items-center relative">
          <BsSearch className="absolute left-2 text-accentColor" />
          <input
            type="text"
            className="border border-accentLight rounded-lg w-full px-10 h-12 focus:outline-accentColor"
            placeholder="Search Product Here..."
          />
          <TbAdjustmentsHorizontal className="absolute right-2 text-3xl bg-accentLight text-accentColor hover:text-white hover:bg-accentColor p-1 rounded-lg" />
        </div>
        <div className="flex items-center gap-5">
          <BsBell className="bg-accentLight text-accentColor hover:text-white hover:bg-accentColor text-3xl p-1.5 rounded-lg" />
          <AiOutlineSetting className="bg-accentLight text-accentColor hover:text-white hover:bg-accentColor text-3xl p-1.5 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
