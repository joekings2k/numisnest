import SellersComponents from "src/components/AlllSellersCompnents";
import VisitorLayout from "src/components/layouts/VisitorLayout";
import Image from "src/components/Image";
import group2 from "src/assets/Image/Group 2.png";
import { useEffect, useState } from "react";
import { axiosPublic } from "src/axios/axios";
import { defaultSellers } from "src/utilities/constants";
import { Seller, SellerType } from "src/utilities/types";


const AllSellers = ({}) => {
  const [allSellers, setAllSellers] = useState<Partial<SellerType>[]>(
    defaultSellers
  );
  const [isFetching,setIsFetching]= useState<boolean>(false)
  useEffect(() => {
    const fetchAllsellers = async () => {
      try {
        setIsFetching(true)
        console.log("working...")
        const response = await axiosPublic.get(
          `duo/collector/get-sellers?page=1&limit=10&country=Nigeria`
        );
        const { sellers } = response.data.data;
        setAllSellers(sellers);
        setIsFetching(false)
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllsellers();
  }, []);
  console.log(allSellers)
  return (
    <VisitorLayout>
      <SellersComponents isFetching={isFetching} data={allSellers} />
      <Image
        src={group2}
        alt="group"
        sx={{ width: "8rem", height: "8rem", position: "absolute", zIndex: -1,right:0 ,top:300}}
      />
      <Image
        src={group2}
        alt="group"
        sx={{ width: "10rem", height: "10rem", position: "absolute", zIndex: -1,left:16 ,bottom:50}}
      />
    </VisitorLayout>
  );
};
export default AllSellers;
