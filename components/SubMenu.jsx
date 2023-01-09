import { useTheme } from "@emotion/react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box, Collapse, ListItemButton, Typography } from "@mui/material";
import Link from "next/link";
import Router from "next/router";
import React, { useState } from "react";
import { BsDot } from "react-icons/bs";
import { tokens } from "../theme/theme";

const SubMenu = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="relative mb-4">
      <ListItemButton
        onClick={handleClick}
        sx={{
          padding: 1.5,
          borderRadius: 2,
          "&:hover": {
            backgroundColor: colors.primary[800],
          },
        }}
        color={colors.primary[500]}
      >
        <Box display="flex" justifyContent="space-between" width="100%">
          <Typography
            display={"flex"}
            alignItems={"center"}
            gap={1}
            color={colors.primary[500]}
          >
            {data.icon} {data.name}
          </Typography>
          {open ? (
            <ExpandLess
              sx={{
                color: colors.primary[500],
              }}
            />
          ) : (
            <ExpandMore color={colors.primary[500]} />
          )}
        </Box>
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit className="pl-5">
        {data.submenu.map((item, index) => {
          return (
            <div className="border-l pl-2 pt-4">
              <Link
                href={item.link}
                className={`hover:text-accentColor selection:select-none font-semibold flex items-center gap-2`}
                key={index}
              >
                <BsDot className="text-xl" /> {item.name}
              </Link>
            </div>
          );
        })}
      </Collapse>
    </div>
  );
};

export default SubMenu;
