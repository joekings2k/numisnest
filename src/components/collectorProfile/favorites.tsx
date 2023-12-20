import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAppContext from "src/hooks/useAppContext";
import useCollectorsAxiosPrivate from "src/hooks/useCollectorsAxiosPrivate";
import { defaultFaves, defaultSellers } from "src/utilities/constants";
import SellerCard from "../cards/SellerCard";
import { CollectorFav, SellerType } from "src/utilities/types";

const FavoritesComponent = () => {
  const { state } = useAppContext();
  const { token } = state;
  const [isFetching,setIsFetching]= useState<boolean>(true)
  const [favoriteSeller,setFavoriteSeller]= useState<CollectorFav[]|null>(defaultFaves)
  const axiosCollectorsPrivate = useCollectorsAxiosPrivate()
  useEffect(() => {
    const fetchUserFavorites = async() => {
      try {
        const response = await axiosCollectorsPrivate.get("duo/collector/get-fav");
        const {data} = response?.data
        console.log(data)
        setFavoriteSeller(data);
      } catch (error) {
        
      }finally{
        setIsFetching(false)
      }
    };
    fetchUserFavorites()
  }, []);
  return (
    <Box sx={{ mt: "4rem" }}>
      <Typography sx={{ fontSize: "3rem", fontWeight: 700 }}>
        My favorites ❤️
      </Typography>
      <Paper sx={{ position: "relative", mt: "1rem" }}>
        <Grid
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: " 1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            columnGap: { xs: "1rem", lg: "1.5rem", xl: "2rem" },
            rowGap: "2rem",
            justifyItems: "center",
            position: "relative",
            transform: "scale(0.89)",
          }}
        >
          {favoriteSeller?.map((seller: CollectorFav) => (
            <SellerCard
              flag={seller.seller?.[0].iso_code}
              name={`${seller.seller?.[0].first_name} ${seller.seller?.[0].last_name}`}
              url={seller.seller?.[0].photo}
              selling={`${seller.seller?.[0].country_code}${seller.seller?.[0].mobile}`}
              isFetching={isFetching}
            />
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default FavoritesComponent;
