
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
  const [country ,setCountry] =useState<string>("Nigeria")
  const [category, setCategory] = useState<string>("banknote");
  useEffect(() => {
    const fetchAllsellers = async () => {
      try {
        setIsFetching(true);
        const response = await axiosPublic.get(
          `duo/collector/get-items?page=1&limit=2&country=${country}&category=${category}`
        );
        const { items } = response.data.data;
        setAllItems(items);
        setIsFetching(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllsellers();
  }, [country,category]);
  
  
  return (
    <VisitorLayout>
      <ItemsComponets  data={allItems} isFetching={isFetching} setCategory={setCategory} setCountry={setCountry} countryValue={country} categoryValue={category} />
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
