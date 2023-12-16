import { Box } from "@mui/material";
import SellersHeader from "../headers/SellersHeader";
import ItemsCard from "../cards/ItemsCard";
import { item } from "src/utilities/types";
import LINKS from "src/utilities/links";
import { defaultItems } from "src/utilities/constants";
const Items = ({}) => {
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
        {/* {defaultItems.slice(0, 12).map((item: item, index: number) => (
          <ItemsCard
            key={index}
            flag={item.flag}
            url={item.img}
            name={item.name}
            selling={item.itemName}
            createdAt={item.dateCreated}
            amount={item.amount}
            
          />
        ))} */}
      </Box>
    </SellersHeader>
  );
};

export default Items;
