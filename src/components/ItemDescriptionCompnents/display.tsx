import { Box, Grid, Typography, duration } from "@mui/material";
import { motion } from "framer-motion";
import { FC, useState } from "react";
import money from "src/assets/Image/money.png";

const Display: FC = () => {
  const [active, setActive] = useState<number >(0); 
  const arr =[money,money,money,money]
  const positionArray = [
    { x: 170, y: -170, scale: 2.7 },
    { x: -68, y: -170, scale: 2.7 },
    { x: 168, y: -283, scale: 2.7 },
    { x: -68, y: -283, scale: 2.7 },
  ];
  const transformedArray = arr.map((item, index) => ({
    item,
    position: positionArray[index], 
  }));
  return (
    <Box component="div">
      <Typography>Items last updated 4 days ago 20.11.2023</Typography>
      <Box
        sx={{
          borderTop: "1.5px solid #000",
          borderRight: "1.5px solid #000",
          width: "35rem",
          height: "16rem",
        }}
      ></Box>
      <Grid
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 0fr)",
            sm: "repeat(2, 0fr)",
            md: "repeat(2, 0fr)",
            lg: "repeat(2, 0fr)",
            xl: "repeat(2, 0fr)",
          },
          width: "35rem",
          columnGap: "1.5rem",
          rowGap: "1.5rem",
        }}
      >
        {transformedArray.map((item, index: number) => (
          <Box
            key={index}
            component={motion.div}
            animate={index === active ? item.position : ""}
            whileHover={index !== active ? { scale: 1.1 } :""}
            onClick={() => setActive(index)}
            transition={{ duration: 0.5 }}
            sx={{
              width: "13rem",
              height: "5.5rem",
              background: `url(${item.item})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Display;
