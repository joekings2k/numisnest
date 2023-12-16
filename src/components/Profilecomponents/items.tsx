import { Box, Paper, Typography } from "@mui/material";
import { ItemType, item } from "src/utilities/types";
import { defaultItems } from "src/utilities/constants";
import ItemsCard from "../cards/ItemsCard";
import { useNavigate } from "react-router-dom";
import { ArrowForwardIosOutlined } from "@mui/icons-material";

const ItemsProfile = ({}) => {
  const navigate = useNavigate();
  return (
    <Paper sx={{ mt: "6rem", pl: "2rem", pt: "2rem", pr: "1rem", mb: "3rem" }}>
      <Box
        sx={{
          display: "flex",
          mb: "1.5rem",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontSize: "2.5rem", fontWeight: 700 }}>
          Items
        </Typography>
        <div onClick={() => navigate("")}>
          <Typography
            variant="h4"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#0047AB",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            See all <ArrowForwardIosOutlined sx={{ marginLeft: "0.76rem" }} />
          </Typography>
        </div>
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
          pb: "1rem",
          ml: "-1.9rem",
          transform: "scale(0.95)",
        }}
      >
        {defaultItems.slice(0, 12).map((item: ItemType, index: number) => (
          <ItemsCard
            key={index}
            flag={item.iso_code}
            url={item.photo1}
            firstName={item.seller_info[0].first_name}
            lastName={item.seller_info[0].last_name}
            selling={item.description}
            createdAt={item.country}
            amount={item.convertedPrice}
            bgColor="#F4F4F6"
          />
        ))}
      </Box>
    </Paper>
  );
};

export default ItemsProfile;
