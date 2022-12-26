import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaHome, FaProductHunt, FaBoxes, FaSignOutAlt } from "react-icons/fa";
import SubMenu from "./SubMenu";

const Sidebar = ({ className }) => {
  const router = useRouter();

  const MenuItems = [
    {
      title: "Dashboard",
      menu: [
        {
          name: "Dashboard",
          icon: <FaHome />,
          link: "/admin",
        },
      ],
    },
    {
      title: "Manage",
      menu: [
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
      ],
    },
    {
      title: "Logout",
      menu: [
        {
          name: "Logout",
          icon: <FaSignOutAlt />,
          link: "/logout",
        },
      ],
    },
  ];

  return (
    <div className={className}>
      <div className="flex flex-col gap-5 mt-3">
        {MenuItems.map((item, index) => {
          return (
            <div key={index} className="border-b pb-3">
              <p className="  ">{item.title}</p>
              <div className="mt-3">
                {item.menu.map((item, index) => {
                  return item.link ? (
                    <Link
                      href={item.link}
                      className={`flex items-center gap-2 selection:select-none pl-3 p-3 rounded-lg 
                      ${
                        router.pathname == item.link &&
                        "bg-accentLight text-accentColor"
                      }`}
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
        })}
      </div>
    </div>
  );
};

export default Sidebar;
