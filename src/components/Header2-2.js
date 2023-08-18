import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Grid,
  Button,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Logo from "../images/Logo.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import Header3 from "./Header3";

const Header2_2 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);



  return (
    <>
      <AppBar
        sx={{
          mt: isMobile ? 3 : 3,
          backgroundColor: "white",
          height: isMobile ? 200 : 60,
          color: "black",
          transition: "top 0.3s",
          top: visible ? -5 : -100,
        }}
      >
        <Grid
          container
          direction={isMobile ? "column" : "row"}
          justifyContent= {isMobile ? 'flex-start' : "space-around"} 
          alignItems={isMobile ? "center" : "center"}
          px={isMobile ? 2 : 10}
          // flexWrap={isMobile && 'wrap'}
          flexWrap={'nowrap'}
          
        >
          {/* Image of logo */}
          <Grid item xs={2} sx={{ textAlign: 'center', width: isMobile && 200  }}>
            <img src={Logo} alt="Logo" style={{ maxWidth: isMobile ? "60%" : '90%',  }} />
          </Grid>

          {/* Classifieds */}
          <Grid item xs={isMobile ? 2 : 2} sx={{ display: "flex", justifyContent: "center", marginBottom: isMobile ? 2 : 0,   }}>
            <Box sx={{ width: isMobile ? "100%" : 150, textAlign: isMobile ? "center" : "end", pr: isMobile ? 0 : 1 }}>
              Classifieds
            </Box>
            {!isMobile && <Box sx={{ width: 20 }}>
              <KeyboardArrowDownIcon />
            </Box>}
          </Grid>

          {/* Search */}
          <Grid item xs={isMobile ? 4 : 4} sx={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
            <TextField
              placeholder="Search here..."
              sx={{
                width: "100%",
                height: '100%',
              }}
            />
            <Box><SearchIcon sx={{ color: '#3187ED' }} /></Box>
          </Grid>

          {/* Icons */}
          <Grid item xs={isMobile ?  2 : 2} sx={{ display: "flex", justifyContent: 'space-around',  }}>
            <Box ><FavoriteBorderIcon /></Box>
            <Box ><ShoppingBasketIcon /></Box>
            <Box ><PersonPinIcon /></Box>
          </Grid>

          {/* Button */}
          <Grid item xs={isMobile ? 2 : 2} sx={{ textAlign: 'center' }}>
            <Button variant="contained" sx={{ backgroundColor: '#00C6D7' }}>classfeild</Button>
          </Grid>

        </Grid>
      {/* <Header3/> */}
      </AppBar>
    </>
  );
};

export default Header2_2;
