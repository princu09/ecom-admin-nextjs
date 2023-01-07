import React, { useContext, useState } from "react";
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
  useTheme,
} from "@mui/material";
import { changeSidebar } from "../../redux/sidebarSlice";
import { useDispatch } from "react-redux";
import { ColorModeContext, tokens } from "../../theme/theme";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { palette } from "@mui/system";

const Navbar = () => {
  // Theme Changing
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const dispatch = useDispatch();

  const [openNotify, setOpenNotify] = useState(false);

  const handleNotify = (event) => {
    setOpenNotify((prev) =>
      prev !== event.currentTarget ? event.currentTarget : false
    );
  };

  const handleChange = () => {
    dispatch(changeSidebar());
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
          <Typography
            fontWeight={600}
            textAlign="center"
            className="lg:block hidden"
          >
            NextJS Admin.
          </Typography>
          <IconButton
            onClick={() => handleChange()}
            TouchRippleProps={{
              style: {
                backgroundColor: "#88133722",
              },
            }}
            sx={{
              borderRadius: 2,
              color: colors.primary[500],
              fontSize: 18,
              padding: 1,
            }}
          >
            <RiMenu2Line />
          </IconButton>
        </Stack>
        <Box width={400} className="lg:block hidden">
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
          >
            <AiOutlineSetting />
          </IconButton>
        </Box>
        <Box pr={1} position="relative" className="lg:block hidden">
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
      </Stack>
    </AppBar>
  );
};

export default Navbar;
