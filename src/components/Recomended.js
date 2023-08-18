import Recomend1 from "../images/Recomend1.png";
import Recomend2 from "../images/Recomend2.png";
import Recomend3 from "../images/Recomend3.png";
import Recomend4 from "../images/Recomend4.png";
import Recomend5 from "../images/Recomend5.png";
import React from "react";
import { Box, Grid, Paper, Typography, Stack, useTheme,useMediaQuery } from "@mui/material";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";

const Recomended = () => {
const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <>
    <Stack  direction={ isMobile ? 'column' : 'row'} justifyContent={  'space-between'} boxSizing={'border-box'} px={4} width={'100%'}  height={ 'auto'} gap={2} >
        <Typography variant="h6" fontWeight={'bolder'}>Recomended</Typography>
        <Typography color={'blue'}>View all</Typography>
    </Stack>
    <Stack direction={'row'} alignItems={'center'} sx={{display:'flex'}}>
    {!isMobile && <ArrowCircleLeftRoundedIcon/>}
      <Grid
        container
        m={"auto"}
        width={"100%"}
        height={"auto"}
        sx={{  px: 6, py: 4, my: 1 }}
      >
       
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
                width: "10rem",
                height: "8rem",
                borderRadius: "20px",
                backgroundImage: `url('${Recomend1}')`,
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
                width: "10rem",
                height: "8rem",
                borderRadius: "20px",
                backgroundImage: `url('${Recomend2}')`,
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
                width: "10rem",
                height: "8rem",
                borderRadius: "20px",
                backgroundImage: `url('${Recomend3}')`,
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
                width: "10rem",
                height: "8rem",
                borderRadius: "20px",
                backgroundImage: `url('${Recomend4}')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                mx: "auto",
              }}
            ></Box>

            <Box sx={{ display: "flex", flexDirection: "column", textAlign:'center' }}>
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
                width: "10rem",
                height: "8rem",
                borderRadius: "20px",
                backgroundImage: `url('${Recomend5}')`,
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
       
      </Grid>
      {!isMobile && <ArrowCircleRightRoundedIcon/>}
      </Stack>
    </>
  );
};

export default Recomended;
