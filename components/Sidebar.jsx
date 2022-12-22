import Link from "next/link";
import React from "react";
import { FaHome, FaProductHunt, FaBoxes, FaSignOutAlt } from "react-icons/fa";
import SubMenu from "./SubMenu";

const Sidebar = () => {
  const MenuItems = [
    {
      name: "Dashboard",
      icon: <FaHome />,
      link: "/admin",
    },
    {
      name: "Manage Products",
      icon: <FaProductHunt />,
      submenu: [
        {
          name: "Add Product",
          link: "/admin/add-product",
        },
        {
          name: "All Products",
          link: "/admin/products",
        },
      ],
    },
    {
      name: "Manage Category",
      icon: <FaBoxes />,
      submenu: [
        {
          name: "Category",
          link: "/admin/category",
        },
        {
          name: "Add Category",
          link: "/admin/category/add-category",
        },
        {
          name: "Sub Category",
          link: "/admin/subcategory",
        },
        {
          name: "Add Sub Category",
          link: "/admin/subcategory/add-subcategory",
        },
      ],
    },
    {
      name: "Logout",
      icon: <FaSignOutAlt />,
      link: "/logout",
    },
  ];

  return (
    <div className="">
      <p className="text-center text-xl font-semibold underline underline-offset-8">
        NextJS Admin Panel.
      </p>

      <div className="mt-10 px-5 flex flex-col gap-8">
        {MenuItems.map((item, index) => {
          return item.link ? (
            <Link
              href={item.link}
              className="flex items-center gap-2 selection:select-none"
              key={index}
            >
              {item.icon} {item.name}
            </Link>
          ) : (
            <SubMenu data={item} key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
