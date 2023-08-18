import React from "react";
import { Box, styled, Grid, Typography } from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

const Card = styled(Grid)`
//   border: 1px solid black;
  height: auto;
  // background-color : yellow ;
  gap: 20px;
  margin: auto;
  justify-content: center;
  align-items: center;
  padding: 40px 10px;
  width:85vw;
`;
const InnerCard = styled(Box)`
  width: 500px;
  height: 200px;
  border: 1px solid black;
  border-radius: 20px;
  overflow: hidden;
  background-repeat: no-repeat;
`;

const Cards = () => {
  return (
    <Card container>
      <InnerCard
        item
        xs={6}
        sm={6}
        md={6}
        lg={6}
        xl={6}
        sx={{
          background: `url('https://s3-alpha-sig.figma.com/img/2971/acc4/0f4f994806b87f68f974244b5593dc76?Expires=1693180800&Signature=dRwqQT0Ye18Aag~WGzATtP4gqtXgxtxCoOiJ~P1YDXrZ44cJjGNL8lUq4ZYPQXNyr3cHTNXNGyR-plOdNSEjy8GWXfdumTofbNz0fAlPryZItOPyXVXjzak7aCM22XCeFIeLSkCIctcwd5lPEWYRZq3r2q1zV2R8JS31O5w4yfbAFZwDJ6biuv4V10P5t9Ih~6Aiq37qVJ2piBfOu05a-vFEH5Qn2EXrkz~vHan5bsDv3yfqZCIa~i2COHNS7~5AlOgB42ky3HzejhUiAYwRGaWVIFzkX5k54C0k3vAvugn1io~LAZB~4iHpH9EJxQGVFp-Pj2~YD4UEMBH80UJOFQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')`,
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            px: 2,
            py: 2,
            gap: "10px",
          }}
        >
          <Box sx={{ color: "white" }}>
            <Typography sx={{ fontWeight: "200", fontSize: "28px" }}>
              Explore{" "}
            </Typography>
            <Typography sx={{ fontWeight: "600", fontSize: "54px" }}>
              classifieds{" "}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              px: 2,
              color: "white",
            }}
          >
            <Typography>Over 5000 + Products</Typography>
            <ArrowCircleRightOutlinedIcon />
          </Box>
        </Box>
      </InnerCard>

      <InnerCard
        item
        xs={6}
        sm={6}
        md={6}
        lg={6}
        xl={6}
        sx={{
          background:
            "url('https://s3-alpha-sig.figma.com/img/18d7/aa25/defe54c0aa4c11484ea4f826f69039fa?Expires=1693180800&Signature=nqiUgV6umaROSpBmg6DGDnRpm~RTpBz9KLK-OB7IYpVmuG8TyJOrbg6hJCOvaFObiqlKWUqqwgkBL3X3DYG-UqFjjFqdC-IqO1IjPpoGbr0zskcAQLhE3eSJ0oR8kQIN9-l1yObjho2qgr6Zkl-ZFgpuk3A1XNSoiFqTfhbs2FSj5qarKcjxaomsfSBcrZ94DSPgr2wUkDpov1xViGcpNahaXtLpQGUr8ktPA42zxPEuNyQzxlNb-tQReCFYxqaVTVFjs679Nwt1VMa3vNMwqHKX5D~u-UKXSyj8ZN349WYMoEliMd4OnBpwGT0m6d5U~yHsmsMeIAmWUsXL0DZbbw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            px: 2,
            py: 2,
            gap: "10px",
          }}
        >
          <Box sx={{ color: "white" }}>
            <Typography sx={{ fontWeight: "200", fontSize: "28px" }}>
              Add{" "}
            </Typography>
            <Typography sx={{ fontWeight: "600", fontSize: "54px" }}>
              classifieds{" "}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              px: 2,
              color: "white",
            }}
          >
            <Typography>ads, event ads service requests etc</Typography>
            <ArrowCircleRightOutlinedIcon />
          </Box>
        </Box>
      </InnerCard>

      <InnerCard
        item
        xs={6}
        sm={6}
        md={6}
        lg={6}
        xl={6}
        sx={{
          background: `url('https://s3-alpha-sig.figma.com/img/1927/a4ac/afc8faef860aef0d52ce87afd118b973?Expires=1693180800&Signature=PP5OsYZMudBYbKJ2-4-3jWO2zXZlD6JuqZRhPF8xS1hUWZHiZXRDROzbdRsmZf7~JJ9W3sCZNaPrfCJMhgHzSuEC78Uuy-EiaddwsXAUaBh4d0a2Gpbi9MHpG~5NknFqQT3BRcpVsHITOY~JOTX3OddcUZ0ZKAe392q8IVyr589WJoLCFjHuTl-grnk0UNUsQ6meoIWn~NnXQ92whOUxKf0SZUxP1iDkHVF2N20~nyzwVLMoD9mGSS8ZLfRfA7-SnTsSZuq0qSva595vG067XgwgOhXCTCZQvOKFTN~GA2duMzOOWdL3EZkc9AWNTV92i-FIul8XsP7Ydqm7mzaU6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')`,
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            px: 2,
            py: 2,
            gap: "10px",
          }}
        >
          <Box sx={{ color: "white" }}>
            <Typography sx={{ fontWeight: "200", fontSize: "28px" }}>
              Explore{" "}
            </Typography>
            <Typography sx={{ fontWeight: "600", fontSize: "54px" }}>
              Products{" "}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              px: 2,
              color: "white",
            }}
          >
            <Typography>Over 25000 + Products</Typography>
            <ArrowCircleRightOutlinedIcon />
          </Box>
        </Box>
      </InnerCard>

      <InnerCard
        item
        xs={6}
        sm={6}
        md={6}
        lg={6}
        xl={6}
        sx={{
          background: `url('https://s3-alpha-sig.figma.com/img/fc79/f59e/82620880a99ec3bc81bc0476fd7b7ddb?Expires=1693180800&Signature=HS~T1DQPivFgS5gm6PlpV2keJ07IoPhzaE7OSjEa091aFWGhy~LJ4i9gT6cAkfAj-rmf3C6WC7VlHk5wGlN3lK5GIuNunZfcCC2bZc6AvYgW3-rzdxKF9ZwDQoZ1L-S9XJEGYJ0urF1fYWOgii0RSusBJnEmmxl38pHO9S57zWDVSSoukIMC-hA9SgtgbqPD0aYI33-oxlQxaoaQNayzoFGQRHPH0FveqM2Mtt~MCnYCLCFRaPHuGnCsHipxXWEMkSokuB0Lx--tNZyBTbUrdK4cLSiaCjgoYQwz6PHTFQlV4vGW~cC4GqlGCfPch7-NUs9m5uOz4QJ-GO9XGcbwww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')`,
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            px: 2,
            py: 2,
            gap: "10px",
          }}
        >
          <Box sx={{ color: "white" }}>
            <Typography sx={{ fontWeight: "200", fontSize: "28px" }}>
              Partner{" "}
            </Typography>
            <Typography sx={{ fontWeight: "600", fontSize: "54px" }}>
              With Us{" "}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              px: 2,
              color: "white",
            }}
          >
            <Typography>Partner With us</Typography>
            <ArrowCircleRightOutlinedIcon />
          </Box>
        </Box>
      </InnerCard>
    </Card>
  );
};

export default Cards;
