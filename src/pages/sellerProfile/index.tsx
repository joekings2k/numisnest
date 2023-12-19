import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SellerDashboard from 'src/components/SellerProfileComponents/SellerDashboard'
import VisitorLayout from 'src/components/layouts/VisitorLayout'
import useAxiosPrivate from 'src/hooks/useAxiosPrivate'
import { SellerProfileType } from 'src/utilities/types'


const SellerProfile = () => {
  const axiosPrivate = useAxiosPrivate()
  const [profileData,setProfileData ]=useState<SellerProfileType|null>(null)
  
  useEffect(()=>{
    const fetchSellerProfile  = async()=>{
      try {
        const response = await axiosPrivate("seller/profile/fetch");
        const {data }= response.data
        setProfileData(data)
      } catch (error) {
        
      }
    }
    fetchSellerProfile()
  },[])

  return (
    <VisitorLayout>
      <SellerDashboard firstName={profileData?.first_name} lastName={profileData?.last_name} createdAt={profileData?.createdAt} about={profileData?.about}  countryCode={profileData?.country_code} mobile={profileData?.mobile} deliveryOptions ={profileData?.delivery_option} url={profileData?.photo} country={profileData?.country} flag={profileData?.iso_code} />
    </VisitorLayout>
  )
}

export default SellerProfile