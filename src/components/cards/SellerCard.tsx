import { Box, Typography,Skeleton } from "@mui/material";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";

interface Props {
  flag?: string;
  url?: string;
  name?: string;
  selling?: string;
  isFetching?:boolean;
}

const SellerCard = ({ flag, url, name, selling, isFetching }: Props) => {
  const naviagte = useNavigate();
  return (
    <div onClick={() => naviagte(`seller/${1}`)}>
      <Box
        sx={{
          backgroundColor: "white",
          width: { xs: "18.1rem", lg: "18.1rem", xl: "21rem" },
          height: { xs: "21rem", lg: "21rem", xl: "23.7rem" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          borderRadius: "0.6rem",
          transition: "all 0.3s ease-in-out allow-discrete",
          "&:hover": {
            boxShadow: " 3px 5px 10px 0.7px rgba(0, 0, 0, .2)",
            cursor: "pointer",
          },
        }}
      >
        {isFetching ? (
          <Skeleton
            variant="circular"
            sx={{
              width:"2.5rem",
              height :"2.5rem",
              position: "absolute",
              left: 15,
              top: 10,
            }}
          ></Skeleton>
        ) : (
          <span
            className={`fi fi-${flag?.toLowerCase()}`}
            style={{
              fontSize: "1.7rem",
              position: "absolute",
              left: 15,
              top: 10,
            }}
          ></span>
        )}

        {isFetching ? (
          <Skeleton
            variant="rectangular"
            animation="wave"
            sx={{ width: "12rem", height: "12rem", mt: "2.9rem" }}
          ></Skeleton>
        ) : (
          <Box
            sx={{
              width: "12rem",
              height: "12rem",

              backgroundImage: `url(${url})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              mt: "2.9rem",
              borderRadius: "0.3rem",
            }}
          ></Box>
        )}
        {isFetching ? (
          <Fragment>
            <Skeleton
              animation="wave"
              height={30}
              width="80%"
              sx={{ mt: "0.75rem" }}
            />
            <Skeleton
              animation="wave"
              height={30}
              width="80%"
              sx={{ mt: "0.75rem" }}
            />
          </Fragment>
        ) : (
          <Fragment>
            <Typography
              variant="h5"
              sx={{ mt: "0.75rem" }}
              fontFamily={"'Noto Sans KR', sans-serif"}
            >
              {name}
            </Typography>
            <Typography variant="body1" sx={{ mt: "0.5rem" }}>
              {selling}
            </Typography>
          </Fragment>
        )}
      </Box>
    </div>
  );
};

export default SellerCard;
