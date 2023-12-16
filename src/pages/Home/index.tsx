import { Box, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { axiosPublic } from "src/axios/axios";
import SelectComp from "src/components/Select/SelectComp";
import Items from "src/components/homeComponents/Items";

import Sellers from "src/components/homeComponents/Sellers";

import VisitorLayout from "src/components/layouts/VisitorLayout";
import useAppContext from "src/hooks/useAppContext";
import { defaultItems, defaultSellers } from "src/utilities/constants";

const HomePage = () => {
   const [allItems, setAllItems] = useState<any[]>(defaultItems);
   const [allSellers, setAllSellers] = useState<any[]>(defaultSellers);
   const [isFetching, setIsFetching] = useState<boolean>(true);
   const {state}= useAppContext()
  const {token }= state
   console.log(token)
   useEffect(() => {
     const fetchAll = async () => {
       try {
         setIsFetching(true);
        
         const [sellersResponse, itemsResponse] = await Promise.all([
           axiosPublic.get(
             `duo/collector/get-sellers?page=1&limit=10&country=Nigeria`
           ),
           axiosPublic.get(
             `duo/collector/get-items?page=1&limit=6&country=Nigeria&category`
           ),
         ]); 
        
         const {sellers}= sellersResponse.data.data
         const {items}= itemsResponse.data.data
         setAllSellers(sellers)
         setAllItems(items)
         setIsFetching(false);
       } catch (error) {
         console.log(error);
       }
     };
     fetchAll();
   }, []);
  
  return (
    <VisitorLayout>
      <Box
        sx={{ mt: "4rem", display: "flex", justifyContent: "space-between" }}
      >
        <Box
          sx={{
            position: "absolute",
            bgcolor: "blue",
            width: "10rem",
            height: "10rem",
            bottom: 100,
            right: 0,
            zIndex: -1,
            transform: "rotate(90deg)",
            clipPath: "ellipse(50% 50% at 50% 0%)",
            overflow: "hidden",
          }}
        ></Box>
        <SelectComp
          selectLabel="Showing sellers and items  located in "
          menuItems={["Israel", "Nigera", "America"]}
        />
        <SelectComp
          selectLabel="Prices are in  "
          menuItems={["USD", "NGN", "NIS"]}
        />
      </Box>
      <Sellers data={allSellers} isFetching={isFetching}/>
      <Box sx={{ mt: "9rem" }} />
      <Items />
    </VisitorLayout>
  );
};

export default HomePage;