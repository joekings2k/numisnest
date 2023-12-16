import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import nora from "src/assets/Image/nora.jpg";
import SellerCard from "../cards/SellerCard";
import { Seller } from "src/utilities/types";

const seller: Seller = {
  flag: "ng",
  img: nora,
  name: "James Doe",
  selling: "World Bank Notes",
};

const SellerAbout = ({}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between",mt:"5rem",alignItems:"center" }}>
      <SellerCard
        flag={seller.flag}
        url={seller.img}
        name={seller.name}
        selling={seller.selling}
      />
      <Box sx={{ ml: "3rem" }}>
        <Typography
          component={"header"}
          sx={{
            fontSize: { xs: "2.5rem", md: "2.5rem", lg: "2.5rem" },
            fontWeight: 600,
          }}
        >
          About
        </Typography>
        <Typography
          component={"p"}
          sx={{
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.5rem", lg: "2rem" },
          }}
        >
          I have a large variety of banknotes from all around the world. I also
          have some
        </Typography>
        <Box component={"div"} sx={{ display: "flex" ,mt:"3rem"}}>
          <Button
            fullWidth
            sx={{
              bgcolor: "#0047AB",
              color: "white",
              fontSize: "1rem",
              borderRadius: "0.5rem",
              py:"0.5rem"
            }}
          >
            Message seller
          </Button>
          <Button
            fullWidth
            sx={{
              bgcolor: "#0047AB",
              color: "white",
              fontSize: "1rem",
              borderRadius: "0.5rem",
              ml: "1.5rem",
            }}
          >
            Seller's profile
          </Button>
          <Button
            fullWidth
            sx={{
              bgcolor: "#0047AB",
              color: "white",
              fontSize: "1rem",
              borderRadius: "0.5rem",
              ml: "1.5rem",
            }}
          >
           Add to favorites ❤️
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SellerAbout;
