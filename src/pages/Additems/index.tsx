import { Box, Typography } from '@mui/material'
import React from 'react'
import AddItemsComp from 'src/components/AddItemsComponents/AddItemsComp';
import VisitorLayout from 'src/components/layouts/VisitorLayout'

const AddItemsPage = () => {
  return (
    <VisitorLayout>
      <Typography sx={{ fontSize: "3rem", fontWeight: "800", mb: "1rem" }}>
        Add Item
      </Typography>
   
        <AddItemsComp />
     
    </VisitorLayout>
  );
}

export default AddItemsPage