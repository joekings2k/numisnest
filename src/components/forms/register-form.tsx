import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Typography,
  useTheme,
} from "@mui/material";
import { FC } from "react";
import TextInput from "../form-components/textInput";
import { CheckBox } from "@mui/icons-material";
import { Link } from "react-router-dom";
import LINKS from "src/utilities/links";
import { FormValueRegister } from "src/utilities/types";
import { Formik, FormikHelpers } from "formik";
import * as yup from "yup";
import { axiosPublic } from "src/axios/axios";

export enum RegisterType {
  Collector = "collector",
  Seller = "seller",
}
interface Props {
  type: RegisterType;
}


const initialValueRegister: FormValueRegister = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  cpassword: "",
  country_code: "",
  mobile: "",
  about: "",
  delivery_option: "",
  country: "",
};
const registerSchema = yup.object().shape({
  first_name: yup.string().required("required"),
  last_name: yup.string().required("required"),
  email: yup.string().required("required"),
  password: yup.string().required("required"),
  cpassword: yup
    .string()
    .required("required")
    .oneOf([yup.ref("password")], "Passwords must match"),
  country_code: yup.string().required("required"),
  mobile: yup.string().required("required"),
  about: yup.string().required("required"),
  country: yup.string().required("required"),
});

const registerSchemaSeller = yup.object().shape({
  first_name: yup.string().required("required"),
  last_name: yup.string().required("required"),
  email: yup.string().required("required").email("enter a valid email"),
  password: yup.string().required("required"),
  cpassword: yup
    .string()
    .required("required")
    .oneOf([yup.ref("password")], "Passwords must match"),
  country_code: yup.string().required("required"),
  mobile: yup
    .string()
    .required("required")
    .max(11, "phone number must not be more than 10 characters")
    .min(11, "Phone number must not be less than 10 characters"),
  about: yup.string().required("required"),
  delivery_option: yup.string().required("required"),
  country: yup.string().required("required"),
});

