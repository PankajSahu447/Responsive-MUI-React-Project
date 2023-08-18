import React from "react";
import { Grid, Box, styled, Typography, Button } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Logo from "../images/Logo.jpg";
import headphone from "../images/headphone_footer.svg";
import apple from "../images/AppleVector.svg";
import playstore from "../images/playstoreVector.svg";

const Footer2 = () => {
  const MyGrid = styled(Grid)`
    padding: 20px 70px;
    flex-wrap:wrap;
    
  `;
  const MyBox = styled(Grid)`
    // border: 1px solid black;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  `;

  return (
    <MyGrid container  >

      <MyBox sm={3} xs={12} md={3} sx={{pl:2}} item>
        <Box>
          {" "}
          <img
            src={Logo}
            alt="Logo"
            style={{ objectFit: "fill", height: "60px" }}
          />{" "}
        </Box>
        <Box>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            mt: 5,
            gap: 1,
            flexWrap:'wrap'
            
          }}
        >
          <YouTubeIcon
            sx={{
              borderRadius: 2,
              p: 0.5,
              color: "grey",
              backgroundColor: "#F8F8F8",
            }}
          />
          <LinkedInIcon
            sx={{
              borderRadius: 2,
              p: 0.5,
              color: "grey",
              backgroundColor: "#F8F8F8",
            }}
          />
          <TwitterIcon
            sx={{
              borderRadius: 2,
              p: 0.5,
              color: "grey",
              backgroundColor: "#F8F8F8",
            }}
          />
          <FacebookIcon
            sx={{
              borderRadius: 2,
              p: 0.5,
              color: "grey",
              backgroundColor: "#F8F8F8",
            }}
          />
          <InstagramIcon
            sx={{
              borderRadius: 2,
              p: 0.5,
              color: "grey",
              backgroundColor: "#F8F8F8",
            }}
          />
        </Box>
      </MyBox>
      
      <MyBox sm={2} xs={12} md={2} item>
        <Typography
          fontSize={20}
          sx={{ fontWeight: "bolder", lineHeight: 1.5 }}
        >
          QUICK LINKS
        </Typography>
        <Typography sx={{ lineHeight: 2.5 }}>Products</Typography>
        <Typography sx={{ lineHeight: 2.5 }}> Classifieds Sign Up</Typography>
        <Typography sx={{ lineHeight: 2.5 }}>Contact us</Typography>
        <Typography sx={{ lineHeight: 2.5 }}>Login</Typography>
        <Typography sx={{ lineHeight: 2.5 }}>Sign Up</Typography>
      </MyBox>
      <MyBox sm={2} xs={12} md={2} item>
        <Typography
          fontSize={20}
          sx={{ fontWeight: "bolder", lineHeight: 1.5 }}
        >
          Customer AREA{" "}
        </Typography>
        <Typography sx={{ lineHeight: 2.5 }}>Partner with us </Typography>
        <Typography sx={{ lineHeight: 2.5 }}> Training</Typography>
        <Typography sx={{ lineHeight: 2.5 }}>Procedures</Typography>
        <Typography sx={{ lineHeight: 2.5 }}>Terms</Typography>
        <Typography sx={{ lineHeight: 2.5 }}>Privacy Policy</Typography>
      </MyBox>
      <MyBox sm={2} xs={12} md={2} item>
        <Typography
          fontSize={20}
          sx={{ fontWeight: "bolder", lineHeight: 1.5 }}
        >
          Vendor AREA
        </Typography>
        <Typography sx={{ lineHeight: 2.5 }}>Products</Typography>
        <Typography sx={{ lineHeight: 2.5 }}> Classifieds Sign Up</Typography>
        <Typography sx={{ lineHeight: 2.5 }}>Contact us</Typography>
        <Typography sx={{ lineHeight: 2.5 }}>Login</Typography>
        <Typography sx={{ lineHeight: 2.5 }}>Sign Up</Typography>
      </MyBox>


      <MyBox sm={3} xs={12} md={3} item gap={2.5} >

        <Box>
          <Typography
            fontSize={20}
            sx={{ fontWeight: "bolder", lineHeight: 1.5 }}
          >
            Contacts
          </Typography>
        </Box>

        <Typography >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </Typography>

{/* question  */}
        <Box sx={{display:'flex', gap:2.5}}>

{/* img  */}
            <img src={headphone} alt="headphone" />

{/* text  */}
          <Box sx={{display:'flex', flexDirection:'column'}}>
            <Typography>Have any question?</Typography>
            <Typography color={"#3187ED"} width={110}>+ 123 456 789</Typography>
            </Box>

{/* chat button  */}
          <Box>
            <Button variant="outlined">Chat</Button>
          </Box>
        </Box>



{/* app and play store   */}
        <Box sx={{ color: "white", display: "flex", gap: 5 }}>
          <Box
            sx={{
              width: 120,
              height: 60,
              backgroundColor: "#232323",
              borderRadius: 2,
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <img src={apple} alt="apple" style={{ width: "20px" }} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <Typography sx={{ fontSize: "0.6rem" }}>
                Download on the
              </Typography>
              <Typography sx={{ fontWeight: "bolder" }}>App Store</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: 120,
              height: 60,
              backgroundColor: "#232323",
              borderRadius: 2,
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <img src={playstore} alt="playstore" style={{ width: "20px" }} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <Typography sx={{ fontSize: "0.6rem" }}>GET IT ON</Typography>
              <Typography sx={{ fontWeight: "bolder" }}>Google Play</Typography>
            </Box>
          </Box>
        </Box>
      </MyBox>
    </MyGrid>
  );
};

export default Footer2;
