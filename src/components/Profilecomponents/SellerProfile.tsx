import { Box, Button, Paper, Typography, useMediaQuery } from "@mui/material";
import nora from "src/assets/Image/jenny.jpg";
import _ from "lodash";
import dayjs from "dayjs";
import { Suspense } from "react";
import { Spinner } from "src/pages/Item";
interface Props {
  firstName?: string;
  lastName?: string;
  createdAt?: Date;
  about?: string;
  countryCode?: string;
  mobile?: string;
  deliveryOptions?: string;
  url?: string;
  country?: string;
  flag?: string;
}

const SellerProfile = ({
  firstName,
  lastName,
  createdAt,
  about,
  countryCode,
  mobile,
  deliveryOptions,
  url,
  country,
  flag,
}: Props) => {
  const isNotMobileScreens = useMediaQuery("(min-width:600px)");
  if (
    !firstName ||
    !lastName ||
    !createdAt ||
    !about ||
    !countryCode ||
    !mobile ||
    !deliveryOptions ||
    !country ||
    !flag
  ) {
    console.log(firstName)
    // If any of the required props is not available, show the fallback
    return <Spinner />;
  }
  
  return (
    <Paper sx={{ position: "relative", mt: "5rem" }}>
      {isNotMobileScreens ? (
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
              className={`fi fi-${flag?.toLowerCase()}`}
              style={{
                fontSize: "4rem",
                position: "absolute",
                left: "55%",
                top: 40,

                zIndex: 5,
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
              {`${_.upperFirst(firstName)} ${_.upperFirst(lastName)}`}
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
                {country}
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
                {dayjs(createdAt).format("DD.MM.YYYY  ")}
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
                {about}
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
                {`${countryCode}${mobile}`}
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
                {deliveryOptions}
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{ height: "30rem", display: "flex", flexDirection: "column" }}
          >
            <Box
              sx={{
                width: "15rem",
                height: "15rem",
                backgroundImage: `url(${url})`,
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
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            pl: "2rem",
            pb: "2rem",
            pr: "2rem",
          }}
        >
          <span
            className={`fi fi-${flag?.toLowerCase()}`}
            style={{
              fontSize: "2.5rem",
              position: "absolute",
              left: 40,
              top: 20,

              zIndex: 5,
            }}
          ></span>
          <Box
            sx={{
              width: "100%",
              height: { xs: "20rem", sm: "20rem", md: "20rem", xl: "25rem" },
              backgroundImage: `url(${url})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              borderRadius: "0.3rem",
              mt: "6rem",
            }}
          ></Box>
          <Button
            sx={{
              backgroundColor: "#0047AB",
              color: "white",
              padding: "0.5rem 2.5rem",
              borderRadius: "0.4rem",
              alignSelf: "center",
              mt: "1.5rem",
            }}
          >
            Message seller
          </Button>

          <Box>
            
            <Typography
              sx={{
                textDecoration: "underline",
                textUnderlineOffset: "0.81rem",
                fontSize: "2rem",
                fontWeight: 700,
                pt: "2rem",
              }}
            >
              {`${_.upperFirst(firstName)} ${_.upperFirst(lastName)}`}
            </Typography>
            
            <Typography
              sx={{
                mt: "0.5rem",
                fontSize: "1.5rem",
                fontWeight: 600,
              }}
            >
              From{" "}
              <span
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 400,
                  marginLeft: "0.5rem",
                }}
              >
                {country}
              </span>
            </Typography>
            <Typography
              sx={{
                mt: "0.5rem",
                fontSize: "1.2rem",
                fontWeight: 600,
              }}
            >
              Member since{" "}
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: 400,
                  marginLeft: "0.5rem",
                }}
              >
                {dayjs(createdAt).format("DD.MM.YYYY  ")}
              </span>
            </Typography>
            <Typography
              sx={{
                mt: "1rem",
                fontSize: "1.5rem",
                fontWeight: 600,
              }}
            >
              About
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: 400,
                  width: {
                    
                  },
                }}
              >
                {about}
              </Typography>
            </Typography>
            <Typography
              sx={{
                mt: "1rem",
                fontSize: "1.2rem",
                fontWeight: 600,
              }}
            >
              Phone number
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: 400,
                  marginLeft: "0.5rem",
                }}
              >
                {`${countryCode}${mobile}`}
              </span>
            </Typography>
            <Typography
              sx={{
                mt: "1rem",
                fontSize: "1.1rem",
                fontWeight: 600,
              }}
            >
              Purchase and delivery options
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  
                }}
              >
                {deliveryOptions}
              </Typography>
            </Typography>
          </Box>
        </Box>
      )}
    </Paper>
  );
};

export default SellerProfile;
function Loading() {
  return <h2>🌀 Loading...</h2>;
}