const RegisterForm = ({ type }: Props) => {
  const theme = useTheme();
  const blue = theme.palette.primary.light;
  const sellerRegister = async (values:FormValueRegister)=>{
    try {
      const response = await axiosPublic.post("seller/signup", values);
    } catch (error) {
      console.log(error)
    }
    
  }
  const collectorRegister = async (values:FormValueRegister)=>{
    try {
      const response = await axiosPublic.post("duo/collector/signup", values);
    } catch (error) {
      console.log(error)
    }
    
  }
  const handleFormSubmit = async (values:FormValueRegister, onSubmitProps :FormikHelpers<FormValueRegister>)  => {
    try {
      type === RegisterType.Collector ? await collectorRegister(values) :await sellerRegister(values)
      onSubmitProps.resetForm()
      
    } catch (error) {
      
    }
    
  };

  return (
    <Formik
      onSubmit={(values, onSubmitProps) =>
        handleFormSubmit(values, onSubmitProps)
      }
      initialValues={initialValueRegister}
      validationSchema={
        type === RegisterType.Collector ? registerSchema : registerSchemaSeller
      }
      enableReinitialize
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
        <Paper
          sx={{
            bgcolor: "white",
            py: "2rem",
            px: {
              xs: "1rem",
              sm: "2rem",
              md: "3rem",
              lg: "3.5rem",
              xl: "4rem",
            },
          }}
          onSubmit={handleSubmit}
          component={"form"}
        >
          <Typography
            sx={{
              fontSize: "3rem",
              fontWeight: 600,
              textAlign: "center",
              width: "fullWidth",
            }}
          >
            Welcome
          </Typography>
          <Typography
            sx={{ textAlign: "center", width: "fullWidth", mt: "1.5rem" }}
          >
            Welcome ! enter your details to Register
          </Typography>
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
              <Box component={"label"}>First Name</Box>
              <TextInput
                fullWidth
                variant={"standard"}
                placeholder={"Enter First Name "}
                name="first_name"
                value={values.first_name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  Boolean(touched.first_name) && Boolean(errors.first_name)
                }
                helperText={touched.first_name && errors.first_name}
              />
            </Box>
            <Box sx={{ mt: "1.5rem" }}>
              <Box component={"label"}>Last Name</Box>
              <TextInput
                fullWidth
                variant={"standard"}
                placeholder={"Enter Last Name"}
                name="last_name"
                value={values.last_name}
                onChange={handleChange}
                error={Boolean(touched.last_name) && Boolean(errors.last_name)}
                helperText={touched.last_name && errors.last_name}
                onBlur={handleBlur}
              />
            </Box>
          </Grid>

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
              <Box component={"label"}>Country</Box>
              <FormControl
                fullWidth
                error={Boolean(touched.country && errors.country)}
              >
                <Select
                  variant={"standard"}
                  fullWidth
                  name="country"
                  value={values.country}
                  onChange={handleChange}
                  placeholder="country"
                  onBlur={handleBlur}
                >
                  <MenuItem value={"nigeria"}>Nigeria</MenuItem>
                  <MenuItem value={"isreal"}>Isreal</MenuItem>
                  <MenuItem value={"america"}>America</MenuItem>
                </Select>
                <FormHelperText>
                  {touched.country && errors.country}
                </FormHelperText>
              </FormControl>
            </Box>
            <Box sx={{ mt: "1.5rem" }}>
              <Box component={"label"}>Country code</Box>
              <TextInput
                fullWidth
                variant={"standard"}
                placeholder={"country code"}
                name="country_code"
                value={values.country_code}
                onChange={handleChange}
                error={
                  Boolean(touched.country_code) && Boolean(errors.country_code)
                }
                helperText={touched.country_code && errors.country_code}
                onBlur={handleBlur}
              />
            </Box>
          </Grid>

          <Box sx={{ mt: "1.5rem" }}>
            <Box component={"label"}>Email</Box>
            <TextInput
              fullWidth
              variant={"standard"}
              placeholder={"Enter Email"}
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(touched.email) && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
          </Box>
          <Box sx={{ mt: "1.5rem" }}>
            <Box component={"label"}>Phone Number</Box>
            <TextInput
              fullWidth
              variant={"standard"}
              placeholder={"Enter Phone Number"}
              name="mobile"
              value={values.mobile}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(touched.mobile) && Boolean(errors.mobile)}
              helperText={touched.mobile && errors.mobile}
            />
          </Box>

          <Box sx={{ mt: "1.5rem" }}>
            <Box component={"label"}>Password</Box>
            <TextInput
              fullWidth
              variant={"standard"}
              placeholder={"Enter password"}
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(touched.password) && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />
          </Box>
          <Box sx={{ mt: "1.5rem" }}>
            <Box component={"label"}>Confirm Password</Box>
            <TextInput
              fullWidth
              variant={"standard"}
              placeholder={"Confirm you password"}
              name="cpassword"
              value={values.cpassword}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(touched.cpassword) && Boolean(errors.cpassword)}
              helperText={touched.cpassword && errors.cpassword}
            />
          </Box>
          <Box sx={{ mt: "1.5rem" }}>
            <Box component={"label"}>About</Box>
            <TextInput
              fullWidth
              variant={"standard"}
              placeholder={"Tell us about you and what you are collecting"}
              name="about"
              value={values.about}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(touched.about) && Boolean(errors.about)}
              helperText={touched.about && errors.about}
            />
          </Box>
          {type === RegisterType.Seller && (
            <Box sx={{ mt: "1.5rem" }}>
              <Box component={"label"}>Delivery Option</Box>
              <TextInput
                fullWidth
                variant={"standard"}
                placeholder={"Tell us how you want to deliver your items"}
                name="delivery_option"
                value={values.delivery_option}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  Boolean(touched.delivery_option) &&
                  Boolean(errors.delivery_option)
                }
                helperText={touched.delivery_option && errors.delivery_option}
              />
            </Box>
          )}

          <Button
            fullWidth
            sx={{
              bgcolor: "#0047AB",
              color: "white",
              fontSize: "1.5rem",
              borderRadius: "1rem",
              mt: "1.5rem",
            }}
            type="submit"
          >
            Sign Up{" "}
          </Button>
          <Typography
            sx={{
              fontSize: "0.76rem",
              color: "black",
              textAlign: "center",
              width: "fullWidth",
              mt: ".5rem",
            }}
          >
            Already have an account?{" "}
            <Typography
              component={"span"}
              sx={{ fontSize: "0.76rem", color: "#0047AB", fontWeight: 700 }}
            >
              {" "}
              <Link
                to={LINKS.Login}
                style={{
                  textDecoration: "none",
                  padding: "0",
                  margin: "0",
                  color: "#0047AB",
                }}
              >
                Sign In
              </Link>{" "}
            </Typography>
          </Typography>
        </Paper>
      )}
    </Formik>
  );
};

export default RegisterForm;
