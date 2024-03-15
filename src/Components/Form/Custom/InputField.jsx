import { TextField } from "@mui/material";

function InputField({ label, name, type, register }) {
  return (
    <TextField
      label={label}
      type={type}
      variant="outlined"
      fullWidth
      {...register(name)}
    />
  );
}

export default InputField;
