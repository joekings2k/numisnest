import { Box, Select, Typography, SelectProps, MenuItem, useMediaQuery } from "@mui/material";

interface Props extends SelectProps {
  selectLabel: string;
  menuItems: string[];
  handleChange :(value:any)=>void
  value?:string;
}
const SelectComp = ({ selectLabel, menuItems, handleChange,value, ...rest }: Props) => {
  //  const handleChange = (event:{target:{value:string}}) => {
     
  //  };
     const mobileScreen = useMediaQuery("(max-width:600px)");
  return (
    <Box
      sx={{
        display: mobileScreen ? "" : "flex",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <Box>
        <Typography sx={{fontSize:"1rem",fontWeight:"600"}}>{selectLabel}</Typography>
      </Box>
      <Box>
        <Select
          sx={{ width:"8rem",height:"2.5rem",fontSize:"1.12rem",bgcolor:"white",borderRadius:"0.8rem",...rest.sx }}
          onChange={(event)=>handleChange(event.target.value)}
          value={value}
        >
          {menuItems.map((menuitem: string, index: number) => (
            <MenuItem key={index} value={menuitem}>
              {menuitem}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </Box>
  );
};

export default SelectComp;
