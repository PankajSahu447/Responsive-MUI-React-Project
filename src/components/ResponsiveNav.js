import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  CssBaseline,
  Grid,
  Box,
  Stack,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const BlackNavbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  //   const list = () => (
  //     <List>
  //       <ListItem button>
  //         <ListItemText primary="Home" />
  //       </ListItem>
  //       <ListItem button>
  //         <ListItemText primary="About" />
  //       </ListItem>
  //       <ListItem button>
  //         <ListItemText primary="Services" />
  //       </ListItem>
  //       <ListItem button>
  //         <ListItemText primary="Contact" />
  //       </ListItem>
  //     </List>
  //   );

  const iconStyle = {
    fontSize: 18,
    marginRight: 10,
    color: "white",
  };

  const MyGrid = styled(Grid)`
    // background-color : yellow ;
    width: 100vw;
    display: flex;
    justify-content: center;
    margin: 0 4px;
  `;
  const GridInner = styled(Grid)`
    // border: 1px solid black;
  `;

  return (
    <>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          height: "4vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Toolbar style={{ height: "4vh" }}>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ mt:-1.10, display:'flex', alignItems:'center', fontSize:'1px' }}
            >
              <MenuIcon />
              {/* <Box sx={{display:'flex', flexDirection:'column', width:'90vw', height:'90vh'}}> 
                <Box>1</Box>
                <Box>2</Box>
                <Box>3</Box>
                <Box>4</Box>
              </Box> */}
            </IconButton>
          )}

          {!isMobile && (
            <MyGrid container>
              <GridInner item md={2}>
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
              </GridInner>
              <GridInner item md={2}>
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
              </GridInner>
              <GridInner item md={2}>
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    marginBottom: isMobile ? 2 : 0,
                    //   border: "1px solid black",
                    //   backgroundColor: 'yellow',
                    //   pl:2
                    justifyContent: !isMobile && "flex-end",
                  }}
                >
                  <Box>
                    <LocationOnIcon style={iconStyle} />
                  </Box>
                  Locations
                </Box>
              </GridInner>
              <GridInner item md={2}>
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: isMobile ? "center" : "flex-end",
                    //   border: "1px solid black",
                    //   backgroundColor: 'red',
                    borderLeft: !isMobile && "2px solid white",
                    // ml: !isMobile && 5
                    // gap:2
                    ml: !isMobile && "10px",
                  }}
                >
                  $Dollar (US) {!isMobile && <ArrowDropDownIcon />}
                </Box>
              </GridInner>
              <GridInner item md={2}>
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
              </GridInner>
            </MyGrid>

            // <Stack
            //   direction={isMobile ? "column" : "row"} // Set the direction to "row"
            //   alignItems="center"
            //   width="100%"
            //   spacing={1}
            //   justifyContent={isMobile ? "space-around" : "space-between"}
            //   px={isMobile && 10}
            //   sx={{ height: isMobile ? "auto" : "4vh" }}
            // >
            //   {/* grid 1 */}
            //   <Grid
            //     container
            //     item
            //     xs={12}
            //     md={6}
            //     sx={{
            //       display: "flex",
            //       pl: !isMobile && 10,
            //       gap: !isMobile && 8,
            //     }}
            //     // border={"1px solid black"}
            //   >
            //     <Grid item xs={6} md={3}>
            //       <Box
            //         sx={{
            //           display: "flex",
            //           width: "100%",
            //           //   border: "1px solid black",
            //         }}
            //       >
            //         <Box>
            //           <LocalPhoneIcon style={iconStyle} />
            //         </Box>
            //         +221 33 66 22
            //       </Box>
            //     </Grid>

            //     <Grid item xs={6} md={6}>
            //       <Box
            //         sx={{
            //           display: "flex",
            //           width: "100%",
            //           //   border: "1px solid black",
            //         }}
            //       >
            //         <Box>
            //           <EmailIcon style={{ ...iconStyle }} />
            //         </Box>
            //         support@elextra.io
            //       </Box>
            //     </Grid>
            //   </Grid>
            //   {/* grid 1 */}

            //   {/* grid2 */}
            //   <Grid
            //     container
            //     item
            //     xs={12}
            //     md={6}
            //     sx={{
            //       display: "flex",
            //       //   padding: isMobile ? 2 : 3,
            //       //   borderLeft: !isMobile &&  "2px solid white",
            //       //   border: "1px solid black",
            //       pl: !isMobile && 10,
            //       //   gap: !isMobile && 1
            //     }}
            //   >
            //     <Grid item xs={4} md={4}>
            //       <Box
            //         sx={{
            //           display: "flex",
            //           width: "100%",
            //           marginBottom: isMobile ? 2 : 0,
            //           //   border: "1px solid black",
            //           //   backgroundColor: 'yellow',
            //           //   pl:2
            //           justifyContent: !isMobile && "flex-end",
            //         }}
            //       >
            //         <Box>
            //           <LocationOnIcon style={iconStyle} />
            //         </Box>
            //         Locations
            //       </Box>

            //     </Grid>

            // 4
            //     <Grid item xs={4} md={3}>
            //       <Box
            //         sx={{
            //           display: "flex",
            //           width: "100%",
            //           justifyContent: isMobile ? "center" : "flex-end",
            //           //   border: "1px solid black",
            //           //   backgroundColor: 'red',
            //           borderLeft: !isMobile && "2px solid white",
            //           // ml: !isMobile && 5
            //           // gap:2
            //           ml: !isMobile && "10px",
            //         }}
            //       >
            //         $Dollar (US) {!isMobile && <ArrowDropDownIcon />}
            //       </Box>
            //     </Grid>
            // 5
            //     <Grid item xs={4} md={4}>
            //       <Box
            //         sx={{
            //           display: "flex",
            //           width: "100%",
            //           ml: isMobile ? 0 : 3,
            //           //   border: "1px solid black",
            //         }}
            //       >
            //         EN {!isMobile && <ArrowDropDownIcon />}
            //       </Box>
            //     </Grid>
            //   </Grid>
            //   {/* grid2 */}
            // </Stack>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer    */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {/* {list()} */}
        {/* 
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "90vw",
            height: "90vh",
          }}
        > */}

        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            px: 2,
            gap: 1,
            mt: 2,
            width: "70vw",
          }}
          // border={"1px solid black"}
        >
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                //   border: "1px solid black",
              }}
            >
              {/* <Box>
                  <LocalPhoneIcon style={iconStyle} />
                </Box> */}
              +221 33 66 22
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                //   border: "1px solid black",
              }}
            >
              {/* <Box>
                  <EmailIcon style={{ ...iconStyle }} />
                </Box> */}
              support@elextra.io
            </Box>
          </Grid>

          {/* grid 1 */}

          {/* grid2 */}

          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                // marginBottom: isMobile ? 2 : 0,
                //   border: "1px solid black",
                //   backgroundColor: 'yellow',
                //   pl:2
                justifyContent: "flex-start",
              }}
            >
              {/* <Box>
                  <LocationOnIcon style={iconStyle} />
                </Box> */}
              Locations
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "flex-start",
                // border: "1px solid black",
                //   backgroundColor: 'red',
                borderLeft: !isMobile && "2px solid white",
                // ml: !isMobile && 5
                // gap:2
                ml: !isMobile && "10px",
              }}
            >
              $Dollar (US) {!isMobile && <ArrowDropDownIcon />}
            </Box>
            {/* </Grid>

            <Grid item xs={12}> */}

            <Box
              sx={{
                display: "flex",
                width: "100%",
                ml: isMobile ? 0 : 3,
                //   border: "1px solid black",
              }}
            >
              EN
            </Box>
          </Grid>
        </Grid>
        {/* </Box> */}
      </Drawer>
    </>
  );
};

export default BlackNavbar;
