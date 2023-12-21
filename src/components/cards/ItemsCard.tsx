import { Box, Button, Skeleton, Typography } from "@mui/material";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import EditItemsModal from "../Modal/edit-ItemsModal";
type CardType = "Private" | "public";
interface Props {
  flag?: string;
  url?: string;
  firstName?: string;
  lastName?: string;
  selling?: string;
  createdAt?: string;
  amount?: number;
  bgColor?: string;
  isFetching?: boolean;
  currency?: string;
  height?: string;
  id?: string;
  cardtype?: CardType;
  openModal?:()=>void
  setItemId?:(value:string|undefined)=>void
}

const ItemsCard = ({
  flag,
  url,
  firstName,
  lastName,
  selling,
  createdAt,
  amount,
  bgColor,
  isFetching,
  currency,
  height,
  id,
  cardtype = "public",
  openModal ,
  setItemId
  
}: Props) => {
  const navigate = useNavigate();
   
  return (
    <Box>
      
      <div onClick={() => navigate(isFetching ? "" : `/item/${id}`)}>
        <Box
          sx={{
            backgroundColor: bgColor ? bgColor : "white",
            width: { xs: "12.8rem", lg: "12rem", xl: "12.5rem" },
            height: {
              xs: height ? height : "15.5rem",
              lg: height ? height : "15.5rem",
              xl: height ? height : "15.5rem",
            },
            pb: "1rem",
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
                sx={{ mt: "0.7rem", fontSize: "1.2rem" }}
              >
                {firstName && `${firstName} ${lastName}`}
              </Typography>
            )}
            {isFetching ? (
              <Skeleton
                width="1.5rem"
                height="1.5rem"
                variant="circular"
              ></Skeleton>
            ) : (
              <>
                {flag && (
                  <span
                    className={`fi fi-${flag?.toLowerCase()}`}
                    style={{ fontSize: "1.2rem" }}
                  ></span>
                )}
              </>
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
                  width: "100%",
                  height: "5rem",
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
            <Typography variant="body1" sx={{ mt: "1rem" }}>
              {selling?.slice(0, 19)}
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
                sx={{ mt: "0.5rem", width: "40%" }}
              ></Skeleton>
            ) : (
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: "0.75rem",
                  color: "#0047AB",
                }}
              >
                {createdAt ? dayjs(createdAt).format("DD.MM.YYYY") : ""}
              </Typography>
            )}

            {isFetching ? (
              <Skeleton
                variant="rectangular"
                component={"h3"}
                sx={{ mt: "0.5rem", width: "30%" }}
              ></Skeleton>
            ) : (
              <Typography sx={{ fontWeight: "600", fontSize: "1.07rem" }}>
                {`${amount?.toFixed()} ${currency?.toUpperCase()}`}
              </Typography>
            )}
          </Box>
          {cardtype === "Private" && (
            <Box>
              {" "}
              <Button
                sx={{
                  position: "absolute",
                  top: -10,
                  left: -10,
                  display: "inline-flex",
                  backgroundColor: "#0047AB",
                  color: "#F9FAFA",
                  paddingY: "0.1rem",
                  fontSize: "0.7rem",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  typeof openModal !== "undefined" && openModal()
                  setItemId ?    setItemId(id) :""
                }}
              >
                Edit
              </Button>
            </Box>
          )}
        </Box>
      </div>
    </Box>
  );
};

export default ItemsCard;
