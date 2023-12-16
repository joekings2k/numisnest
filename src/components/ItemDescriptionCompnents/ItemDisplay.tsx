import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Display from "./display";
import ItemDesc from "./itemdesc";
import SellerAbout from "./sellerAbout";

const ItemDisplay = ({}) => {
  return (
    <Box>
      <Typography sx={{ fontSize: "3.2rem", fontWeight: 700, mt: "4rem" }}>
        Item ID 5934853
      </Typography>
      <Box sx={{ display: "flex", mt: "3rem",alignItems:"center" }}>
        <Display />
        <Box
          sx={{ marginLeft: "1rem", position: "relative", padding: "1.5rem" }}
          >
          <Typography
            sx={{
              fontSize: "1.8rem",
              fontWeight: 700,

              "&::after": {
                content: "''",
                position: "absolute",
                bottom: 150,
                left: "50%",
                transform: "translateX(-50%)",
                width: "87%",
                
                borderBottom: "5px solid black",
              },
            }}
          >
            5 Pounds Elizabeth II 1953, Blue print; yellow underprint; black
            serial numbers
          </Typography>

          <Box sx={{ mt: "4rem" }}>
            <Typography
              sx={{
                padding: "1rem",
                bgcolor: "white",
                width: "15rem",
                fontSize: "2rem",
                color: "#0047AB",
              }}
            >
              Price :{" "}
              <Typography
                component={"span"}
                sx={{ fontSize: "2.5rem", fontWeight: 700,ml:"0.5rem",}}
              >
                45$
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>

      <ItemDesc /> 
      <SellerAbout />
    </Box>
  );
};

export default ItemDisplay;
