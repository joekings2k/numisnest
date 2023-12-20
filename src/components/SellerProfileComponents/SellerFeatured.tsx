import { Box, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { axiosPublic } from 'src/axios/axios'
import useAxiosPrivate from 'src/hooks/useAxiosPrivate'
import { Spinner } from 'src/pages/Item';
import { SingleSeller, SingleSellerFeaturedItem } from 'src/utilities/types';
import ItemsCard from '../cards/ItemsCard';
import { AddIcon } from '../Icons/icons';
interface Props {
  id ?:string;
}
const SellerFeatured = ({id}:Props) => {
  const axiosPrivate = useAxiosPrivate()
  const [featured,setFeatured]=useState<SingleSellerFeaturedItem []|null>(null)
  useEffect(()=>{
    const fetchSellerFeatured = async()=>{
      try {
        if(id){
          const response = await axiosPublic.get(
            `duo/collector/get-seller/${id}`
          );
          const { data }: { data: SingleSeller } = response.data;
          setFeatured(data.seller_featured_items);
        }else {
          setFeatured(null)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchSellerFeatured()
  },[id])
 
  if (!id){
    return (
      <Spinner />
    )
  }
  return (
    <Box>
      {featured?.[0] ? (
        <Paper
          sx={{ position: "relative", mt: "5rem", pl: "2rem", pb: "1rem" ,pt:"2rem"}}
        >
          <Typography sx={{ fontSize: "3rem", fontWeight: 700, mr: "2rem",mb:"0.5rem" }}>
            Featured
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                sm: "repeat(3, 1fr)",
                md: "repeat(4, 1fr)",
                lg: "repeat(6, 1fr)",
                xl: "repeat(6, 1fr)",
              },
              columnGap: { xs: "0.5rem", lg: "0.9rem", xl: "2rem" },
              rowGap: "2rem",
              ml: "-1.5rem",
              transform: "scale(0.96)",
              pb: "1rem",
            }}
          >
            {featured
              .slice(0, 6)
              .map((item: SingleSellerFeaturedItem, index: number) => (
                <ItemsCard
                  key={index}
                  url={item.photo1}
                  selling={item.name}
                  amount={item.price}
                  currency={"usd"}
                  bgColor="#F4F4F6"
                  height="14rem"
                  id={item._id}
                />
              ))}
          </Box>
        </Paper>
      ) : (
        
          <Box sx={{ display: "flex", alignItems: "center" ,mt :"5rem"}}>
            <Typography sx={{ fontSize: "3rem", fontWeight: 700, mr: "5.5rem" }}>
              Featured{" "}
            </Typography>
            <Box>
              <AddIcon  height={60} width={60}/>
            </Box>
          </Box>
        
      )}
    </Box>
  );
}

export default SellerFeatured
