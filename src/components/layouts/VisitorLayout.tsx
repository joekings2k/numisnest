import { Box, useMediaQuery } from "@mui/material"
import Homeheader from "../headers/Homeheader"
import { ReactNode } from "react"
import radialbg from "src/assets/Image/radalbg.png"
import Image from "../Image"
interface Props{
  children:ReactNode
}
const VisitorLayout = ({children}:Props) => {
  const isNotMobileScreens = useMediaQuery("(min-width:900px)");
  
  return (
    <Box sx={{ position: "relative", zIndex: 2 }}>
      <Homeheader />

      <Box
        sx={{
          px: {
            xs: "0.8rem",
            sm: "1.8rem",
            md: "2.8rem",
            lg: "3.8",
            xl: "4.6rem",
          },
        }}
      >
        {children}
      </Box>
      {isNotMobileScreens && (
        <Image
          src={radialbg}
          alt="bg"
          sx={{
            width: "50rem",
            height: "40rem",
            zIndex: -1,
            position: "absolute",
            top: 400,
          }}
        />
      )}
    </Box>
  );
}

export default VisitorLayout