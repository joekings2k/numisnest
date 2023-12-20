import { Box, Typography } from '@mui/material';
import React from 'react'
import { AddIcon } from '../Icons/icons';

const SellerProfileIItems = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mt: "5rem" }}>
      <Typography sx={{ fontSize: "3rem", fontWeight: 700, mr: "10.5rem" }}>
        Items{" "}
      </Typography>
      <Box>
        <AddIcon height={60} width={60} />
      </Box>
    </Box>
  );
}

export default SellerProfileIItems