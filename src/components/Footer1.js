import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  styled,
  Stack,
  useTheme,
  useMediaQuery,
  TextField,
  Button,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import VectorFooter1 from "../images/VectorFooter1.png";

const Footer1 = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Banner = styled(Stack)`
    // display:flex;
    // flex-direction : ${isMobile} ? column : column ;
    // border: 1px solid black
  `;

  const InnerDiv = styled(Box)`
    border: 1px solid black;
    display: flex;
    flex-direction: ${isMobile && "row"};
    justify-content: space-evenly;
    align-items: center;
    background-color: #3187ed;
    padding: 100px 0;
  `;

  return (
    <Banner sx={{ mt: 5 }}>
      {/* 1st div */}
      <Box
        sx={{
          backgroundColor: "#F8F8F8",
          minHeight: "75px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          display: showBackToTop ? "flex" : "none", // Show when scrolled
          cursor: "pointer", // Add cursor pointer
        }}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Back to Top <KeyboardArrowUpIcon />
      </Box>

      {/* 2nd div */}
      <InnerDiv sx={{ flexDirection: isMobile && "column", gap: isMobile && 10 }}>
        {/* 2.1 */}
        <Box>
          <img src={VectorFooter1} alt="image1" />
        </Box>

        {/* 2.2 */}
        <Box sx={{ maxWidth: "550px", width: "auto", textAlign: "center" }}>
          <Typography sx={{ fontWeight: 1000, color: "white", px: 2, textAlign: "start" }}>
            Sign Up for Newsletter
          </Typography>
          <Typography sx={{ color: "white", px: 2, textAlign: "start" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Box>

        {/* 2.3 */}
        <Box sx={{ display: "flex", backgroundColor: "white", p: 2, borderRadius: 2 }}>
          <TextField
            fullWidth
            label={`Enter your email here`}
            id="fullWidth"
            sx={{ backgroundColor: "white", border: "hidden" }}
          />
          <Button variant="contained" sx={{ color: "white", backgroundColor: "#4D4D4D", borderRadius: 2.9 }}>
            Subscribe
          </Button>
        </Box>
      </InnerDiv>
    </Banner>
  );
};

export default Footer1;
