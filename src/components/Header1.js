import {
  AppBar,
  Toolbar,
  Box,
  Grid,
  Container,
  useMediaQuery,
  useTheme,
  Stack,
} from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header1 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const iconStyle = {
    fontSize: 18,
    marginRight: 10,
    color: "white",
  };

  return (
    <>
      <AppBar sx={{ backgroundColor: "#3187ED" }}>
        <Stack
          direction="row" // Set the direction to "row"
          alignItems="center"
          width="100%"
          spacing={1}
          justifyContent="space-between"
        >
          {/* box 1 */}
          <Box sx={{ width: "40%", display: "flex", pl: 10 }}>
            <Box sx={{ display: "flex", width: "50%" }}>
              {" "}
              <Box>
                <LocalPhoneIcon style={iconStyle} />
              </Box>
              +221 33 66 22{" "}
            </Box>
            <Box sx={{ display: "flex", width: "50%" }}>
              <Box>
                <EmailIcon style={{ ...iconStyle }} />
              </Box>
              support@elextra.io
            </Box>
          </Box>

          {/* box 2 */}

          <Box sx={{ width: "40%", display: "flex" }}>
            <Box sx={{ display: "flex", width: "30%" }}>
              <Box>
                <LocationOnIcon style={iconStyle} />
              </Box>
              Locations
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "30%",
                borderLeft: "2px solid white",
                justifyContent: "flex-end",
              }}
            >
              $Dollar (US) <ArrowDropDownIcon />
            </Box>
            <Box sx={{ display: "flex", width: "30%", ml: 3 }}>
              EN <ArrowDropDownIcon />
            </Box>
          </Box>
        </Stack>
      </AppBar>
    </>
  );
};

export default Header1;
