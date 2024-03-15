import { Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import NameField from "./NameField";
// import GenderField from "./GenderField";
import InputField from "./Custom/InputField";
import { useDispatch, useSelector } from "react-redux";
import { addFormField } from "../../Slice/Signup";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const store = useSelector((state) => state.signup);
  console.log(store);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(addFormField(data));
  };

  return (
    <div
      className="signup-container"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      SIGNUP FORM
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box {...commonBoxProps}>
          <NameField register={register} />
        </Box>

        {/* <Box {...commonBoxProps}>
          <GenderField register={register} />

          <InputField
            label="Place of Birth"
            type="text"
            name="birthPlace"
            register={register}
          />
        </Box> */}

        <Box {...commonBoxProps}>
          <InputField
            label="Email."
            type="email"
            name="email"
            register={register}
          />
          <InputField
            label="Phone No."
            type="number"
            name="phoneNo"
            register={register}
          />
          <InputField
            label="Street"
            type="text"
            name="street"
            register={register}
          />
        </Box>

        <Box {...commonBoxProps}>
          <InputField
            label="City"
            type="text"
            name="city"
            register={register}
          />
          <InputField
            label="State"
            type="text"
            name="state"
            register={register}
          />
          <InputField
            label="Postal/ ZIP."
            type="number"
            name="pinCode"
            register={register}
          />
        </Box>
        <Box {...commonBoxProps}>
          <Button type="submit" variant="contained">
            SUBMIT
          </Button>
          <Button type="button" variant="contained" color="secondary">
            CLEAR
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default Signup;

const commonBoxProps = {
  sx: {
    "& > :not(style)": { m: 1.5, width: "30ch" },
  },
  noValidate: true,
  autoComplete: "off",
};
