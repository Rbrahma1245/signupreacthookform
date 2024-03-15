import InputField from "./Custom/InputField";

function NameField({ register }) {
    
  return (
    <>
      <InputField
        label="First Name"
        type="text"
        name="firstName"
        register={register}
      />
      <InputField
        label="Middle Name"
        type="text"
        name="middleName"
        register={register}
      />
      <InputField
        label="Last Name"
        type="text"
        name="lastName"
        register={register}
      />
    </>
  );
}

export default NameField;
