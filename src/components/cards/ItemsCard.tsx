import { Box, Skeleton, Typography } from "@mui/material";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import money from "src/assets/Image/money.png";
import { useNavigate } from "react-router-dom";

interface Props {
  flag?: string;
  url?: string;
  firstName?: string;
  lastName?:string;
  selling?: string;
  createdAt?:string
  amount?:number;
  bgColor?:string;
  isFetching?:boolean
}

const ItemsCard = ({ flag, url, firstName,lastName, selling,createdAt,amount,bgColor,isFetching }: Props) => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate( isFetching ? "":"/item/1")}>
      <Box
        sx={{
          backgroundColor: bgColor ? bgColor : "white",
          // width: { xs: "12.8rem", lg: "12rem", xl: "13.5rem" },
          height: { xs: "16rem", lg: "15rem", xl: "16rem" },
          display: "flex",
          flexDirection: "column",
          position: "relative",
          borderRadius: "0.6rem",
          px: "0.7rem",
          transition: "all 0.3s ease-in-out allow-discrete",
          "&:hover": {
            boxShadow: " 3px 5px 10px 0.7px rgba(0, 0, 0, .2)",
            cursor: "pointer",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {isFetching ? (
            <Skeleton width={"40%"} component="h2"></Skeleton>
          ) : (
            <Typography
              variant="h5"
              sx={{ mt: "0.7rem" }}
              fontFamily={"'Noto Sans KR', sans-serif"}
            >
              {`${firstName} ${lastName}`}
            </Typography>
          )}
          {isFetching ? (
            <Skeleton
              width="1.5rem"
              height="1.5rem"
              variant="circular"
            ></Skeleton>
          ) : (
            <span
              className={`fi fi-${flag}`}
              style={{ fontSize: "1.7rem" }}
            ></span>
          )}
        </Box>
        <Box sx={{}}>
          {isFetching ? (
            <Skeleton
              sx={{
                width: "11rem",
                height: "4rem",
                mt: "1rem",
                borderRadius: "0.3rem",
              }}
            ></Skeleton>
          ) : (
            <Box
              sx={{
                width: "11rem",
                height: "4rem",
                backgroundImage: `url(${url})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                mt: "1rem",
                borderRadius: "0.3rem",
              }}
            ></Box>
          )}
        </Box>
        {isFetching ? (
          <Skeleton
            variant="rectangular"
            component={"h6"}
            sx={{ mt: "0.5rem" }}
          ></Skeleton>
        ) : (
          <Typography variant="body1" sx={{ mt: "0.5rem" }}>
            {selling}
          </Typography>
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: "1.5rem",
          }}
        >
          {isFetching ? (
            <Skeleton
              variant="rectangular"
              component={"h3"}
              sx={{ mt: "0.5rem",width:"40%" }}
            ></Skeleton>
          ) : (
            <Typography
              sx={{ fontWeight: "400", fontSize: "0.75rem", color: "#0047AB" }}
            >
              {createdAt}
            </Typography>
          )}

          {isFetching ? (
            <Skeleton
              variant="rectangular"
              component={"h3"}
              sx={{ mt: "0.5rem",width:"30%" }}
            ></Skeleton>
          ) : (
            <Typography sx={{ fontWeight: "600", fontSize: "1.5rem" }}>
              {amount}
            </Typography>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default ItemsCard;
