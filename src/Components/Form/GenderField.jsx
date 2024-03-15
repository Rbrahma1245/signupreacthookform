import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

function GenderField({ register }) {
  let options = ["Male", "Female", "Other"];

  return (
    <FormControl>
      <FormLabel >Gender</FormLabel>
      
      <RadioGroup row>
        {options.map((e, index) => (
          <FormControlLabel
            key={index}
            value={e}
            control={<Radio />}
            label={e}
            {...register("gender")}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default GenderField;
