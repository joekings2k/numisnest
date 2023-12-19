import { Box, Paper, Typography } from "@mui/material";
import { ItemType, SellerItemType } from "src/utilities/types";
import ItemsCard from "../cards/ItemsCard";
import { defaultItems } from "src/utilities/constants";
interface Props {
  data?:Partial <ItemType>[]
}
const SimilarItems = ({data}:Props) => {
  return (
    <Box sx={{mt:"4rem"}}>
      <Typography
        component={"header"}
        sx={{ fontSize: "3rem", fontWeight: 700 }}
      >
        Similar items from Dan
      </Typography>
      <Paper>
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
            pb: "1rem",
            ml: "-1.9rem",
            transform: "scale(0.95)",
          }}
        >
          {data?.slice(0, 6)?.map((item:Partial<ItemType>, index: number) => (
            <ItemsCard
              key={index}
              url={item.photo1}
              currency={item.currency}
              selling={item.description}
              createdAt={item.createdAt}
              amount={item.price}
              height="13.8rem"
              bgColor="#F4F4F6"
              id={item._id}
            />
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default SimilarItems;
