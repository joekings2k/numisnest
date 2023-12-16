import { Box, Paper, Typography } from "@mui/material";

const ItemDesc = ({}) => {
  return (
    <Paper sx={{pl:"2rem",pt:"2rem",mt:"4rem"}}>
      <Box>
        <Typography
          component={"header"}
          sx={{
            fontSize: "2.5rem",
            fontWeight: 600,
            textDecoration: "underline",
          }}
        >
          Details
        </Typography>
        <Typography component={"p"} sx={{ fontSize: "2rem" }}>
          5 Pounds Elizabeth II 1953, Blue print; yellow underprint; black
          serial numbers
        </Typography>
        <Typography component={"p"} sx={{ fontSize: "2rem" }}>
          5 Pounds Elizabeth II 1953, Blue print; yellow underprint; black
          serial numbers
        </Typography>
        <Typography component={"p"} sx={{ fontSize: "2rem" }}>
          5 Pounds Elizabeth II 1953, Blue print; yellow underprint; black
          serial numbers
        </Typography>
      </Box>
      <Box sx={{ mt: "2rem" }}>
        <Typography
          component={"header"}
          sx={{
            fontSize: "2.5rem",
            fontWeight: 600,
            textDecoration: "underline",
          }}
        >
          Purchase and delivery
        </Typography>
        <Typography component={"p"} sx={{ fontSize: "2rem" }}>
          Pickup can be done from Kfar Saba, usually in the evenings, please
          contact me before coming. Postage is with registered mail (+ 65)
        </Typography>
      </Box>
      <Box sx={{ mt: "2rem" }}>
        <Typography
          component={"header"}
          sx={{
            fontSize: "2.5rem",
            fontWeight: 600,
            textDecoration: "underline",
          }}
        >
          Contact
        </Typography>
        <Typography component={"p"} sx={{ fontSize: "2rem" }}>
          Whatsapp:{" "}
          <Typography component={"span"} sx={{ fontSize: "2rem" }}>
            050 634 9545
          </Typography>{" "}
        </Typography>
      </Box>
    </Paper>
  );
};

export default ItemDesc;
