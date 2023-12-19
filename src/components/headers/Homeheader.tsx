import { Box, Button, IconButton, ListItem, useMediaQuery} from "@mui/material";

import LINKS from "src/utilities/links";
import Image from "../Image";
import Logo from "src/assets/Image/Logo.png";
import NavLinks from "../NavComponensts/NavLinks";
import { Link, useNavigate } from "react-router-dom";
import { Close, MenuOutlined } from "@mui/icons-material";
import home from "src/assets/Image/home.svg"
import about from "src/assets/Image/about.svg"
import contact from "src/assets/Image/contact.svg"
import { Fragment, useState } from "react";
import useAppContext from "src/hooks/useAppContext";
const Homeheader = ({}) => {
  const navigate = useNavigate()
  const isNotMobileScreens = useMediaQuery("(min-width:900px)");
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const { state } = useAppContext();
  const {token}  = state
  return (
    <>
      {isNotMobileScreens ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: "1.5rem",
            px: "1.5rem",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: "2rem" }}>
            <NavLinks title="Home" path="" link={LINKS.Home} />
            <NavLinks title="About" path="lorem" link="" />
            <NavLinks title="Contact Us " path="lorem" link="" />
          </Box>

          <Box>
            <Image src={Logo} alt="logo" width={"35rem"} />
          </Box>
          <Box sx={{ display: "flex", gap: "2rem" }}>
            {token ? (
              <Fragment>
                <Button
                  sx={{
                    border: "1px solid #0047AB",
                    color: "#000",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    borderRadius: "1rem",
                  }}
                  onClick={() => navigate(LINKS.Login)}
                >
                  {" "}
                  Log out
                </Button>
                <Button
                  sx={{
                    border: "1px solid #0047AB",
                    color: "#000",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    borderRadius: "1rem",
                  }}
                  onClick={() => navigate(LINKS.sellerProfile)}
                >
                  {" "}
                  Profile
                </Button>
                
              </Fragment>
            ) : (
              <Fragment>
                <Button
                  sx={{
                    border: "1px solid #0047AB",
                    color: "#000",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    borderRadius: "1rem",
                  }}
                  onClick={() => navigate(LINKS.Login)}
                >
                  {" "}
                  Log in
                </Button>
                <Button
                  sx={{
                    borderRadius: "1rem",
                    fontSize: "1.5rem",
                    background: "linear-gradient(to bottom, #0047AB, #FFFFFF)",
                    fontFamily: "",
                    fontWeight: 400,
                    color: "#F9FAFA",
                    px: "0.5rem",
                  }}
                  onClick={() => navigate(LINKS.selectregister)}
                >
                  Sign up
                </Button>
              </Fragment>
            )}
          </Box>
        </Box>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: {xs:"1rem",sm:"1.5rem",md:"2rem"} ,
              py: "2rem",
            }}
          >
            <Box>
              <Image src={Logo} alt="logo" width={"20rem"} />
            </Box>
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <MenuOutlined sx={{ fontSize: "2rem" }} />
            </IconButton>
            {isMobileMenuToggled && (
              <Box
                position="fixed"
                right="0"
                top="0"
                height="400px"
                zIndex="10"
                maxWidth="450px"
                minWidth="200px"
                sx={{ bgcolor: "#FFFFFF" }}
              >
                <Box display="flex" justifyContent="flex-end" p="1rem">
                  <IconButton
                    onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                  >
                    <Close />
                  </IconButton>
                </Box>
                <Box sx={{}}>
                  <Link
                    to={"/"}
                    style={{
                      textDecoration: "none",
                      fontSize: "1rem",
                      color: "#0047AB",
                    }}
                  >
                    <Box className="navflow">
                      <Image src={home} alt="home" />
                      <ListItem className="navItem">Home</ListItem>
                    </Box>
                  </Link>
                  <Link
                    to={"/about"}
                    style={{
                      textDecoration: "none",
                      fontSize: "1rem",
                      color: "#0047AB",
                    }}
                  >
                    <Box className="navflow">
                      <Image src={about} alt="about" />
                      <ListItem className="navItem">About </ListItem>
                    </Box>
                  </Link>
                  <Link
                    to={"/contactus"}
                    style={{
                      textDecoration: "none",
                      fontSize: "1rem",
                      color: "#0047AB",
                    }}
                  >
                    <Box className="navflow">
                      <Image src={contact} alt="contact" />
                      <ListItem className="navItem">Contact Us</ListItem>
                    </Box>
                  </Link>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    {token ? (
                      <Fragment>
                        <Button
                          sx={{
                            border: "1px solid #0047AB",
                            fontSize: "1.1rem",
                            fontWeight: 400,
                            borderRadius: "1rem",
                            width: "10rem",
                            ml: "1rem",
                            padding: " 0.4375rem 1rem",
                            bgcolor: "#0047AB",
                            color: "#F9FAFA",
                          }}
                          onClick={() => navigate(LINKS.Login)}
                        >
                          Log out
                        </Button>
                      </Fragment>
                    ) : (
                      <Fragment>
                        <Button
                          sx={{
                            border: "1px solid #0047AB",
                            fontSize: "1.1rem",
                            fontWeight: 400,
                            borderRadius: "1rem",
                            width: "10rem",
                            ml: "1rem",
                            padding: " 0.4375rem 1rem",
                            bgcolor: "#0047AB",
                            color: "#F9FAFA",
                          }}
                          onClick={() => navigate(LINKS.Login)}
                        >
                          Log in
                        </Button>

                        <Button
                          sx={{
                            border: "1px solid #0047AB",
                            fontSize: "1.1rem",
                            fontWeight: 400,
                            borderRadius: "1rem",
                            width: "10rem",
                            ml: "1rem",
                            padding: " 0.4375rem 1rem",
                            bgcolor: "#0047AB",
                            color: "#F9FAFA",
                            mt: "1rem",
                          }}
                          onClick={() => navigate(LINKS.selectregister)}
                        >
                          Sign up
                        </Button>
                      </Fragment>
                    )}
                  </Box>
                </Box>
              </Box>
            )}
          </Box>{" "}
        </>
      )}
    </>
  );
};

export default Homeheader;
