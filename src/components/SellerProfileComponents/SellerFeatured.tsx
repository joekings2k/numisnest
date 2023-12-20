import { Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import useAxiosPrivate from 'src/hooks/useAxiosPrivate'

const SellerFeatured = () => {
  const axiosPrivate = useAxiosPrivate()
  useEffect(()=>{
    const fetchSellerFeatured = async()=>{
      try {
        const response = await axiosPrivate.get("")
      } catch (error) {
        
      }
    }
  },[])
  return (
    <Paper sx={{ position: "relative", mt: "5rem" }}>
      <Typography sx={{fontSize:"3rem",fontWeight:700}}>
        Featured
      </Typography>

    </Paper>
  )
}

export default SellerFeatured