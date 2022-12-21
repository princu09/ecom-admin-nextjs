import Link from "next/link";
import React, { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

const SubMenu = ({ data }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center">
        <p
          className="flex items-center gap-2 cursor-pointer selection:select-none"
          onClick={() => setDropdown(!dropdown)}
        >
          {data.icon} {data.name}
        </p>
        {dropdown ? (
          <FaChevronCircleUp onClick={() => setDropdown(!dropdown)} />
        ) : (
          <FaChevronCircleDown onClick={() => setDropdown(!dropdown)} />
        )}
      </div>
      {dropdown && (
        <div className="flex flex-col gap-5 mt-5 p-6 py-4 bg-accentShadow rounded-md">
          {data.submenu.map((item, index) => {
            return (
              <Link
                href={item.link}
                className="text-black hover:text-accentColor selection:select-none font-medium"
                key={index}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SubMenu;
