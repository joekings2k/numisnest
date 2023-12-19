import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Display from "./display";
import ItemDesc from "./itemdesc";
import SellerAbout from "./sellerAbout";
import { SingleItemType } from "src/utilities/types";
import { Photo } from "@mui/icons-material";
import SimilarItems from "./similarItems";

const ItemDisplay = ({data}:{data?:SingleItemType|null}) => {
  return (
    <Box>
      <Typography sx={{ fontSize: "3.2rem", fontWeight: 700, mt: "4rem" }}>
        Item ID {data?._id.slice(0, 10)}
      </Typography>
      <Box sx={{ display: "flex", mt: "3rem", alignItems: "center" }}>
        <Display
          arry={[data?.photo1, data?.photo2, data?.photo3, data?.video]}
        />
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
            {data?.name}
          </Typography>

          <Box sx={{ mt: "4rem" }}>
            <Typography
              sx={{
                padding: "1rem",
                bgcolor: "white",

                fontSize: "2rem",
                color: "#0047AB",
              }}
            >
              Price :{" "}
              <Typography
                component={"span"}
                sx={{ fontSize: "2.5rem", fontWeight: 700, ml: "0.5rem" }}
              >
                {`${
                  data?.convertedPrice.toFixed()
                }${data?.convertedCurrency.toUpperCase()}`}
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>

      <ItemDesc
        description={data?.description}
        deliveryOptions={data?.seller_info[0].delivery_option}
        countryCode={data?.seller_info[0].country_code}
        mobile={data?.seller_info[0].mobile}
      />
      <SellerAbout data={data?.seller_info?.[0]}  />
      
      <SimilarItems data={data?.other_seller_items} />
    </Box>
  );
};

export default ItemDisplay;
