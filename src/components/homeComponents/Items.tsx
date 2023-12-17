import { Box } from "@mui/material";
import SellersHeader from "../headers/SellersHeader";
import ItemsCard from "../cards/ItemsCard";
import { ItemType, item } from "src/utilities/types";
import LINKS from "src/utilities/links";
const Items = ({ isFetching, data }: { isFetching?: boolean; data: any }) => {
  return (
    <SellersHeader titleHead="Items" path={LINKS.Allitems}>
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
          pb: "4rem",
        }}
      >
        {data.slice(0, 12).map((item:ItemType, index: number) => (
          <ItemsCard
            key={index}
            flag={item.iso_code}
            url={item.photo1}
            firstName={item.seller_info[0].first_name}
            lastName={item.seller_info[0].last_name}
            selling={item.description}
            createdAt={item.createdAt}
            amount={item.convertedPrice}
            isFetching= {isFetching}
          />
        ))}
      </Box>
    </SellersHeader>
  );
};

export default Items;
