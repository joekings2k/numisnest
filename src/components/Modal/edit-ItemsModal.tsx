import React, { useEffect, useState } from "react";
import { Box, Typography, IconButton, useTheme } from "@mui/material";
import { Close } from "@mui/icons-material";
import ModalWrapper from "./ModalWrapper";
import EditItems from "../forms/edit-Item-form";
import useAxiosPrivate from "src/hooks/useAxiosPrivate";


type Props = {
  closeModal?: () => void;
  contentWidth?: string;
  itemId ?:string |null;
};

const EditItemsModal = ({ closeModal, contentWidth ,itemId }: Props) => {
  const theme = useTheme();
  const axiosPrivate = useAxiosPrivate()
   useEffect(()=>{
    const getItem= async()=>{
      const response = await axiosPrivate.get(
        `seller/seller-item/${itemId}`
      );
      console.log(response)
    }
    getItem()
   },[])

  return (
    <ModalWrapper contentWidth={contentWidth}>
      <IconButton
        onClick={() => typeof closeModal !== "undefined" && closeModal()}
        sx={{
          position: "absolute",
          right: "8px",
          top: "8px",
        }}
      >
        <Close />
      </IconButton>
      <Box sx={{}}>
        <EditItems />
      </Box>
    </ModalWrapper>
  );
};

export default EditItemsModal;
