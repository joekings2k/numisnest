import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CollectorDashboard from 'src/components/collectorProfile/CollectorDashboard'
import FavoritesComponent from 'src/components/collectorProfile/favorites'
import VisitorLayout from 'src/components/layouts/VisitorLayout'
import useCollectorsAxiosPrivate from 'src/hooks/useCollectorsAxiosPrivate'
import { SellerProfileType } from 'src/utilities/types'

const CollectorProfile = () => {
  const axiosCollectorPrivate = useCollectorsAxiosPrivate()
  const [profileData, setProfileData] = useState<Partial<SellerProfileType>| null>(
    null
  );
  useEffect(()=>{
    const fetchSellerProfile = async()=>{
      try {
        const response = await axiosCollectorPrivate.get(
          "duo/collector/profile/fetch"
        );
       const { data } = response.data;
       setProfileData(data);
      } catch (error) {
        
      }
    }
    fetchSellerProfile()
  },[])
  return (
    <VisitorLayout>
      <CollectorDashboard
        firstName={profileData?.first_name}
        lastName={profileData?.last_name}
        createdAt={profileData?.createdAt}
        about={profileData?.about}
        countryCode={profileData?.country_code}
        mobile={profileData?.mobile}
        url={profileData?.photo}
        country={profileData?.country}
        flag={profileData?.iso_code}
      />
      <FavoritesComponent />
    </VisitorLayout>
  );
}

export default CollectorProfile