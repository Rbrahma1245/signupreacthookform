import InputField from "./Custom/InputField";

function NameField({ register, errors }) {
  return (
    <>
      <InputField
        label="First Name"
        type="text"
        name="firstName"
        error={!!errors.firstName}
        register={register}
      />
      <InputField
        label="Middle Name"
        type="text"
        name="middleName"
        error={!!errors.middleName}
        register={register}
      />
      <InputField
        label="Last Name"
        type="text"
        name="lastName"
        error={!!errors.lastName}
        register={register}
      />
    </>
  );
}

export default NameField;
