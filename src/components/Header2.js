import { Box, AppBar, Stack, Button, TextField , useTheme,useMediaQuery} from "@mui/material";
import Logo from "../images/Logo.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonPinIcon from '@mui/icons-material/PersonPin';


const Header2 = () => {
  return (
    <>
      <AppBar
        sx={{ mt: 3, backgroundColor: "white", height: 60, color: "black" }}
      >


        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems={"center"}
          px={10}
        >


          {/* image of logo */}
          <Box sx={{ width: 150, }}>
            <img src={Logo} alt="Logo" style={{ width: 150 }} />
          </Box>

          
          <Box sx={{ display: "flex", width: 200, justifyContent: "center" }}>

            <Box sx={{ width: 150, textAlign:"end", pr:1 }}>
              Classifieds
            </Box>
            
            <Box sx={{ width: 20, }}>
              <KeyboardArrowDownIcon />
            </Box>

          </Box>
          
          <Box sx={{ display: "flex", width: 400,  justifyContent:'center', alignItems:'center'}}>
          <TextField 
          placeholder="Search here..."
          sx={{width:400,
            // borderRadius: 5,
            height:'100%'
        }}

          />
            <Box><SearchIcon sx={{color:'#3187ED'}} /></Box>
          </Box>
          <Box sx={{ display: "flex" , justifyContent:'space-around', width:200}}>
            <Box ><FavoriteBorderIcon /></Box>
            <Box ><ShoppingBasketIcon /></Box>
            <Box ><PersonPinIcon /></Box>
          </Box>
          <Box>
            <Button variant="contained" sx={{backgroundColor:'#00C6D7'}}>classfeild</Button>
          </Box>
        </Stack>
      </AppBar>
    </>
  );
};

export default Header2;
