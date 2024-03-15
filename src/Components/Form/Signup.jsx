import { Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import NameField from "./NameField";
// import GenderField from "./GenderField";
import InputField from "./Custom/InputField";
import { useDispatch, useSelector } from "react-redux";
import { addFormField, resetTableRow } from "../../Slice/Signup";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { areAllValuesEmpty, isObjectEmpty } from "../../Utils/ObjectUtils";

const schema = yup
  .object({
    firstName: yup.string().required(),
    middleName: yup.string().required(),
    lastName: yup.string().required(),

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
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { selectedTableRow } = useSelector((state) => state.signup);

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);

    console.log(selectedTableRow);
    if (isObjectEmpty(selectedTableRow)) {
      console.log("perform some");
    }

    dispatch(addFormField(data));

    // if(selectedTableRow){
    //   console.log("perform some operation" );
    // }
    // else{
    //   dispatch(addFormField(data));
    // }
    // reset()
  };

  console.log(selectedTableRow, "SELECT PARTICULAR ROW");

  function handleReset(){
    reset()
    dispatch(resetTableRow())
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
          <InputField
            label="Email."
            type="email"
            name="email"
            error={!!errors.email}
            register={register}
          />
          <InputField
            label="Phone No."
            type="number"
            name="phoneNo"
            error={!!errors.phoneNo}
            register={register}
          />
          <InputField
            label="Street"
            type="text"
            name="street"
            error={!!errors.street}
            register={register}
          />
        </Box>

        <Box {...commonBoxProps}>
          <InputField
            label="City"
            type="text"
            name="city"
            error={!!errors.city}
            register={register}
          />
          <InputField
            label="State"
            type="text"
            name="state"
            error={!!errors.state}
            register={register}
          />
          <InputField
            label="Postal/ ZIP."
            type="number"
            name="pinCode"
            error={!!errors.pinCode}
            register={register}
          />
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
