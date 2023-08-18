import React from 'react'
import {  Box, Typography,  useMediaQuery,useTheme } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';





const Header3 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));



  return (
    <Box sx={{ display:'flex', gap:2, justifyContent:isMobile ? "space-between" : 'center' , overflowX: isMobile && 'scroll' , backgroundColor:'white', mt: isMobile ? 40 : 11.25, mb:4, alignItems:'center' }}>
     <Typography sx={{display:'flex', textAlign:'center'}}>All Categories <KeyboardArrowDownIcon/></Typography>
     <Typography>Books</Typography>
     <Typography>Electronics</Typography>
     <Typography>Real Estate</Typography>
     <Typography>Cars-Bike</Typography>
     <Typography>Dorm-Furniture</Typography>
     <Typography>Men</Typography>
     <Typography>Women</Typography>
     <Typography>Music</Typography>
     <Typography>Hobbies-Games</Typography>
     <Typography>Toys</Typography>
     <Typography>Kids</Typography>
    </Box>
  )
}

export default Header3