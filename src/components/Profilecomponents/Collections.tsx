import { Box, Paper, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { ArrowForwardIosOutlined } from '@mui/icons-material';
import Collectionscard from '../cards/collectioncard';



const Collections = ({}) => {
  const navigate = useNavigate()
  return (
    <Paper sx={{ mt: "6rem", pl: "2rem", pt: "2rem",pr:"1rem" }}>
      <Box
        sx={{
          display: "flex",
          mb: "1.5rem",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontSize: "2.5rem", fontWeight: 700 }}>
          Collections
        </Typography>
        <div onClick={() => navigate("")}>
          <Typography
            variant="h4"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#0047AB",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            See all <ArrowForwardIosOutlined sx={{ marginLeft: "0.76rem" }} />
          </Typography>
        </div>
      </Box>
      <Box sx={{display:"flex",justifyContent:"space-between",pb:"1.5rem"}}>
        <Collectionscard />
        <Collectionscard />
        <Collectionscard />
      </Box>
    </Paper>
  );
}

export default Collections