// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwipRectangle1 from "../images/SwipRectangle1.png";
import {Box, useMediaQuery,useTheme} from '@mui/material'

// Import Swiper styles
import "swiper/css";

const Swip = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >

      <SwiperSlide
        style={{
          // border: "1px solid black",
          background: `url(${SwipRectangle1}) top/cover`,
          backgroundPosition:  isMobile ? 'left': 'top',
          width: "90vw",
          height: isMobile ? '35vh' : "50vh",
          overflow:'hidden',
          borderRadius: '10px',
    margin: '0 31px',
        }}
      >

     
        <Box style={{marginLeft:'40rem', marginTop:'8rem'}}> From students to senior citizens this web portal of <p style={{color:'white'}}> "Products and Classifieds” </p> provides it all </Box>
          
      </SwiperSlide>

      <SwiperSlide
        style={{
          // backgroundRepeat: "round",
          // border: "1px solid black",
          background: `url('https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4cd6690ef44564f3.jpg?q=20') center/cover`,
          backgroundPosition:  'top',
          width: "70vw",
          height: isMobile ? '35vh' : "50vh",
        }}
      >
        <div></div>{" "}
      </SwiperSlide>


      <SwiperSlide
        style={{
          // backgroundRepeat: "round",
          // border: "1px solid black",
          // backgroundPosition: "center",
          // backgroundSize: "cover !important",
          background: `url(${SwipRectangle1}) center/cover `,
          backgroundPosition:  isMobile ? 'left': 'top',
          width: "70vw",
          height: isMobile ? '35vh' : "50vh",
        }}
      >
        <Box> <Box>
        <Box style={{marginLeft:'40rem', marginTop:'8rem'}}> From students to senior citizens this web portal of <p style={{color:'white'}}> "Products and Classifieds” </p> provides it all </Box>
          </Box>{" "}</Box>{" "}
      </SwiperSlide>


      <SwiperSlide
        style={{
          // backgroundRepeat: "round",
          // backgroundSize:'cover',
          // border: "1px solid black",
          // backgroundPosition: "center",
          background: `url('https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4cd6690ef44564f3.jpg?q=20') center/cover`,
          backgroundPosition:  'top',
          width: "70vw",
          height: isMobile ? '35vh' : "50vh",
        }}
      >
        
      </SwiperSlide>


    </Swiper>
  );
};

export default Swip;
