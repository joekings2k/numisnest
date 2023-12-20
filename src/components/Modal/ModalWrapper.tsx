import React, { ReactNode } from "react";
import { Box, useTheme } from "@mui/material";


type Props = {
  children: ReactNode;
  contentWidth?: string;
};

const ModalWrapper = ({ children, contentWidth = "480px" }: Props) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "fixed",
        top: "0px",
        left: "0px",
        height: "100vh",
        width: "100%",
        backgroundColor: "rgba(40, 83, 107, 0.7)",
        zIndex: theme.zIndex.modal,
        overflow: "auto",
      }}
    >
      <Box
        sx={{
          maxWidth: contentWidth,
          margin: "10rem auto",
          width: "100%",
          backgroundColor: "background.paper",
          padding: "15px",
          borderRadius: "5px",
          position: "relative",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default ModalWrapper;
