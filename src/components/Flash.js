import React from "react";
import { Grid,Box, styled, Typography , useTheme,useMediaQuery} from "@mui/material";

const Banner = styled(Grid)`
  background-color: #3187ed;
  border-radius: 20px;
  border: 1px solid black;
  height: auto ;
  width: 85vw;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 50px 20px;
  gap:10px;
`;

const Flash = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    
  return (
    <Banner container  >

      <Box>
        <Typography sx={{ color: "white", fontSize: "35px" }}>
          Flash Sale
        </Typography>
        <Typography sx={{ color: "white", width: "300px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </Typography>
        <Typography
          sx={{ color: "white", fontWeight: "bolder", fontSize: "40px" }}
        >
          05 : 42 : 19 : 54
        </Typography>
      </Box>

{/* 2nd box for image card  */}

      <Box sx={{display:'flex',  gap:'20px', flexDirection:isMobile && 'column'}}>

        {/* box 1  */}

        <Box sx={{ backgroundColor: "white", display: "flex",  width:'300px', height:'200px', borderRadius:'20px' }}>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://s3-alpha-sig.figma.com/img/662f/f621/daffb44603cacfe2c72d0be6cf599566?Expires=1693180800&Signature=SL8cnppIlQ24ZgpxH-j9Lex9NYEw7gV9Xt6mFzAejoo0zvin-ojnVdoJjtqi-SY-hCFkOlY1AGX-Ajo1thN4KojHEzwVMgN4GDth5iR02Fwr46ggNJ3ejxVQBbiiMR-jF9v8pPQy5HCW5-NJY83Nozj953wArKg52tBEClxrIJuX3SyNprybeBylR5PW9MytdSL6iZHyTsXmOCP7xybqscNRnhJA5pSP25ENv8tFGyppTMgtL8DYKUGdEitMu3fAqjyrnbi3P1F3QGnqODkW5eSshwBJIeKpBUkwsbI2bbDwmaWFLdNdA0O~HTv4vN06FEHBhZ3CVQr0WI~iIb-70g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="img watch"
              style={{ width: "100px", height: "100px" }}
            />
          </Box>

          <Box
            sx={{
              width: "200px",
              height: "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ width: "200px", height: "100px" }}>
              Casio G-Shock Ana-Digi Quartz World Time 200m Black
            </Typography>
            <Typography sx={{ color: "#3187ED" }}>$33.3</Typography>
          </Box>
        </Box>

{/* box 2  */}
        <Box sx={{ backgroundColor: "white", display: "flex", width:'300px', height:'200px',  borderRadius:'20px' }}>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://s3-alpha-sig.figma.com/img/63c2/d849/20f367e375a2355fc7d0b71d2785c6d5?Expires=1693180800&Signature=i2U4sxykH7l-mZhLFFLw4No2EvwmqxnlXByjRxbBe6zLsInaf1etroAnqJVN4NZoXCjUcLZ2gz4DFh6sQ2J2ulgIzhe6fDDIz4FulO5ZveSOgdQqfbP9kgXglMnwd1fCaDPnJB9DlMt5ORgz4NriTskrhVI79-UZnmDfYS94HYENjKWxcX3DpftCFl3I7aF9QsTk7lH~LgmvcJ9zjQGMfI1d85yHrlY~LGnHftq2vX~yMlotfjemzyceH4x7rpwBV620-Q6MWsr9FHY7vGkOYAJ5Q6EANtYKG1P5IIsNoVoV83n27AmdF93rC7MdNMlQ0DQsHCVTrLebObfXwkTEBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="img watch"
              style={{ width: "100px", height: "100px" }}
            />
          </Box>
          
          <Box
            sx={{
              width: "200px",
              height: "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ width: "200px", height: "100px" }}>
              Casio G-Shock Ana-Digi Quartz World Time 200m Black
            </Typography>
            <Typography sx={{ color: "#3187ED" }}>$33.3</Typography>
          </Box>
        </Box>
        
      </Box>
    </Banner>
  );
};

export default Flash;
