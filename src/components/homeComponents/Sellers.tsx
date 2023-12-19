import { Box } from "@mui/material";

import SellersHeader from "../headers/SellersHeader";
import SellerCard from "src/components/cards/SellerCard";

import {  SellerType } from "src/utilities/types";
import LINKS from "src/utilities/links";

const Sellers = ({ isFetching, data }: { isFetching?: boolean; data: any }) => {
  return (
    <SellersHeader titleHead="Sellers" path={LINKS.Allsellers}>
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
          justifyItems: "center",
          position: "relative",
        }}
      >
        {data
          .slice(0, 8)
          .map((item: Partial<SellerType>, index: number) => (
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
    </SellersHeader>
  );
};

export default Sellers;
