import { Box, Paper, Typography } from '@mui/material';
import { defaultItems } from 'src/utilities/constants';
import { ItemType, SellerProfileType, SingleSeller, SingleSellerFeaturedItem} from 'src/utilities/types';
import ItemsCard from '../cards/ItemsCard';


interface Props {
  data?:SingleSeller
}

const Featured  = ({data}: Props) => {
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
        {data?.seller_featured_items.slice(0, 6).map((item: SingleSellerFeaturedItem, index: number) => (
          <ItemsCard
            key={index}
            flag={data.iso_code}
            url={item.photo1}
            firstName={data.first_name}
            lastName={data.last_name}
            selling={item.name}
            createdAt={item.createdAt}
            amount={item.convertedPrice}
            
            bgColor="#F4F4F6"
          />
        ))}
      </Box>
    </Paper>
  );
};

export default Featured