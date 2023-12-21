import { Box, useTheme } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { axiosPublic } from "src/axios/axios";
import ModalWrapper from "src/components/Modal/ModalWrapper";
import SelectComp from "src/components/Select/SelectComp";
import Items from "src/components/homeComponents/Items";

import Sellers from "src/components/homeComponents/Sellers";

import VisitorLayout from "src/components/layouts/VisitorLayout";
import useAppContext from "src/hooks/useAppContext";
import useCountryName from "src/hooks/useCountryName";
import { defaultItems, defaultSellers } from "src/utilities/constants";
import { countries } from "src/utilities/constants/countries";

const HomePage = () => {
  const [allItems, setAllItems] = useState<any[]>(defaultItems);
  const [allSellers, setAllSellers] = useState<any[]>(defaultSellers);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [country, setCountry] = useState<string>("");
  const countryNames = useCountryName();
  const { state } = useAppContext();
  const { token } = state;
  useEffect(() => {
    const fetchAll = async () => {
      try {
        setIsFetching(true);

        const [sellersResponse, itemsResponse] = await Promise.all([
          axiosPublic.get(
            `duo/collector/get-sellers?page=1&limit=10&country=${country}`
          ),
          axiosPublic.get(
            `duo/collector/get-items?page=1&limit=6&country=${country}&category`
          ),
        ]);

        const { sellers } = sellersResponse.data.data;
        const { items } = itemsResponse.data.data;
        setAllSellers(sellers);
        setAllItems(items);
        setIsFetching(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAll();
  }, [country]);
  

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
          menuItems={["My location","Everywhere",...countryNames]}
          handleChange={(value) => setCountry(value)}
          defaultValue={"My location"}
        />
        {/* <SelectComp
          selectLabel="Prices are in  "
          menuItems={["USD", "NGN", "NIS"]}
          handleChange={handleChange}
        /> */}
      </Box>
      <Sellers data={allSellers} isFetching={isFetching} />
      <Box sx={{ mt: "9rem" }} />
      <Items data={allItems} isFetching={isFetching} />
     
    </VisitorLayout>
  );
};

export default HomePage;
