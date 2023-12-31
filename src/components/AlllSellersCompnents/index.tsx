
import { Box, Typography,useTheme } from "@mui/material";

import SelectComp from "src/components/Select/SelectComp";
import Search from "src/components/homeComponents/Search";
import { defaultSellers } from "src/utilities/constants";
import { Seller, SellerType } from "src/utilities/types";
import SellerCard from "../cards/SellerCard";
import Pagination from "../Pagination";
import { useState } from "react";
import useCountryName from "src/hooks/useCountryName";
const SellersComponents = ({
  isFetching,
  data,
  changeCountry
}: {
  isFetching?: boolean;
  data: any;
  changeCountry:(value:any)=>void
}) => {
  const theme = useTheme();
  const [pagenum, setPagenum] = useState<number>(1);
  const countryNames = useCountryName();
  const handleChange = () => {};
  return (
    <Box sx={{ pb: "8rem" }}>
      <Box sx={{ mt: "4rem", display: "flex", justifyContent: "flex-end" }}>
        <SelectComp
          selectLabel="Showing sellers from"
          menuItems={countryNames}
          sx={{ border: "0.79px solid rgba(0, 71, 171, 0.40)" }}
          handleChange={(value)=>changeCountry(value)}
        />
      </Box>
      <Box sx={{ mt: "1rem" }}>
        <Typography sx={{ fontSize: "3.5rem", fontWeight: "800", mb: "1rem" }}>
          All Sellers
        </Typography>
        <Search />
      </Box>
      <Box
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
          
          position: "relative",
          mt: "5rem",
        }}
      >
        {data.map((item: SellerType, index: number) => (
          <SellerCard
            key={index}
            flag={item.iso_code}
            url={item.photo}
            name={`${item.first_name} ${item.last_name}`}
            selling={item.delivery_option}
            isFetching={isFetching}
            id={item._id}
          />
        ))}
      </Box>

      <Pagination
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5rem",
          color: theme.palette.primary.light,

          "& .css-c8vooq-MuiButtonBase-root-MuiPaginationItem-root": {
            fontSize: "1.2rem",
            fontFamily: "poppin",
          },
          "& .Mui-selected": {
            backgroundColor: "rgba(0, 71, 171, 0.7)",
            color: "white",
          },
        }}
        size={"large"}
        shape={"circular"}
        variant={"outlined"}
        count={5}
        page={pagenum}
        onChange={(event, value) => setPagenum(value)}
      />
    </Box>
  );
};

export default SellersComponents