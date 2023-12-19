import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import TextInput from "../form-components/textInput";
import { ChangeEvent, useState } from "react";
import LINKS from "src/utilities/links";
import ProfilePhoto from "../form-components/ProfilePhoto";
import useAppContext from "src/hooks/useAppContext";
import useAxiosPrivate from "src/hooks/useAxiosPrivate";
import useCollectorsAxiosPrivate from "src/hooks/useCollectorsAxiosPrivate";

interface Props {
  firstName?: string;
  lastName?: string;
  Country?: string;
  CountryCode?: string;
  PhoneNumber?: string;
  About?: string;
  DeliveryOption?: string;
  profile_photo?:any;
}
const EditProfileForm = ({firstName,lastName,Country,CountryCode,PhoneNumber,About,DeliveryOption,profile_photo}:Props) => {
  const {state} = useAppContext()
  const {userType} = state;
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [firstname, setFirstname] = useState<string |null |undefined>(firstName);
  const [lastname, setLastname] = useState<string | null |undefined>(lastName);
  const [country, setCountry] = useState<string | null |undefined>(Country);
  const [countryCode, setCountryCode] = useState<string | null |undefined>(CountryCode);
  const [phoneNumber, setPhoneNumber] = useState<string | null |undefined>(PhoneNumber);
  const [about, setAbout] = useState<string | null |undefined>(About);
  const [deliveryOption, setDeliveryOption] = useState<string | null |undefined>(DeliveryOption);
  const [profilePhoto,setProfilePhoto]  = useState<File|null|undefined>(profile_photo)

  const axiosPrivate =useAxiosPrivate()
  const axiosCollectorPrivate =useCollectorsAxiosPrivate()
  const valuesSubmit = [
    { head: "first_name", value: firstname },
    { head: "last_name", value: lastname },
    { head: "country_code", value: countryCode },
    { head: "mobile", value: phoneNumber },
    { head: "about", value: about },
    { head: "delivery_option", value: deliveryOption },
    { head: "country", value: country },
    { head: "profile_photo", value: profilePhoto }
  ];
  const UpdateProfile = async()=>{
    const formData = new FormData()
    valuesSubmit.forEach((val) => {
      if (typeof val.value === "string") {
        formData.append(val.head, val.value);
      } else if (val.value instanceof File) {
        formData.append(val.head, val.value);
      }
    });
    if (userType === "seller"){
      const response = await axiosPrivate.put(
        "seller/profile/update",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(response)
    }else{
       const response = await axiosCollectorPrivate.put(
         "duo/collector/profile/update",
         formData,
         {
           headers: { "Content-Type": "multipart/form-data" },
         }
       );
       console.log(response)
    }
  }
  return (
    <Paper
      sx={{
        bgcolor: "white",
        py: "2rem",
        px: { xs: "1rem", sm: "2rem", md: "3rem", lg: "3.5rem", xl: "4rem" },
        mt:"4rem"
      }}
    >
      <Box>
        <ProfilePhoto  setProfilePhoto={setProfilePhoto} profilePhoto={profilePhoto}/>
      </Box>

      <Grid
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
            xl: "",
          },
          columnGap: { xs: "1rem", lg: "1.5rem", xl: "2rem" },
        }}
      >
        <Box sx={{ mt: "1.5rem" }}>
          <Box component={"label"}>Firstname</Box>
          <TextInput
            fullWidth
            variant={"standard"}
            placeholder={"Enter your firstname"}
            name="first_name"
            value={firstname}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setFirstname(e.target.value)
            }
          />
        </Box>

        <Box sx={{ mt: "1.5rem" }}>
          <Box component={"label"}>Lastname</Box>
          <TextInput
            fullWidth
            variant={"standard"}
            placeholder={"Enter lastname"}
            name="last_name"
            type="text"
            value={lastname}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLastname(e.target.value)
            }
          />
        </Box>

        <Box sx={{ mt: "1.5rem" }}>
          <Box component={"label"}>Country</Box>
          <FormControl fullWidth>
            <Select
              variant={"standard"}
              fullWidth
              name="country"
              placeholder="country"
              value={country}
              onChange={(event: SelectChangeEvent<string | null>) =>
                setCountry(event.target.value as string)
              }
            >
              <MenuItem value={"Nigeria"}>Nigeria</MenuItem>
              <MenuItem value={"Israel"}>Israel</MenuItem>
              <MenuItem value={"America"}>America</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ mt: "1.5rem" }}>
          <Box component={"label"}>Country code</Box>
          <TextInput
            fullWidth
            variant={"standard"}
            placeholder={"Enter countryCode"}
            name="country_code"
            type="text"
            value={countryCode}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCountryCode(e.target.value)
            }
          />
        </Box>
      </Grid>
      <Box sx={{ mt: "1.5rem" }}>
        <Box component={"label"}>Phonenumber</Box>
        <TextInput
          fullWidth
          variant={"standard"}
          placeholder={"Enter phonenumber"}
          name="mobile"
          type="text"
          value={phoneNumber}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPhoneNumber(e.target.value)
          }
        />
      </Box>

      <Box sx={{ mt: "1.5rem" }}>
        <Box component={"label"}>About</Box>
        <TextInput
          fullWidth
          variant={"standard"}
          placeholder={"Tell us about yourself"}
          name="about"
          type="text"
          value={about}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setAbout(e.target.value)
          }
        />
      </Box>
      {userType === "seller" && (
        <Box sx={{ mt: "1.5rem" }}>
          <Box component={"label"}>Delivery Option</Box>
          <TextInput
            fullWidth
            variant={"standard"}
            placeholder={"Tell us how you want to deliver your items"}
            name="delivery_option"
            value={deliveryOption}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setDeliveryOption(e.target.value)
            }
          />
        </Box>
      )}

      <Box
        component={"div"}
        sx={{ display: "flex", justifyContent: "flex-end", mt: "2rem" }}
      >
        <Button
          sx={{
            backgroundColor: "#F4F4F6",
            color: "black",
            padding: "0.5rem 3.5rem",
            borderRadius: "0.4rem",
            mt: "2rem",
            mr: "1rem",
          }}
        >
          Cancel
        </Button>
        <Button
          sx={{
            backgroundColor: "#0047AB",
            color: "white",
            padding: "0.5rem 3.5rem",
            borderRadius: "0.4rem",
            mt: "2rem",
          }}
          onClick={UpdateProfile}
        >
          Update
        </Button>
      </Box>
    </Paper>
  );
};

export default EditProfileForm;
