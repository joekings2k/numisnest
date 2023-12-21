import React, { useState } from 'react'
import ModalWrapper from '../Modal/ModalWrapper'
import InputComponent from '../inputComponent.tsx/InputComponent';
import useAxiosPrivate from 'src/hooks/useAxiosPrivate';
import { Box, Button, InputAdornment, MenuItem, Select, TextField } from '@mui/material';
import TextFieldInputLimit from '../form-components/TextFieldInputLimit';

const EditItems = () => {
  const axiosPrivate = useAxiosPrivate();
  const [photo1, setPhoto1] = useState<File | null>(null);
  const [photo2, setPhoto2] = useState<File | null>(null);
  const [photo3, setPhoto3] = useState<File | null>(null);
  const [video, setvideo] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [category, setCategory] = useState("");
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState<number>(0);

  const [collection, setCollection] = useState("");
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <InputComponent
          pnum={1}
          acceptType="img"
          setFile={setPhoto1}
          fileName={photo1}
        />
        <InputComponent
          pnum={2}
          acceptType="img"
          setFile={setPhoto2}
          fileName={photo2}
        />
        <InputComponent
          pnum={3}
          acceptType="img"
          setFile={setPhoto3}
          fileName={photo3}
        />
        <InputComponent
          pnum={4}
          acceptType="video"
          setFile={setvideo}
          fileName={video}
        />
      </Box>
      <Box>
        <Box sx={{ mt: "3rem" }}>
          <TextFieldInputLimit
            limit={30}
            label={"Add Title"}
            onChange={(e) => setTitle(e.target.value)}
            val={title}
          />
          <TextFieldInputLimit
            limit={250}
            multiline
            rows={5}
            variant="outlined"
            label={"Description"}
            val={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Box sx={{ mt: "2rem" }}>
            <Box
              component={"label"}
              sx={{ fontSize: "1.5rem", fontWeight: 600, mb: "1rem" }}
            >
              Amount
            </Box>
            <TextField
              sx={{
                "& .MuiInputAdornment-root": {
                  backgroundColor: "#F0F0F0",
                  padding: "2rem 1.5rem",
                },
              }}
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{ backgroundColor: "#F0F0F0" }}
                  >
                    <Select
                      onChange={(e: any) => setCurrency(e.target.value)}
                      sx={{
                        height: "2.5rem",
                        fontSize: "1.3rem",
                        fontWeight: 600,
                        boxShadow: "none",
                        ".MuiOutlinedInput-notchedOutline": { border: 0 },
                        "&:focus": {
                          boxShadow: "none", // Remove the focus border
                          border: "none",
                        },
                        "&.MuiSelect-select": {
                          paddingLeft: "0.8rem", // Adjust the left padding for the select input
                        },
                      }}
                    >
                      <MenuItem value="USD">$</MenuItem>
                      <MenuItem value="NGN">₦</MenuItem>
                    </Select>
                  </InputAdornment>
                ),
              }}
              type="number"
              fullWidth
              variant="standard"
            />
          </Box>

          <Box sx={{ mt: "2rem" }}>
            <Box
              component={"label"}
              sx={{ fontSize: "1.5rem", fontWeight: 600 }}
            >
              Add to collection
            </Box>
            <TextField fullWidth variant="standard" />
          </Box>
        </Box>
        <Box
          component={"div"}
          sx={{ display: "flex", justifyContent: "flex-end", mt: "2rem" }}
        >
          <Button
            sx={{
              backgroundColor: "#0047AB",
              color: "white",
              padding: "0.5rem 3.8rem",
              borderRadius: "0.4rem",
              mt: "2rem",
            }}
            
          >
            Add
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default EditItems