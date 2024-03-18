import { Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import NameField from "./NameField";
// import GenderField from "./GenderField";
import InputField from "./Custom/InputField";
import { useDispatch, useSelector } from "react-redux";
import {
  addFormField,
  resetTableRow,
  updateFormField,
} from "../../Slice/Signup";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Display from "../Display";

// NAME VALIDATION
const nameValidationSchema = (name) =>
  yup
    .string()
    .max(50, `${name} must be at most 50 characters`)
    .matches(/^[A-Za-z]*$/, `${name} must contain only letters`)
    .required(`${name} is required`);

const schema = yup
  .object({
    firstName: nameValidationSchema("First Name"),
    middleName: nameValidationSchema("Middle Name"),
    lastName: nameValidationSchema("Last Name"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNo: yup
      .string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    street: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    pinCode: yup.string().required(),
  })
  .required();

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);
  const { formList, selectedTableRow } = useSelector((state) => state.signup);

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(selectedTableRow);
    if (selectedTableRow.id) {
      console.log("perform some");
      dispatch(updateFormField(data));
      dispatch(resetTableRow());
    } else {
      dispatch(addFormField(data));
    }
    reset();
  };

  function handleReset() {
    reset();
    dispatch(resetTableRow());
  }

  return (
    <div
      className="signup-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h2>SIGNUP FORM</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box {...commonBoxProps}>
          <NameField register={register} errors={errors} />
        </Box>

        <Box {...commonBoxProps}>
          <div>
            <InputField
              label="Email."
              type="email"
              name="email"
              error={!!errors.email}
              register={register}
            />
            <div className="error">{errors.email?.message}</div>
          </div>

          <div>
            <InputField
              label="Phone No."
              type="number"
              name="phoneNo"
              error={!!errors.phoneNo}
              register={register}
            />
            <div className="error">{errors.phoneNo?.message}</div>
          </div>

          <div>
            <InputField
              label="Street"
              type="text"
              name="street"
              error={!!errors.street}
              register={register}
            />
            <div className="error">{errors.street?.message}</div>
          </div>
        </Box>

        <Box {...commonBoxProps}>
          <div>
            <InputField
              label="City"
              type="text"
              name="city"
              error={!!errors.city}
              register={register}
            />
            <div className="error">{errors.city?.message}</div>
          </div>

          <div>
            <InputField
              label="State"
              type="text"
              name="state"
              error={!!errors.state}
              register={register}
            />
            <div className="error">{errors.state?.message}</div>
          </div>

          <div>
            <InputField
              label="Postal/ ZIP."
              type="number"
              name="pinCode"
              error={!!errors.pinCode}
              register={register}
            />
            <div className="error">{errors.pinCode?.message}</div>
          </div>
        </Box>
        <Box {...commonBoxProps} marginTop={5}>
          <Button type="submit" variant="contained">
            {selectedTableRow.id ? "UPDATE" : "SUBMIT"}
          </Button>
          <Button
            type="button"
            variant="contained"
            color="secondary"
            onClick={() => handleReset()}
          >
            CLEAR
          </Button>
        </Box>
      </form>

      {formList.length > 0 && <Display setValue={setValue} />}
    </div>
  );
}

export default Signup;

const commonBoxProps = {
  sx: {
    "& > :not(style)": { m: 2, width: "32ch" },
  },
  noValidate: true,
  autoComplete: "off",
};
