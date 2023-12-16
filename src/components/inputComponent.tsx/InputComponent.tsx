import {
  CameraAltOutlined,
  VideoCameraBackOutlined,
} from "@mui/icons-material";
import { Box, IconButton, Input, InputLabel, Typography } from "@mui/material";
import React, { ChangeEvent } from "react";

interface Props {
  acceptType?: string;
  pnum?: number;
  setFile:(value:File)=>void;
  fileName?:File|null
}

const InputComponent = ({ acceptType, pnum,setFile,fileName }: Props) => {
  const handleChange = (files: FileList | null) => {
    if (files)setFile(files[0])
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <input
        type="file"
        id={`file_upload${pnum}`}
        style={{ display: "none" }}
        accept={
          acceptType === "video"
            ? "video/*"
            : acceptType === "img"
            ? "image/*"
            : ""
        }
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleChange(e.target.files)
        }
      />

      <IconButton>
        <InputLabel htmlFor={`file_upload${pnum}`} sx={{ padding: "0.3rem" }}>
          {acceptType === "video" ? (
            <VideoCameraBackOutlined
              sx={{ color: "#0047AB", fontSize: "3.5rem" }}
            />
          ) : (
            <CameraAltOutlined sx={{ color: "#0047AB", fontSize: "3.5rem" }} />
          )}
        </InputLabel>
      </IconButton>
      {fileName ? (<Typography>
        {fileName.name}
      </Typography>):(<Typography>
        {acceptType === "video" ? "Video" : `Photo ${pnum}`}
      </Typography>)}
      
    </Box>
  );
};

export default InputComponent;
