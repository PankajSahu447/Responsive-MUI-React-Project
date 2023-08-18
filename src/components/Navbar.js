import { AppBar, Toolbar, Box, Grid, Container, useMediaQuery, useTheme } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const iconStyle = {
    fontSize: 18,
    marginRight: 10,
    color: "white",
  };

  return (
    <AppBar>
      <Container>
        <Toolbar>
          {/* grid 1 */}
          <Grid container spacing={2} sx={{ border: '1px solid black' }}>
            <Grid item>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box>
                  <LocalPhoneIcon style={iconStyle} />
                </Box>
                +221 33 66 22
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box>
                  <EmailIcon style={{ ...iconStyle }}  />
                </Box>
                support@elextra.io
              </Box>
            </Grid>
          </Grid>

          {/* grid 2 */}
          <Grid container spacing={2} sx={{ border: '1px solid black' }} alignItems="center">
            <Grid item>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box>
                  <LocationOnIcon style={iconStyle} />
                </Box>
                Locations
              </Box>
            </Grid>
            {/* mygrid start */}
            <Grid item xs={isSmallerScreen ? 12 : 6}>
              <Box sx={{ display: 'flex', alignItems: 'center', borderLeft: '2px solid white', pl: isSmallerScreen ? 1 : 8 }}>
                $ Dollar (US) <ArrowDropDownIcon />
              </Box>
            </Grid>
            {/* mygrid end */}

            <Grid item xs={isSmallerScreen ? 12 : 6}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                EN <ArrowDropDownIcon />
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
