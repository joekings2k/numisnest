import React from 'react'

import { Box, Button, Paper, Typography, useMediaQuery } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import LINKS from "src/utilities/links";
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
const CollectorDashboard = ({
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
  const navigate = useNavigate();
  const isNotMobileScreens = useMediaQuery("(min-width:600px)");
  console.log(flag)
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
                mt: "0.5rem",
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
                mt: "1.5rem",
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
                padding: "0.5rem 3.8rem",
                borderRadius: "0.4rem",
                alignSelf: "center",
                mt: "2rem",
              }}
              onClick={() => navigate(LINKS.editProfile)}
            >
              Edit Profile
            </Button>
            <Button
              sx={{
                backgroundColor: "#0047AB",
                color: "white",
                padding: "0.5rem 3.8rem",
                borderRadius: "0.4rem",
                alignSelf: "center",
                mt: "2rem",
              }}
            >
              Messages
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
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
            <Button
              sx={{
                backgroundColor: "#0047AB",
                color: "white",
                padding: "0.5rem 2.5rem",
                borderRadius: "0.4rem",
                alignSelf: "center",
                mt: "1.5rem",
              }}
              onClick={() => navigate(LINKS.editProfile)}
            >
              Edit Profile
            </Button>
          </Box>

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
                  width: {},
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
                  fontSize: "1rem",
                  fontWeight: 400,
                }}
              >
                {deliveryOptions}
              </Typography>
            </Typography>
          </Box>
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
        </Box>
      )}
    </Paper>
  );
};

export default CollectorDashboard;
