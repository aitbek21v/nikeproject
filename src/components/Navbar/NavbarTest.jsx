import React, { useState } from "react";
import "./Navbar.css";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import logo from "../../image/Link - Nike Homepage → Img.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const NavbarTest = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  const [live, setLive] = useState(false);

  function handleMouse() {
    setLive(true);
  }
  console.log(live);
  const firstTitles = ["Shop All", "Gifts for SneakerHeads", "Gifts Under $30"];
  const secondTitles = [
    "New Arrivels",
    "Best Sellers",
    "Member Product",
    "New & Upcoming Drops",
    "SNKRS Laund Calendar",
    "Latest in Danks",
    "Nike Tech",
  ];
  const thirdTitles = [
    "Air Jordan 1",
    "Air Force",
    "Dunk",
    "Air Max",
    "Blazer",
    "Pegasus",
    "Metcon",
    "LeBron",
  ];
  const man = [" Shoes", "Clothing"];

  const women = ["Shoes", "Clothing"];

  const kids = [" Shoes", " Clothing"];

  const jordan = [
    "Jordan",
    "Shop All",
    " Latest in Jordan",
    "Men",
    "  Women",
    " Kids",
    "Basketball",
  ];

  return (
    <Box id="navbar_test">
      <Box className="container">
        <Box className="navbar_test">
          <Avatar
            sx={{ objectFit: "cover", maxWidth: "80px", width: "100%" }}
            src={logo}
            alt="logo"
          />
          <Box className="navbar_test_nav">
            <Typography onMouseOver={handleMouse}>New & Featured</Typography>
            <Typography>Men</Typography>
            <Typography>Women</Typography>
            <Typography>Kids</Typography>
            <Typography>Accessories</Typography>
          </Box>
          <Box className="navbar_test_icons">
            <Search
              sx={{ background: "rgb(228, 227, 227)", borderRadius: "30px" }}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <IconButton>
              <FavoriteBorderIcon sx={{ fontSize: "25px" }} />
            </IconButton>
            <IconButton>
              <WorkOutlineIcon sx={{ fontSize: "25px" }} />
            </IconButton>
          </Box>
        </Box>

        <Box
          // onMouseLeave={setLive(!live)}
          sx={{
            width: "100%",
            height: 500,
            display: live ? "flex" : "none",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Box>
            <Typography variant="h5">Valentines Day shop</Typography>
            {firstTitles.map((el) => (
              <Typography variant="body2">{el}</Typography>
            ))}
          </Box>
          <Box>
            <Typography variant="h5">New & Featured</Typography>
            {secondTitles.map((el) => (
              <Typography variant="body2">{el}</Typography>
            ))}
          </Box>
          <Box>
            <Typography variant="h5">Shop Icons</Typography>
            {thirdTitles.map((el) => (
              <Typography variant="body2">{el}</Typography>
            ))}
          </Box>
          <Box>
            <Box>
              <Typography variant="h6">New for Man</Typography>
              {man.map((el) => (
                <Typography variant="body2">{el}</Typography>
              ))}
            </Box>
            <Box>
              <Typography variant="h6">New for Woman</Typography>
              {women.map((el) => (
                <Typography variant="body2">{el}</Typography>
              ))}
            </Box>
            <Box>
              <Typography variant="h6">New rof Kids</Typography>
              {kids.map((el) => (
                <Typography variant="body2">{el}</Typography>
              ))}
            </Box>
          </Box>
          <Box>
            <Typography variant="h5">Jordan</Typography>
            {jordan.map((el) => (
              <Typography variant="body2">{el}</Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NavbarTest;
