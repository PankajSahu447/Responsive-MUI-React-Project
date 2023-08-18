import React from "react";
import {
  AppBar,
  Box,
  Grid,
  useMediaQuery,
  useTheme,
  Stack,
} from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header1_1 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const iconStyle = {
    fontSize: 18,
    marginRight: 10,
    color: "white",
  };

  return (
    <>
      <AppBar
        sx={{
          // backgroundColor: isMobile && "khaki",
          minHeight: isMobile && 120,
          height: isMobile ? "auto" : '4vh',
          justifyContent: "center",
        //   flexWrap:'wrap'
        }}
      >
        <Stack
          direction={isMobile ? "column" : "row"} // Set the direction to "row"
          alignItems="center"
          width="100%"
          spacing={1}
          justifyContent={isMobile ? "space-around" : "space-between"}
          px={isMobile && 10}
          sx={{height: isMobile ? 'auto' : '4vh'}}
        >
          {/* grid 1 */}
          <Grid
            container
            item
            xs={12}
            md={6}
            sx={{ display: "flex", pl: !isMobile && 10, gap: !isMobile && 8 }}
            // border={"1px solid black"}
          >
            
            <Grid item xs={6} md={3}>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                //   border: "1px solid black",
                }}
              >
                <Box>
                  <LocalPhoneIcon style={iconStyle} />
                </Box>
                +221 33 66 22
              </Box>
            </Grid>

            <Grid item xs={6} md={6}>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                //   border: "1px solid black",
                }}
              >
                <Box>
                  <EmailIcon style={{ ...iconStyle }} />
                </Box>
                support@elextra.io
              </Box>
            </Grid>
          </Grid>
          {/* grid 1 */}

          {/* grid2 */}
          <Grid
            container
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              //   padding: isMobile ? 2 : 3,
              //   borderLeft: !isMobile &&  "2px solid white",
            //   border: "1px solid black",
              pl: !isMobile && 10, 
            //   gap: !isMobile && 1
            }}
          >

            <Grid item xs={4} md={4}>

              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  marginBottom: isMobile ? 2 : 0,
                //   border: "1px solid black",
                //   backgroundColor: 'yellow',
                //   pl:2
                justifyContent: !isMobile && 'flex-end'
                }}
              >
                <Box>
                  <LocationOnIcon style={iconStyle} />
                </Box>
                Locations
              </Box>
            </Grid>

            <Grid item xs={4} md={3}>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: isMobile ? "center" : "flex-end",
                //   border: "1px solid black",
                //   backgroundColor: 'red',
                borderLeft:  !isMobile && "2px solid white",
                // ml: !isMobile && 5
                // gap:2
                ml : !isMobile && '10px'
                }}
              >
                $Dollar (US) {!isMobile && <ArrowDropDownIcon />}
              </Box>
            </Grid>

            <Grid item xs={4} md={4}>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  ml: isMobile ? 0 : 3,
                //   border: "1px solid black",
                }}
              >
                EN {!isMobile && <ArrowDropDownIcon />}
              </Box>
            </Grid>
          </Grid>
          {/* grid2 */}
        </Stack>
      </AppBar>
    </>
  );
};

export default Header1_1;
