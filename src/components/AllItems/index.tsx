import { Box, Typography, useTheme } from "@mui/material";
import SelectComp from "src/components/Select/SelectComp";
import Search from "src/components/homeComponents/Search";
import { ItemType } from "src/utilities/types";
import Pagination from "../Pagination";
import { useState } from "react";

import ItemsCard from "../cards/ItemsCard";
import useCountryName from "src/hooks/useCountryName";
import { Category } from "@mui/icons-material";

interface Props {
  data?: any;
  isFetching?: boolean;
  setCountry: (value: string) => void;
  setCategory: (value: string) => void;
  countryValue: string;
  categoryValue: string;
}

const ItemsComponets = ({
  data,
  isFetching,
  setCountry,
  setCategory,
  countryValue,
  categoryValue,
}: Props) => {
  const theme = useTheme();
  const [pagenum, setPagenum] = useState<number>(1);
  const countryNames = useCountryName();
  const handleChange = () => {};
  return (
    <Box sx={{ pb: "8rem" }}>
      <Box sx={{ mt: "4rem", display: "flex", justifyContent: "flex-end" }}>
        <SelectComp
          selectLabel="Showing sellers from"
          menuItems={["Everywhere", ...countryNames]}
          sx={{ border: "0.79px solid rgba(0, 71, 171, 0.40)" }}
          handleChange={(value) => setCountry(value)}
          value={countryValue}
        />
      </Box>
      <Box sx={{ mt: "1rem" }}>
        <Typography sx={{ fontSize: "3.5rem", fontWeight: "800", mb: "1rem" }}>
          All Items
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Search />
          <SelectComp
            selectLabel=""
            menuItems={[
              "banknote",
              "coin",
              "medal",
              "stamp",
              "postcard",
              "envelope",
              "voucher",
              "token",
              "accessories",
              "others",
            
            ]}
            sx={{
              border: "0.79px solid rgba(0, 71, 171, 0.40)",
              width: "12rem",
            }}
            handleChange={(value) => setCategory(value)}
            value={categoryValue}
          />

          <SelectComp
            selectLabel="Under :"
            menuItems={["10$", "10-100$", "100-200$"]}
            sx={{ border: "0.79px solid rgba(0, 71, 171, 0.40)" }}
            handleChange={handleChange}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
            lg: "repeat(6, 1fr)",
            xl: "repeat(6, 1fr)",
          },
          columnGap: { xs: "0.5rem", lg: "0.9rem", xl: "2rem" },
          rowGap: "2rem",
          justifyItems: "center",
          position: "relative",
          mt: "5rem",
        }}
      >
        {data.map((item: ItemType, index: number) => (
          <ItemsCard
            key={index}
            flag={item.iso_code}
            url={item.photo1}
            firstName={item.seller_info[0].first_name}
            lastName={item.seller_info[0].last_name}
            selling={item.description}
            createdAt={item.createdAt}
            amount={item.convertedPrice}
            isFetching={isFetching}
            currency={item.convertedCurrency}
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

export default ItemsComponets;
