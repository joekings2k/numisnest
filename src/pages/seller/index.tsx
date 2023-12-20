import { DataArray, RepeatOnSharp, UndoOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosPublic } from "src/axios/axios";
import Collections from "src/components/Profilecomponents/Collections";
import Featured from "src/components/Profilecomponents/Featured";
import SellerProfile from "src/components/Profilecomponents/SellerProfile";
import ItemsProfile from "src/components/Profilecomponents/items";
import Items from "src/components/homeComponents/Items";
import VisitorLayout from "src/components/layouts/VisitorLayout";
import useScrollToTop from "src/hooks/useScrolllToTop";
import { defaultItems, defaultSellerItems } from "src/utilities/constants";
import { CollectionType, ItemType, SellerItemType, SingleSeller } from "src/utilities/types";

const SellerPage = ({}) => {
  const { id } = useParams();
  const [data, setData] = useState<SingleSeller | undefined>(undefined);
  const [sellerItem, setSellerItem] = useState<SellerItemType[]>(defaultSellerItems);
  const [sellerCollection,setSellerCollection]= useState<CollectionType[]|undefined>(undefined)
  useScrollToTop()
  useEffect(() => {
    const fetchSellerPageData = async () => {
      try {
        const [sellerProfileReponse, sellerItemsResponse] = await Promise.all([
          axiosPublic.get(`duo/collector/get-seller/${id}`),
          axiosPublic.get(`duo/collector/seller-items/${id}`),
        ]);
        const { data:sellerProfile } = sellerProfileReponse.data;
        const { data: sellerItemData } = sellerItemsResponse.data;

        
        setData(sellerProfile);
        setSellerItem(sellerItemData);
        
      } catch (error) {
        console.log(error);
      }
    };
    const fetchSingleSellerCollections =async()=>{
      try {
        const response = await axiosPublic.get(
          `duo/collector/seller-collections/${id}`
        );
        const {data}= response.data
        setSellerCollection(data)
      } catch (error) {
        
      }
    }
    fetchSellerPageData();
    fetchSingleSellerCollections()
  }, []);
  console.log(sellerItem)
  return (
    <VisitorLayout>
      <SellerProfile
        firstName={data?.first_name}
        lastName={data?.last_name}
        country={data?.country}
        createdAt={data?.createdAt}
        about={data?.about}
        mobile={data?.mobile}
        deliveryOptions={data?.delivery_option}
        countryCode={data?.country_code}
        url={data?.photo}
        flag={data?.iso_code}
      />
      <Featured data={data} />
      <Collections sellerCollectionData={sellerCollection} />
      <ItemsProfile data={sellerItem} />
    </VisitorLayout>
  );
};

export default SellerPage;
