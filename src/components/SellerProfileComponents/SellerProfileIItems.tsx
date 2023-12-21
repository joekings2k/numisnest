import { Box, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { AddIcon } from "../Icons/icons";
import { SellerItemType, SingleItemType } from "src/utilities/types";
import ItemsCard from "../cards/ItemsCard";
import EditItemsModal from "../Modal/edit-ItemsModal";
import { Sledding } from "@mui/icons-material";

interface Props {
  data?: SingleItemType[] | null;
}
const SellerProfileIItems = ({ data }: Props) => {
  const [isDisplayModal, setDisplayModal] = useState<boolean>(false);
  const [selectedId ,setSelectedId]=useState<string|null|undefined>(null)
  
  return (
    <Box component={"div"}>
      {isDisplayModal && (
        <EditItemsModal
          contentWidth={"720px"}
          closeModal={() => setDisplayModal(false)}
          itemId={selectedId}
        />
      )}
      {data?.[0] ? (
        <Paper
          sx={{
            position: "relative",
            mt: "5rem",
            pl: "2rem",
            pb: "1rem",
            pt: "2rem",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "3rem",
                fontWeight: 700,
                mr: "2rem",
                mb: "0.5rem",
              }}
            >
              Items
            </Typography>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: " 1fr",
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
            {data?.slice(0, 6)?.map((item: SingleItemType, index: number) => (
              <ItemsCard
                key={index}
                url={item.photo1}
                currency={item.convertedCurrency}
                selling={item.description}
                createdAt={item.createdAt}
                amount={item.convertedPrice}
                height="13.8rem"
                bgColor="#F4F4F6"
                id={item._id}
                cardtype="Private"
                openModal={()=>setDisplayModal(true)}
                setItemId={setSelectedId}
              />
            ))}
          </Box>
        </Paper>
      ) : (
        <Box sx={{ display: "flex", alignItems: "center", mt: "5rem" }}>
          <Typography sx={{ fontSize: "3rem", fontWeight: 700, mr: "10.5rem" }}>
            Items{" "}
          </Typography>
          <Box>
            <AddIcon height={60} width={60} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default SellerProfileIItems;
