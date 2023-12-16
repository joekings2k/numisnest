
import { Box,  TextField ,TextFieldProps} from "@mui/material";

type Props = {
  limit : number;
  label ?:string
  val ?:string
};

const TextFieldInputLimit = ({
  limit,label,val,
  ...rest
}: Props & TextFieldProps) => {
  
  return (
    <Box display="flex" flexDirection="column" sx={{mt:"2rem"}}>
      <Box component={"label"} sx={{fontSize:"1.5rem",fontWeight:600, mb:"1rem"}}>{label}</Box>
      <TextField
        inputProps={{ maxLength: limit }}
        variant="standard"
        {...rest}
        sx={{...rest.sx}}
        value={val}
      />
      <Box mt={1} alignSelf="flex-end">
        {`${val?.length}/${limit}`}
      </Box>
    </Box>
  );
};

export default TextFieldInputLimit;
