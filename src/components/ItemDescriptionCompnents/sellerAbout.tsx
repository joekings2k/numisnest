import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import nora from "src/assets/Image/nora.jpg";
import SellerCard from "../cards/SellerCard";
import { Seller, singleSellerWOFeatured } from "src/utilities/types";
import useAppContext from "src/hooks/useAppContext";
import { useNavigate } from "react-router-dom";
import LINKS from "src/utilities/links";
import useCollectorsAxiosPrivate from "src/hooks/useCollectorsAxiosPrivate";
import { toast } from "react-toastify";

const seller: Seller = {
  flag: "ng",
  img: nora,
  name: "James Doe",
  selling: "World Bank Notes",
};
interface Props{
  data?:singleSellerWOFeatured
}
const SellerAbout = ({data }:Props) => {
  const navigate = useNavigate()
  const {state} = useAppContext()
  const {token} = state
  const axiosCollectorPrivate = useCollectorsAxiosPrivate()
  const addFavorites = async ()=>{
    try {
       await axiosCollectorPrivate.post(
        "duo/collector/add-fav",
        { seller_id :data?._id}
      );
      toast("Added to favorites", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        isLoading: false,
        type: "success",
        theme: "light",
        style: {},
      });
    } catch (error:any) {
      toast(`${error.response.data.message.split(":")[1]}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        isLoading: false,
        type: "error",
        theme: "light",
        style: {},
      });
      navigate(LINKS.Login)
    }
  }
  const addToFavorites = async()=>{
    if(token ){
      await addFavorites()
    }else{
       navigate(LINKS.Login);
    }
   
  }
  return (
    <Box sx={{ display: "flex", mt:"5rem",alignItems:"center" }}>
      <SellerCard
        flag={data?.iso_code}
        url={data?.photo}
        name={`${data?.first_name} ${data?.last_name}`}
        selling={data?.about}
        id={data?._id}
      />
      <Box sx={{ ml: "3rem" }}>
        <Typography
          component={"header"}
          sx={{
            fontSize: { xs: "2.5rem", md: "2.5rem", lg: "2.5rem" },
            fontWeight: 600,
          }}
        >
          About
        </Typography>
        <Typography
          component={"p"}
          sx={{
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.5rem", lg: "2rem" },
          }}
        >
          {data?.about}
        </Typography>
        <Box component={"div"} sx={{ display: "flex" ,mt:"3rem"}}>
          <Button
            fullWidth
            sx={{
              bgcolor: "#0047AB",
              color: "white",
              fontSize: "1rem",
              borderRadius: "0.5rem",
              py:"0.5rem"
            }}
          >
            Message seller
          </Button>
          <Button
            fullWidth
            sx={{
              bgcolor: "#0047AB",
              color: "white",
              fontSize: "1rem",
              borderRadius: "0.5rem",
              ml: "1.5rem",
            }}
          >
            Seller's profile
          </Button>
          <Button
            fullWidth
            sx={{
              bgcolor: "#0047AB",
              color: "white",
              fontSize: "1rem",
              borderRadius: "0.5rem",
              ml: "1.5rem",
            }}
            onClick={addToFavorites}
          >
           Add to favorites ❤️
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SellerAbout;
