import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import { ArrowForwardIosOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const SellersHeader = ({
  children,
  titleHead,
  path
}: {
  children: ReactNode;
  titleHead: string;
  path :string
}) => {
  const navigate = useNavigate()
  return (
    <Box sx={{ mt: "5rem" }}>
      <Box
        sx={{
          display: "flex",
          mb: "1.5rem",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        >
        <Typography sx={{ fontSize: "2.5rem", fontWeight: 700 }}>
          {titleHead}
        </Typography>
        <div onClick={()=>navigate(path)}>
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

      {children}
    </Box>
  );
};

export default SellersHeader;
