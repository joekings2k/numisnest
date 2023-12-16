import { Box, Paper, Typography } from '@mui/material';
import { defaultItems } from 'src/utilities/constants';
import { ItemType, item } from 'src/utilities/types';
import ItemsCard from '../cards/ItemsCard';


interface Props {
  
}

const Featured  = ({}: Props) => {
  return (
    <Paper sx={{ mt: "6rem", pl: "2rem", pt: "2rem" }}>
      <Typography sx={{ fontSize: "2rem", fontWeight: 600 }}>
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
        {defaultItems.slice(0, 6).map((item: ItemType, index: number) => (
          <ItemsCard
            key={index}
            flag={item.iso_code}
            url={item.photo1}
            firstName={item.seller_info[0].first_name}
            lastName={item.seller_info[0].last_name}
            selling={item.description}
            createdAt={item.country}
            amount={item.convertedPrice}
            
            bgColor="#F4F4F6"
          />
        ))}
      </Box>
    </Paper>
  );
};

export default Featured