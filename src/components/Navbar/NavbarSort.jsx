import React, { useState } from "react";
import "./Navbar.css";
import { Box, Menu, MenuItem, Typography } from "@mui/material";

const NavbarSort = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box id="navbar_sort">
      <Box className="container">
        <Box className="navbar_sort">
          <Typography variant="h5">All Shoes(999)</Typography>
          <Box className="navbar_sort_box">
            <Typography>Hide Filters</Typography>
            <Typography onClick={handleMenu}>Sort by</Typography>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Men</MenuItem>
              <MenuItem onClick={handleClose}>Women</MenuItem>
              <MenuItem onClick={handleClose}>Kids</MenuItem>
              <MenuItem onClick={handleClose}>Price: High-Low</MenuItem>
              <MenuItem onClick={handleClose}>Price: Low-High</MenuItem>
            </Menu>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NavbarSort;
