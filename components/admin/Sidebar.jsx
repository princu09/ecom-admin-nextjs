import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { FaHome, FaProductHunt, FaBoxes, FaSignOutAlt } from "react-icons/fa";
import SubMenu from "../SubMenu";
import { BrowserView, MobileView } from "react-device-detect";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Drawer,
  IconButton,
  ListItemButton,
  Typography,
  useTheme,
} from "@mui/material";
import { changeSidebar } from "../../redux/sidebarSlice";
import { Box } from "@mui/system";
import { ColorModeContext, tokens } from "../../theme/theme";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

const Sidebar = () => {
  // Theme Changing

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const router = useRouter();
  const dispatch = useDispatch();
  const sidebarData = useSelector((state) => state.sidebar);

  const handleChange = () => {
    dispatch(changeSidebar());
  };

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
    <Box>
      <div className="lg:block hidden">
        <div
          className={`${
            sidebarData
              ? "translate-x-0 w-[230px] mr-[20px] visible"
              : "translate-x-[-230px] w-0 invisible"
          } ease-in-out duration-500`}
        >
          <div className="flex flex-col gap-5 mt-3">
            {MenuItems.map((item, index) => {
              return (
                <div key={index} className="border-b pb-3">
                  <p className="">{item.title}</p>
                  <div className="mt-3">
                    {item.menu.map((item, index) => {
                      return item.link ? (
                        <Link href={item.link}>
                          <ListItemButton
                            sx={{
                              padding: 1.5,
                              borderRadius: 2,
                              backgroundColor:
                                router.pathname == item.link &&
                                colors.primary[400] + "33",
                              "&:hover": {
                                backgroundColor: colors.primary[800],
                              },
                            }}
                            color={colors.primary[500]}
                            //  selected={selectedIndex === 0}
                          >
                            <Typography
                              display={"flex"}
                              alignItems={"center"}
                              gap={1}
                              color={colors.primary[500]}
                            >
                              {item.icon} {item.name}
                            </Typography>
                          </ListItemButton>
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
      </div>
      <Drawer
        open={sidebarData}
        onClose={handleChange}
        className="block lg:hidden"
      >
        <div className="flex flex-col gap-5 mt-3 px-5">
          <Typography fontWeight={600} textAlign="center">
            NextJS Admin.
          </Typography>

          {MenuItems.map((item, index) => {
            return (
              <div key={index} className="border-b pb-3">
                <p className="">{item.title}</p>
                <div className="mt-3">
                  {item.menu.map((item, index) => {
                    return item.link ? (
                      <Link href={item.link}>
                        <ListItemButton
                          sx={{
                            padding: 1.5,
                            borderRadius: 2,
                            backgroundColor:
                              router.pathname == item.link &&
                              colors.primary[400] + "33",
                            "&:hover": {
                              backgroundColor: colors.primary[800],
                            },
                          }}
                          color={colors.primary[500]}
                          //  selected={selectedIndex === 0}
                        >
                          <Typography
                            display={"flex"}
                            alignItems={"center"}
                            gap={1}
                            color={colors.primary[500]}
                          >
                            {item.icon} {item.name}
                          </Typography>
                        </ListItemButton>
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
        <Box
          pr={1}
          position="relative"
          className="block lg:hidden mt-5 ml-auto mr-3"
        >
          <IconButton
            TouchRippleProps={{
              style: {
                backgroundColor: "#88133722",
              },
            }}
            sx={{
              borderRadius: 2,
              color: "#881337",
              fontSize: 18,
              padding: 1,
            }}
            onClick={colorMode.toggleColorMode}
          >
            {theme.palette.mode == "light" ? (
              <DarkModeOutlined />
            ) : (
              <LightModeOutlined />
            )}
          </IconButton>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
