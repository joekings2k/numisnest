import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SellerCollection from 'src/components/SellerProfileComponents/SellerCollection'
import SellerDashboard from 'src/components/SellerProfileComponents/SellerDashboard'
import SellerFeatured from 'src/components/SellerProfileComponents/SellerFeatured'
import SellerProfileItems from 'src/components/SellerProfileComponents/SellerProfileIItems'
import VisitorLayout from 'src/components/layouts/VisitorLayout'
import useAxiosPrivate from 'src/hooks/useAxiosPrivate'
import { CollectionType, SellerProfileType } from 'src/utilities/types'


const SellerProfile = () => {
  const axiosPrivate = useAxiosPrivate()
  const [profileData,setProfileData ]=useState<SellerProfileType|null>(null)
  const [sellerProfileCollections,setSellerProfileCollections] = useState<CollectionType[]|null>(null)
  useEffect(()=>{
    const fetchSellerProfile  = async()=>{
      try {
        const [
          sellerProfileReponse,
          sellerCollectionReponse,
          sellerProfileItems,
        ] = await Promise.all([
          axiosPrivate.get("seller/profile/fetch"),
          axiosPrivate.get("seller/collection/fetch"),
          axiosPrivate.get("seller/seller-items"),
        ]);
        
        const {data:sellerProfile }= sellerProfileReponse.data
        const {data:profileCollection}= sellerCollectionReponse.data
        console.log(sellerProfileItems
          )
        setProfileData(sellerProfile)
        setSellerProfileCollections(profileCollection)
      } catch (error) {
        
      }
    }
    fetchSellerProfile()
  },[])

  return (
    <VisitorLayout>
      <SellerDashboard firstName={profileData?.first_name} lastName={profileData?.last_name} createdAt={profileData?.createdAt} about={profileData?.about}  countryCode={profileData?.country_code} mobile={profileData?.mobile} deliveryOptions ={profileData?.delivery_option} url={profileData?.photo} country={profileData?.country} flag={profileData?.iso_code} />
      <SellerFeatured id={profileData?._id} />
      <SellerCollection data={sellerProfileCollections} />
      <SellerProfileItems />
    </VisitorLayout>
  )
}

export default SellerProfile