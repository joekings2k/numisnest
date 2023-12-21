import React from 'react'
import { AddIcon } from '../Icons/icons';
import { Box, Paper, Typography } from '@mui/material';
import { CollectionType } from 'src/utilities/types';
import { dark } from '@mui/material/styles/createPalette';
import Collectionscard from '../cards/collectioncard';

interface Props {
  data?:CollectionType[]|null
}

const SellerCollection = ({data}:Props) => {
  
  return (
    <Box component={"div"}>
      {data?.[0] ? (
        <Paper
          sx={{
            position: "relative",
            mt: "5rem",
            pl: "2rem",
            pb: "1rem",
            pt: "2rem",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "3rem",
                fontWeight: 700,
                mr: "2rem",
                mb: "0.5rem",
                color: "#0047AB",
              }}
            >
              Collection
            </Typography>
          </Box>
          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: " 1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
                xl: "repeat(3, 1fr)",
              },
              justifyContent: "center",
              rowGap: "1rem",
            }}
          >
            {data?.map((collection) => (
              <Collectionscard
                collectionName={collection.name}
                collectionItems={collection.coll_list}
              />
            ))}
          </Box>
        </Paper>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: "5rem",
            color: "#0047AB",
          }}
        >
          <Typography sx={{ fontSize: "3rem", fontWeight: 700, mr: "4rem" }}>
            Collection
          </Typography>
          <Box>
            <AddIcon height={60} width={60} color="#0047AB" />
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default SellerCollection