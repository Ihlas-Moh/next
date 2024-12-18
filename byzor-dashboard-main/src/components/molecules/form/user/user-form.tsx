"use client";
import React from "react";
import { useCreateUserMutation } from "@/lib/store/api/userService";
import FormMaker from "@/components/molecules/form/form-maker";
import { UserType, userSchema } from "@/lib/store/@types/user";
import RHFInput from "@/components/atoms/rhf/rhf-input";
import { useAppSelector } from "@/lib/store/hooks";

function UserForm() {
  const [defaultValues, setDefaultValues] = React.useState<Partial<UserType>>({
    name: "Robert Downy Jr",
    password: "  P@ssw0rd",
    email: "test@gmail.com",
    role: "store-owner",
    gender: "Male",
  });

  const user = useAppSelector((state) => state.app.currentUser);

  React.useEffect(() => {
    if (user) {
      setDefaultValues((v) => ({ ...v, owner: user._id }));
    }
  }, [user, setDefaultValues]);

  return (
    <FormMaker
      createHook={useCreateUserMutation}
      defaultValues={{ ...defaultValues }}
      schema={userSchema}
    >
      {/* <div className="grid grid-cols-6 gap-x-4 px-4 pt-4"> */}
      {/* Required fields */}
      <div className="pt-4 px-4 animate">
        <RHFInput name="name" label="User Name" required />
      </div>
      <div className="pt-4 px-4 animate">
        <RHFInput name="email" label="Email" type="email" />
      </div>
      <div className="pt-4 px-4 animate">
        <RHFInput name="password" label="Password" type="password" required />
      </div>

      {/* Additional fields */}
      <div className="pt-4 px-4 animate">
        <RHFInput name="kindeId" label="Kinde ID" disabled={true} />
      </div>
      <div className="pt-4 px-4 animate">
        <RHFInput name="title" label="Title" />
      </div>

      <div className="pt-4 px-4 animate">
        <RHFInput name="telephone" label="Telephone" type="tel" />
      </div>
      <div className="pt-4 px-4 animate">
        <RHFInput name="address" label="Address" />
      </div>
      <div className="pt-4 px-4 animate">
        <RHFInput name="position" label="Position" />
      </div>
      <div className="pt-4 px-4 animate">
        <RHFInput name="avatar" label="Avatar" />
      </div>
      <div className="pt-4 px-4 animate">
        <RHFInput name="picture" label="Picture" />
      </div>
      <div className="pt-4 px-4 animate">
        <RHFInput name="isActive" label="Is Active" type="boolean" />
      </div>
      <div className="pt-4 px-4 animate">
        <RHFInput name="bank" label="Bank Details" />
      </div>
      <div className="pt-4 px-4 animate">
        <RHFInput name="stores" label="Stores" />
      </div>
      <div className="pt-4 px-4 animate">
        <RHFInput name="userVerification" label="User Verification Details" />
      </div>
      {/* </div> */}
    </FormMaker>
  );
}

export default UserForm;
