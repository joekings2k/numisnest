import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import TextInput from "../form-components/textInput";

import { Link, useNavigate } from "react-router-dom";
import LINKS from "src/utilities/links";
import { axiosPublic } from "src/axios/axios";
import useAppContext from "src/hooks/useAppContext";
import { ActionType } from "src/utilities/context/context";

const LoginForm = ({}) => {
  const theme = useTheme();
  const blue = theme.palette.primary.light;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { dispatch } = useAppContext();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axiosPublic.post("duo/general/signin", {
        email: email,
        password: password,
      });
      const { token, email: userEmail } = response.data.data;
      console.log(userEmail);
      dispatch({ type: ActionType.setLogin, payload: { token: token } });
      navigate(LINKS.sellerProfile);
    } catch (error) {}
  };
  return (
    <Paper
      sx={{
        bgcolor: "white",
        py: "2rem",
        px: { xs: "1rem", sm: "2rem", md: "3rem", lg: "3.5rem", xl: "4rem" },
      }}
    >
      <Typography
        sx={{
          fontSize: "3rem",
          fontWeight: 600,
          textAlign: "center",
          width: "fullWidth",
        }}
      >
        Welcome Back
      </Typography>
      <Typography
        sx={{ textAlign: "center", width: "fullWidth", mt: "1.5rem" }}
      >
        Welcome Back! enter your details to sign in
      </Typography>
      <Box sx={{ mt: "1.5rem" }}>
        <Box component={"label"}>Email</Box>
        <TextInput
          fullWidth
          variant={"standard"}
          placeholder={"Enter email address "}
          name="email"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
      </Box>
      <Box sx={{ mt: "1.5rem" }}>
        <Box component={"label"}>password</Box>
        <TextInput
          fullWidth
          variant={"standard"}
          placeholder={"Enter password"}
          name="password"
          type="password"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: "2rem",
        }}
      >
        <FormControlLabel
          value="top"
          control={<Checkbox sx={{ color: "#0047AB" }} />}
          label="Remember Me"
        />
        <Typography sx={{ fontWeight: 600, color: blue }}>
          {" "}
          Forgot password?
        </Typography>
      </Box>

      <Button
        fullWidth
        sx={{
          bgcolor: "#0047AB",
          color: "white",
          fontSize: "1.5rem",
          borderRadius: "1rem",
          mt: "1.5rem",
        }}
        onClick={handleLogin}
      >
        Sign in{" "}
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
        Dont have an account?{" "}
        <Typography
          component={"span"}
          sx={{ fontSize: "0.76rem", color: "#0047AB", fontWeight: 700 }}
        >
          {" "}
          <Link
            to={LINKS.selectregister}
            style={{
              textDecoration: "none",
              padding: "0",
              margin: "0",
              color: "#0047AB",
            }}
          >
            Sign Up
          </Link>{" "}
        </Typography>
      </Typography>
    </Paper>
  );
};

export default LoginForm;
