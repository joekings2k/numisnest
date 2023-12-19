import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAppContext from "src/hooks/useAppContext";
import useCollectorsAxiosPrivate from "src/hooks/useCollectorsAxiosPrivate";
import { defaultSellers } from "src/utilities/constants";
import SellerCard from "../cards/SellerCard";
import { SellerType } from "src/utilities/types";

const FavoritesComponent = () => {
  const { state } = useAppContext();
  const { token } = state;
  const [isFetching,setIsFetching]= useState<boolean>(true)
  const [favoriteSeller,setFavoriteSeller]= useState<Partial<SellerType>[]>(defaultSellers)
  const axiosCollectorsPrivate = useCollectorsAxiosPrivate()
  useEffect(() => {
    const fetchUserFavorites = async() => {
      try {
        const response = await axiosCollectorsPrivate.get("duo/collector/get-fav");
        const {data} = response?.data
        
        setFavoriteSeller(data?.[0].seller);
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
          {favoriteSeller.map((seller: Partial<SellerType>) => (
            <SellerCard
              flag={seller.iso_code}
              name={`${seller.first_name} ${seller.last_name}`}
              url={seller.photo}
              selling={`${seller.country_code}${seller.mobile}`}
              isFetching={isFetching}
            />
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default FavoritesComponent;
