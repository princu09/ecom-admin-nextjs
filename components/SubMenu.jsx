import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BsDot } from "react-icons/bs";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const SubMenu = ({ data }) => {
  const router = useRouter();
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="relative mb-4">
      <div
        className={`flex justify-between items-center gap-2 selection:select-none pl-3 p-3 rounded-lg cursor-pointer ${
          dropdown && "bg-accentLight text-accentColor"
        }`}
        onClick={() => setDropdown(!dropdown)}
      >
        <p
          className={`flex items-center gap-2 selection:select-none ${
            dropdown && "activeMenu"
          }`}
        >
          {data.icon} {data.name}
        </p>
        {dropdown ? (
          <FiChevronUp onClick={() => setDropdown(!dropdown)} />
        ) : (
          <FiChevronDown onClick={() => setDropdown(!dropdown)} />
        )}
      </div>
      {dropdown && (
        <div className="flex flex-col px-5">
          {data.submenu.map((item, index) => {
            return (
              <div className="border-l pl-2 pt-4">
                <Link
                  href={item.link}
                  className={`hover:text-accentColor selection:select-none font-semibold flex items-center gap-2 ${
                    router.pathname == item.link
                      ? "text-accentColor"
                      : "text-accentLightBG"
                  } `}
                  key={index}
                >
                  <BsDot className="text-lg" /> {item.name}
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SubMenu;
