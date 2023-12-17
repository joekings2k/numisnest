
import VisitorLayout from "src/components/layouts/VisitorLayout";
import Image from "src/components/Image";
import group2 from "src/assets/Image/Group 2.png";
import ItemsComponets from "src/components/AllItems";
import { useEffect, useState } from "react";
import { axiosPublic } from "src/axios/axios";
import { defaultItems } from "src/utilities/constants";
import { Seller, SellerType } from "src/utilities/types";



const AllItems = ({}) => {
  const [allItems, setAllItems] = useState<any[]>(defaultItems);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  useEffect(() => {
    const fetchAllsellers = async () => {
      try {
        setIsFetching(true);
        console.log("working...");
        const response = await axiosPublic.get(
          `duo/collector/get-items?page=1&limit=6&country=Nigeria`
        );
        const { items } = response.data.data;
        setAllItems(items);
        setIsFetching(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllsellers();
  }, []);
  
  
  return (
    <VisitorLayout>
      <ItemsComponets  data={allItems} isFetching={isFetching}/>
      <Image
        src={group2}
        alt="group"
        sx={{
          width: "8rem",
          height: "8rem",
          position: "absolute",
          zIndex: -1,
          right: 0,
          top: 300,
        }}
      />
      <Image
        src={group2}
        alt="group"
        sx={{
          width: "10rem",
          height: "10rem",
          position: "absolute",
          zIndex: -1,
          left: 16,
          bottom: 50,
        }}
      />
    </VisitorLayout>
  );
};
export default AllItems;
