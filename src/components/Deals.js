import React from "react";
// import { styled , useMediaQuery, useTheme} from "@mui/material/styles";
// Import from @mui/material instead of @mui/material/styles
import { styled, useTheme, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Swip from './Swiper'





const Item = styled(Box)({
  // border: "1px solid black",
});

const productData = [
  {
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/dda8/7ae7/6f5988c5f7d3d5591c808a3df4054182?Expires=1692576000&Signature=XTgv3vbepC0VQH8lqz3Ni-lb9mJzicy1dfZt~m3--P6qrwdb~wGnQCFSNGPw875TH3yafX-gXvEP~eIit~iPtug~CmFFVzKIzpQ0jw02zlTsJjG3Bal6lT7dZ5edJ92qls9TGrERekSSUVf5dxZXEkjALySNxlkLyzxTeO142X267OlFdG3cgTlU2HuGSjzMdEQERX~3CGQOoElZIgWDhKi47nYwSXF-vsJ2q5aQ44Li1PxGoNjRcgTIQGrSKrm9vUov9bmhczMHc2NeaK8OIAy0R9EW-NFh6xKZaOQT2y0nSrXksbeN6mBrovWWFB4wkyhTPioLtsAfeMNEneaI2Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Fitness and activity Tracker",
    price: "$33.3",
  },
  {
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/4d1f/de9f/c4135482db762f129ecd466d2fcfed02?Expires=1693180800&Signature=DRk8p5zRrwI12-3a-wltZEm1OfDskJtWYVYOEW1jpMfvqmE3W0Dvtmh09HEkTWbnGznIZqdy6OlzVV4OtrTZx2VcKVYsUtYsgcFMVvnJ6KRfvno6aIu6Fu4Sz9ynUd87BRpjyMrWQ201up~3bajYmLAu0fTz62HV2WatUZTWoXls2FogJPscov4B4jswyym2og2xrkN3N~OvHrpovtB3LaoRtRUn7rJrNLj0Yb39RDxyYelHuNps7bTD~gOmMtvUt9bBQrV~w5Nv8yYhhvxIQNImADtzW9SYQGeUe94vrRHmxmWJFpxbQkZhK6BRZBooicvhye-Xy2zjbntFBe-T9w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Fitness and activity Tracker",
    price: "$33.3",
  },
  {
    imageSrc:'https://s3-alpha-sig.figma.com/img/4c3b/4876/5ee00f439c1a0802456dac691c094d30?Expires=1693180800&Signature=gwQXtcMwQIUwORag3pE1FC5jamwBQLnjrBqTYlG6sBUd7vKm1h5FJrtnBbOle~5OK0zKYhiVJyC-cExeUdGXrjHN~6~mYF-yXev3FtcgVqaSzpYj30TcZTkEjgz51OVDkVAM0RMJ3J8I6Ej55OQts8VTwJd7dpvlVKqOjfGknsZi5IRtmdRTjSB-Bt2hUzLJKAp7eRQMMdI1M3HnOdVhs8SnnggC~zkcWPyswPZOtE1OyfFgxCxWCeH1rfTPYoP98O7kHxFVXvDLkM3lqkBIktEKBYXioLadOs2eabfkVNTN6vFdMVJNPPhghRZg3Sf5ldwHqcW7Q26B7d7a7YT8vg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
     ,title: "Fitness and activity Tracker",
    price: "$33.3",
  },
  {
    imageSrc:'https://s3-alpha-sig.figma.com/img/f5f7/69ce/995d9c241d0385e1b2956895baeef81f?Expires=1693180800&Signature=LejzPCIMfj1mkevS2uTSaK3HOomk4Sx6ptJros3ux~bLbkAHJP8LaXwEi0vesI1LT~pFI7XcCZV7MtpEDlBDGy4Fq6DGKm070jb~UjlubKfoFmV4gxA5bYPO~7SDSCzJtD8AaGpE76jJNRqaDgWoeevSiqwd-f-aOi7Hr5dURsp32gp8Ru2~Yhdnlb4P9QR6ieUrxR7NKTmjRywczuwQYFOtvjfJfd7JWLSjsVzphq1m28XsamPSkZB8burPo6iGrbkUssRpdTv0HGhAnsJze1wdtB3lXOLxNlR0dpvp3fg1fzfvBYxEe1QpFEs3wJy9nLORsBG3Fonw7~f4uMEEfw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: "Fitness and activity Tracker",
    price: "$33.3",
  },
  {
    imageSrc:'https://s3-alpha-sig.figma.com/img/df2c/a85a/3b37b2bf7b384c459285e7478de6a692?Expires=1693180800&Signature=CQ1opBv3HSVZOUbfmd6EQQWUGGxty94eNRfK0tlGWrzFKMT3j2pG5urE55~y6skOTxxa-~Bvwg8ckDqb3qLTX4ju6~-w3eIXxzsUm2QZQ8r6rzouFOUzw8~ggse3P64EFpG5ob7EM2denRjytTODVVd5FW-dYxya8xRA5sAwfANHFY3iF-nB2AI8kQy-gbHgR-~IjfWmVuElSOt6XaBpMC2kWFuj8w6T5P6fkuaCtpLvAAz0dF1vTYU8s12kL5RsEP~hKpCbcTwkh8yK1aunxIYK-NlEQIHgTQ--Z2sHpD4a7YqApXl4Kcvzj03r80QMX6cfy6dp8RtPjIGPF875wA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: "Fitness and activity Tracker",
    price: "$33.3",
  },
  {
    imageSrc:'https://s3-alpha-sig.figma.com/img/c391/a67c/41b8fce17b240ac8330b2504df707229?Expires=1693180800&Signature=I03jUMcNkgjOzTGmlK~KY1QHoWbN-TFgMoCE9io8lhRAVTgGeqqHMMFx9zL739k6fL5gwEb0dg4Yftj6flQxbZxnJComYFufK-hNxqY-jr4NL7NvWr2uQK6hiU2RR8cIGtUWjn7fFN~~iGxmJZHR8mzjB2iNemw8VrvlOplJ0Zr9AiADfkgOoW0xPG3GMvXbnA6du1XKuxfkswQuHsu1ja~MnX571dNkaSqFDELCuq3wqB3sakeRC4G20tAj5d-81ZhfWWHwtZTMZMFh2GVywLRblMRQz4Mq-4dYERVQP1KvkGtzNlAPTHmkO4Gc24L3ZLKWPDQMo6IQJZz9WytRQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: "Fitness and activity Tracker",
    price: "$33.3",
  },
  {
    imageSrc:'https://s3-alpha-sig.figma.com/img/311b/9f51/59db22973a649aec195116866c4b5593?Expires=1693180800&Signature=GCTsoqpkN0nqRgEOforPBC3wMP0mDzoa5lwo7p3pImVvMY~Bk46o-ON070fb43~Kxi842z3KyrB0cRZ~On9QaADTgbViGNRtSHvgahnyQX7Hki~52IFiCUNShwGYk8IzXb~hnyvkkjixhh5UQ8XVwYVubzAfz5iOkIx73Y8SaEeHxb1Zud4T7SB7b51nntu~mmhKVFf89KxUHlnU5gQx8fI8I6YuwEbDRUOQ3oIiN5CBTi0~mZ38IOaLrwweH62CkrXyzctBnpNDYH6FhxhGr9MI0qZaLAwLj5Lbn4E7HysSdL1-sBt54BR8b66DxPtfd5hD2KkZOIT0U72vTt-OOw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
       title: "Fitness and activity Tracker",
    price: "$33.3",
  },
  {
    imageSrc:'https://s3-alpha-sig.figma.com/img/eee6/171c/5aba139e251e589b8383a25cc1d43deb?Expires=1693180800&Signature=PjNN-c4DcToXwlVmCiryCh6NCBkY~wyQvIIq0OFRm~EVN3QcstuQBsh8agjUeOD7jdiN9LhFUYpuQhLJHT0Wy-J~1MNR6Rn0tRqlZqV4ZoECk4r92QSf0K7HwjsbftMtTE9TgDoN2-VJwrb2fSM8tKLcQMtDlWX791zbjtknIpF~YKz~1QFtUzZSaDs7XXcQy~Fp68od-hX2icOfJxxHECOXfEajmyslzFafbQJVtzKvwqOjNaNiZ3u3OZvoZbDt0CJ0PfqSMRNlyk-XcQNF0a~~Q3ANB2MnMb4fD8HGUvI9qy1uMpYYxNOafTxGPBlaOc~~OXlWCOoYKHnFCO5m3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
       title: "Fitness and activity Tracker",
    price: "$33.3",
  },
  // Add more product data entries here...
];

const Deals = () => {
const theme = useTheme()
const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  

  return (
    <Box>
      <Box sx={{mt: isMobile ? 1 :  1}}>
   <Swip />
   </Box>
    <Box sx={{ flexGrow: 1, mt: isMobile ? 8: 8, px: 8 }}>
      <Grid container spacing={8}>
        {productData.map((product, index) => (
          <Grid item xs={12} md={3} lg={3} xl={3}  key={index}>
            <Item>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  
                }}
              >
                <Box>
                  <img
                    src={product.imageSrc}
                    alt="watch"
                    style={{
                      width: "7.3125rem",
                      height: "8.6875rem",
                      flexShrink: 0,
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "baseline",
                    justifyContent: "space-around",
                  }}
                >
                  <Box sx={{ width: "100%", textAlign: "center" }}>
                    {product.title}
                  </Box>
                  <Box sx={{ width: '100%', textAlign: "center", color:'#3187ED', fontWeight:'bolder' }}>
                    {product.price}
                  </Box>
                </Box>
              </Box>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Box>
  );
};

export default Deals;
