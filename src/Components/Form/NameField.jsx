import InputField from "./Custom/InputField";
import "./index.scss";

function NameField({ register, errors }) {
  return (
    <>
      <div>
        <InputField
          label="First Name"
          type="text"
          name="firstName"
          error={!!errors.firstName}
          register={register}
        />
        <div className="error">{errors.firstName?.message}</div>
      </div>

      <div>
        <InputField
          label="Middle Name"
          type="text"
          name="middleName"
          error={!!errors.middleName}
          register={register}
        />
        <div className="error">{errors.middleName?.message}</div>
      </div>

      <div>
        <InputField
          label="Last Name"
          type="text"
          name="lastName"
          error={!!errors.lastName}
          register={register}
        />
        <div className="error">{errors.lastName?.message}</div>
      </div>
    </>
  );
}

export default NameField;
