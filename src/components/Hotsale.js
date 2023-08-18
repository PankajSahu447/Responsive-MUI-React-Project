import Recomend1 from "../images/Recomend1.png";
import Recomend2 from "../images/Recomend2.png";
import Recomend3 from "../images/Recomend3.png";
import Recomend4 from "../images/Recomend4.png";
import Recomend5 from "../images/Recomend5.png";
import React from "react";
import { Box, Grid, Paper, Typography, Stack, useTheme,useMediaQuery, Button } from "@mui/material";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";

const Hotsale = () => {
const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <>
    <Stack direction={ isMobile ? 'column' : 'row'} justifyContent={  'space-between'} boxSizing={'border-box'} px={4} width={'100%'}  height={'auto'} mt={10} >
        <Typography variant="h5" fontWeight={'bold'}>Hot Sale !</Typography>
        
    </Stack>
    <Stack direction={'row'} alignItems={'center'}>
    {!isMobile && <ArrowCircleLeftRoundedIcon/>}
      <Grid
        container
        m={"auto"}
        width={"100%"}
        height={"auto"}
        sx={{  px: 6, py: 6, my: 4 }}
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
                backgroundImage: `url('https://s3-alpha-sig.figma.com/img/a346/2439/c78ae2d51088af7e675ebf226bc24bbb?Expires=1693180800&Signature=T3k1zHjOc7PtIHwu3tCuUKwMNGtbK0GlGizMpYqgnMQFiiAbXqEqddlXA6PUy2tbQvpoHYfRa3c4AEtcqDPiYKK0A66WEQqdvwViTesNXwx7R52PWAyzRMvTJbk19qylj8MGdhKxEYJYNNAGcHoPdNB326VlnjYb2Jf011VRYsuyC7AGHLNHLPd0igJsLoxXtDNTXnwWuuS4gG-QpRiImta3aWDNFpRZu-WHhNZEih5G~vlatxui5NTN41682EOyzKSZuS5hWFK7Jqp1-5qssHKFHqiqtTKEOwbgSDlTIIzWmnm-qSSaT5iUxqnZ0pnBQUvyLVI7Dis9X-vKZJHBiA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')`,
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
                <Button variant="outlined" sx={{borderRadius:'10px'}}>add to cart</Button>
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
                backgroundImage: `url('https://s3-alpha-sig.figma.com/img/1652/8bb8/38e2b26593ad69082958a89e52e214ee?Expires=1693180800&Signature=LQsNPJBhhEEJaFEPrGCM4XJSpbrvUwA5CEn5nlrKN7rqEn0fSfKHmj50lUwKwrbffN65VSdjSMth5MXIWEmD20Z5QaMq93GMR7UGw1teIt0~aAfj0PuMbBJngWWXCJggKcLoVdx-Gk4wTbu-TrD8Ijz~2hjE7ebc7k4J8ejRZlZCZIgnNlzwwah4lKBRUsHueeTWBWTaRcop1AGbPl7YRwCSZ6Rl0FvbOo4N-9MXYJ96GquJj04rjTx1zd6yN7Vrx6Y2hnIIJiTqisQ6rOYGnALCotv3bzrJuanMfPqUe0p9roxo0e~A3zMyBE~qWS5ULdHKWV3XBdKU--ESsqEDJw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')`,
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
                <Button variant="outlined" sx={{borderRadius:'10px'}}>add to cart</Button>
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
                backgroundImage: `url('https://s3-alpha-sig.figma.com/img/778b/3109/641b5831bee05cc9bf6a811ee7d5fc55?Expires=1693180800&Signature=dt7HR08IjK~6t4xLiBnJGNn1zJU9NiNL05CdNCUzD~JGGBi1JamWXdTJMAeG-B4j9doD9tSakLi2nVFLy83ZcUuO-hURbMUKptVdkjwS2txX6SpeJxQZe4kUcASlGCKC7oOyZBDOZ~IDtnDI1QgGS3bPgKBI25dL~hxLb2qYYDEXZZYX2HyiQ3J-NTcVHwXaUohbPhXLdzXKOokg~hsdRQPhQ7m0J58JZyuPSCaY-kfxFyzNy6Eae4r3sTAGcd1-ReSL-sis4Thk8lDSJaNy0ny09BAxNN3hXVPHb3CXH-bDysK4jqYNqAykFR0PtMozFMyKLauk5w0MHanW4a4RAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')`,
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
                <Button variant="outlined" sx={{borderRadius:'10px'}}>add to cart</Button>
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
                backgroundImage: `url('https://s3-alpha-sig.figma.com/img/5bc8/89a6/9f7768378d773c3501469ba2b6ea2d55?Expires=1693180800&Signature=QlP3x8uTAhqMAwrKOIln98kvlbUXmVa-qf0ASQPn7wWgYBgbibG3rMcFMwSq0GEMFcH4~iH65u6oAwxe7E3oW5rUj76GfbaTob~doQQ1KHdNZ1mPaqGuGtPDNErXcQdYvuQnlGzIM9nFvSW1Xz4bkflvY4YPFGoG6HAO6cnh0Um9hjxswc713G8njtoBNSCHI3MLCKU~l4DwIhvPMBwCJjPIhXbkrbsBQ0gsuzTxysanFk9CclNFJHT7~jnk8JS301b9KLwzqn9QdIxe3AjwuRSQHCoa9JQhWL3hKWFRJzCSACq0mGpMnRuiG2UwVlEmmMBmYx4BADbqsijlzsXWAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')`,
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
                <Button variant="outlined" sx={{borderRadius:'10px'}}>add to cart</Button>
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
                backgroundImage: `url('https://s3-alpha-sig.figma.com/img/5366/7b25/c45494084d3b2837640e32d46935b32e?Expires=1693180800&Signature=T5K7ARjybYdUihdRkHPOCVKQfuDgzdANymJSROhpQ47YUpPnRQXxAwYbraDeBW3VgdWVbEaR59zBEHVOX0mPllcime7UMlln6h6pHsqVAa0FBPyDyFhy6XVBvm0MILJo4umnvFhp4ZomsUrQ4-xg3rGHnX49kQh0U1KyAkRzMuShTwfjjZN4~6jKsUNgfazIDJ8DCn2DbGSLRrsvPlbGfUm3AafYAdGiJ0YEL58Z9eOLUySgNYbexfEUHVl-rsCe029T9NM~r7n-r-QRR9bvMSC3VOrE9y3YdU-wpTaBpyMSkYvfAtIZs9obsBxQsffei6nqcGHVjsItEguEwiSqHQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')`,
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
                <Button variant="outlined" sx={{borderRadius:'10px'}}>add to cart</Button>
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

export default Hotsale;
