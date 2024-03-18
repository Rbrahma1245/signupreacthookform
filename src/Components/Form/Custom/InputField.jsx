import { TextField } from "@mui/material";

function InputField({ label, name, type, register, error }) {
  return (
    <TextField
      label={label}
      type={type}
      variant="outlined"
      fullWidth
      error={error}
      {...register(name)}
    />
  );
}

export default InputField;
