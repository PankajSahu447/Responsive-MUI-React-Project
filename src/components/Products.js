import React from "react";
import { Box, Grid, Paper, Button, Typography } from "@mui/material";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";

const Products = () => {
  return (
    <>
    
      <Grid container m={"auto"} width={"100%"}  height={"auto"} sx={{backgroundColor:'#F8F8F8', px:6, py:6 ,my: 4, }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={2.4}
          lg={2.4}
          xl={2.4}
          
          //   border={"1px solid black"}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Classified Products on the week
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              justifyContent: "space-around",
            }}
          >
            {" "}
            <ArrowCircleLeftRoundedIcon /> <ArrowCircleRightRoundedIcon />{" "}
          </Box>
          <Box>
            {" "}
            <Button variant="contained" sx={{ backgroundColor: "#81d8d0" }}>
              Explore
            </Button>{" "}
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={2.4}
          lg={2.4}
          xl={2.4}
        //   border={"1px solid black"}
        >
          <Paper>
            <Box
              sx={{
                width: "14rem",
                height: "11rem",
                borderRadius: "20px",
                backgroundImage: `url('https://images.pexels.com/photos/1034812/pexels-photo-1034812.jpeg?cs=srgb&dl=pexels-josh-sorenson-1034812.jpg&fm=jpg')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                mx: "auto",
              }}
            ></Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ width: "80%", height: "20%", mx: 2, my: 2, textAlign:'center' }}>
                <Typography variant="h6">
                  {" "}
                  Holy Stone HS470 Foldable GPS RC Drone
                </Typography>
              </Box>

              <Box sx={{ mx: 2, my: 2 , textAlign:'center'}}>
                <Typography color={"#81d8d0"}>$300.98</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={2.4}
          lg={2.4}
          xl={2.4}
        //   border={"1px solid black"}
        >
          <Paper>
            <Box
              sx={{
                width: "14rem",
                height: "11rem",
                borderRadius: "20px",
                backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhlNdB_wHRDc2eJD_ssUYwNctBz8uYsTughw&usqp=CAU')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                mx: "auto",
              }}
            ></Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ width: "80%", height: "20%", mx: 2, my: 2, textAlign:'center' }}>
                <Typography variant="h6">
                  {" "}
                  Holy Stone HS470 Foldable GPS RC Drone
                </Typography>
              </Box>

              <Box sx={{ mx: 2, my: 2 , textAlign:'center'}}>
                <Typography color={"#81d8d0"}>$300.98</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={2.4}
          lg={2.4}
          xl={2.4}
        //   border={"1px solid black"}
        >
          <Paper>
            <Box
              sx={{
                width: "14rem",
                height: "11rem",
                borderRadius: "20px",
                backgroundImage: `url('https://images.pexels.com/photos/1034812/pexels-photo-1034812.jpeg?cs=srgb&dl=pexels-josh-sorenson-1034812.jpg&fm=jpg')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                mx: "auto",
              }}
            ></Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ width: "80%", height: "20%", mx: 2, my: 2, textAlign:'center' }}>
                <Typography variant="h6">
                  {" "}
                  Holy Stone HS470 Foldable GPS RC Drone
                </Typography>
              </Box>

              <Box sx={{ mx: 2, my: 2, textAlign:'center' }}>
                <Typography color={"#81d8d0"}>$300.98</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={2.4}
          lg={2.4}
          xl={2.4}
        //   border={"1px solid black"}
        >
          <Paper>
            <Box
              sx={{
                width: "14rem",
                height: "11rem",
                borderRadius: "20px",
                backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhlNdB_wHRDc2eJD_ssUYwNctBz8uYsTughw&usqp=CAU')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                mx: "auto",
              }}
            ></Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ width: "80%", height: "20%", mx: 2, my: 2, textAlign:'center' }}>
                <Typography variant="h6">
                  {" "}
                  Holy Stone HS470 Foldable GPS RC Drone
                </Typography>
              </Box>

              <Box sx={{ mx: 2, my: 2, textAlign:'center' }}>
                <Typography color={"#81d8d0"}>$300.98</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    
    </>
  );
};

export default Products;
