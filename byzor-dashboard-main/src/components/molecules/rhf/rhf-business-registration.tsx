import React from "react";
import RHFInput from "@/components/atoms/rhf/rhf-input";
import RHFSwitch from "@/components/atoms/rhf/rhf-switch";
import RHFDatePicker from "@/components/atoms/rhf/rhf-date-picker";
type Props = {
  name: string;
};

function RHFBusinessRegistration({ name }: Props) {
  return (
    <div>
      <RHFInput
        name={`${name}.businessName`}
        label={"Business Name in Registration"}
      />
      <RHFInput
        name={`${name}.businessType`}
        label={"Business Type in Registration"}
      />
      <RHFInput
        name={`${name}.businessType`}
        label={"Business Type in Registration"}
      />
      <RHFInput
        name={`${name}.businessRegistrationNumber`}
        label={"Number in Registration"}
      />
      <RHFDatePicker
        name={`${name}.businessRegistrationDate`}
        label={"Date in Registration"}
      />
      <RHFInput
        name={`${name}.businessRegistrationProof`}
        label={"Proof in Registration"}
      />
      <RHFInput
        name={`${name}.businessRegistrationProofType`}
        label={"Proof Type in Registration"}
      />
      <RHFSwitch label={"Verified"} name={`${name}.verified`} />
    </div>
  );
}

export default RHFBusinessRegistration;
