import { Box, Typography } from "@mui/material"

import { SingleItemType } from "src/utilities/types"
interface Props {
  collectionName:string
  collectionItems:Partial<SingleItemType>[]
}
const Collectionscard= ({collectionName ,collectionItems}:Props) => {
  const images  = collectionItems.map((collectionnn:Partial<SingleItemType>) =>collectionnn.photo1)

  const fillImages = (images:any[], count:number) => {
    const filledImages = Array.from({ length: count }, (_, index) =>
      index < images.length ? images[index] : null
    );
    return filledImages;
  };
  const filledImages = fillImages(images,4)
  return (
    <Box
      sx={{
        backgroundColor: "#F4F4F6",

        width: { xs: "20rem", lg: "23rem", xl: "24rem" },
        // height: { xs: "16rem", lg: "15rem", xl: "16rem" },
        display: "flex",
        flexDirection: "column",
        position: "relative",
        borderRadius: "0.6rem",
        px: "0.7rem",
        pb:"1rem",
        transition: "all 0.3s ease-in-out allow-discrete",
        "&:hover": {
          boxShadow: " 3px 5px 10px 0.7px rgba(0, 0, 0, .2)",
          cursor: "pointer",
        },
      }}
    >
      <Typography
        sx={{ fontSize: "1.5rem", px: "2rem", textAlign: "center" }}
      >
        {collectionName}{" "}
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 0fr)",
          columnGap: "rem",
          rowGap: "0rem",
          justifyContent: "center",
          mt:"1rem"
        }}
      >
        {filledImages.map((image, index) => (
          <Box
          key={index}
            sx={{
              width: { xs: "5rem", lg: "8rem", xl: "9.5rem" },
              height: { xs: "5rem", lg: "8rem", xl: "9.5rem" },
              border: "2px solid #000",
              backgroundImage: `url(${image})`,
              backgroundSize:"cover",
              backgroundRepeat:"no-repeat",
              backgroundPosition:"center"
            }}
          ></Box>
        ))}
      </Box>
    </Box>
  );
}

export default Collectionscard