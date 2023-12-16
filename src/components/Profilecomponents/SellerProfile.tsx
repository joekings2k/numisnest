import { Box, Button, Paper, Typography } from "@mui/material";
import nora from "src/assets/Image/jenny.jpg";

interface Props {}

const SellerProfile = ({}: Props) => {
  return (
    <Paper sx={{ position: "relative",mt:"5rem" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pl: "2rem",
          pb: "2rem",
        }}
      >
        <Box>
          <span
            className={`fi fi-us`}
            style={{
              fontSize: "4rem",
              position: "absolute",
              left: "55%",
              top:40,
              
              zIndex:5
            }}
          ></span>
          <Typography
            sx={{
              textDecoration: "underline",
              textUnderlineOffset: "0.81rem",
              fontSize: "3rem",
              fontWeight: 700,
              pt: "2rem",
            }}
          >
            Debby Findel
          </Typography>
          <Typography
            sx={{
              mt: "0.5rem",
              fontSize: "2rem",
              fontWeight: 600,
            }}
          >
            World banknotes
          </Typography>
          <Typography
            sx={{
              mt: "0.5rem",
              fontSize: "2rem",
              fontWeight: 600,
            }}
          >
            From{" "}
            <span
              style={{
                fontSize: "1.5rem",
                fontWeight: 400,
                marginLeft: "0.5rem",
              }}
            >
              Petach Tikva
            </span>
          </Typography>
          <Typography
            sx={{
              mt: "0.5rem",
              fontSize: "2rem",
              fontWeight: 600,
            }}
          >
            Member since{" "}
            <span
              style={{
                fontSize: "1.5rem",
                fontWeight: 400,
                marginLeft: "0.5rem",
              }}
            >
              12.03.2023
            </span>
          </Typography>
          <Typography
            sx={{
              mt: "2.5rem",
              fontSize: "2rem",
              fontWeight: 600,
            }}
          >
            About
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: 400,
                width: {
                  xs: "25rem",
                  sm: "30rem",
                  md: "40rem",
                  lg: "50rem",
                  xl: "65rem",
                },
              }}
            >
              I have a large variety of banknotes from all around the world. I
              also have some
            </Typography>
          </Typography>
          <Typography
            sx={{
              mt: "2.5rem",
              fontSize: "2rem",
              fontWeight: 600,
            }}
          >
            Phone number
            <span
              style={{
                fontSize: "1.5rem",
                fontWeight: 400,
                marginLeft: "0.5rem",
              }}
            >
              050 424 2352
            </span>
          </Typography>
          <Typography
            sx={{
              mt: "2.5rem",
              fontSize: "2rem",
              fontWeight: 600,
            }}
          >
            Purchase and delivery options
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: 400,
                width: {
                  xs: "25rem",
                  sm: "30rem",
                  md: "40rem",
                  lg: "50rem",
                  xl: "65rem",
                },
              }}
            >
              I prefer to send items by post. I ask for 7 dollars for registered
              mail. Pickup is also possible on certain days from Petach Tikva
            </Typography>
          </Typography>
        </Box>
        <Box sx={{ height: "30rem", display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              width: "20rem",
              height: "20rem",
              backgroundImage: `url(${nora})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              borderRadius: "0.3rem",
            }}
          ></Box>
          <Button
            sx={{
              backgroundColor: "#0047AB",
              color: "white",
              padding: "0.5rem 2.5rem",
              borderRadius: "0.4rem",
              alignSelf: "center",
              mt: "2rem",
            }}
          >
            Message seller
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default SellerProfile;
