import React, { useState } from "react";
import { BsBell, BsSearch } from "react-icons/bs";
import { RiMenu2Line } from "react-icons/ri";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { AiOutlineSetting } from "react-icons/ai";
import {
  AppBar,
  Box,
  Stack,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Popper,
  Paper,
  Fade,
} from "@mui/material";

const Navbar = ({ menu, setMenu }) => {
  const [openNotify, setOpenNotify] = useState(null);

  const handleNotify = (event) => {
    setOpenNotify((prev) =>
      prev !== event.currentTarget ? event.currentTarget : null
    );
  };

  return (
    <AppBar position="relative" elevation={0} color="transparent">
      <Stack direction="row" alignItems="center" py={1.5} spacing={3}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          width={230}
        >
          <Typography fontWeight={600} textAlign="center">
            NextJS Admin.
          </Typography>
          <IconButton
            onClick={() => setMenu(!menu)}
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
          >
            <RiMenu2Line />
          </IconButton>
        </Stack>
        <Box width={400}>
          <TextField
            placeholder="Search..."
            size="small"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BsSearch sx={{ fontSize: 18 }} />
                </InputAdornment>
              ),
              endAdornment: (
                <IconButton
                  size="small"
                  TouchRippleProps={{
                    style: {
                      backgroundColor: "#88133722",
                    },
                  }}
                  sx={{
                    borderRadius: 2,
                    color: "#881337",
                  }}
                >
                  <TbAdjustmentsHorizontal />
                </IconButton>
              ),
              sx: {
                fontSize: 15,
                borderRadius: 2,
                py: 0.5,
              },
            }}
          />
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box position="relative">
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
            onClick={handleNotify}
          >
            <BsBell />
          </IconButton>
          <Popper
            transition
            anchorEl={openNotify}
            open={openNotify}
            placement="bottom-end"
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper
                  sx={{ padding: 3, maxWidth: 300, mt: 1, borderRadius: 3 }}
                  elevation={2}
                >
                  <Box>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Consequatur totam doloremque aliquid illo dicta illum autem
                    nulla eius amet molestias.
                  </Box>
                </Paper>
              </Fade>
            )}
          </Popper>
        </Box>
        <Box pr={1} position="relative">
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
          >
            <AiOutlineSetting />
          </IconButton>
        </Box>
      </Stack>
    </AppBar>
  );
};

export default Navbar;

// <div className="w-full h-20 flex items-center gap-5">
//   <div className="min-w-[230px] flex justify-between items-center">
//     <p className="font-semibold text-lg">NextJS Admin.</p>
//     <button
//       className="text-accentColor bg-accentLight p-2 rounded-lg"
//       onClick={() => setMenu(!menu)}
//     >
//       <RiMenu2Line />
//     </button>
//   </div>
//   <div className="w-full flex justify-between items-center">
//     <div className="lg:min-w-[35%] flex items-center relative">
//       <BsSearch className="absolute left-2 text-accentColor" />
//       <input
//         type="text"
//         className="border border-accentLight rounded-lg w-full px-10 h-12 focus:outline-accentColor"
//         placeholder="Search Product Here..."
//       />
//       <TbAdjustmentsHorizontal className="absolute right-2 text-3xl bg-accentLight text-accentColor hover:text-white hover:bg-accentColor p-1 rounded-lg" />
//     </div>
//     <div className="flex items-center gap-5">
//       <BsBell className="bg-accentLight text-accentColor hover:text-white hover:bg-accentColor text-3xl p-1.5 rounded-lg" />
//       <AiOutlineSetting className="bg-accentLight text-accentColor hover:text-white hover:bg-accentColor text-3xl p-1.5 rounded-lg" />
//     </div>
//   </div>
// </div>
