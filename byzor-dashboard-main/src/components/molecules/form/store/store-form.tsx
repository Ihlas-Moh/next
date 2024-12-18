"use client";
import React from "react";
import {
  useCreateStoreMutation,
  useUpdateStoreMutation,
} from "@/lib/store/api/storeService";
import FormMaker from "@/components/molecules/form/form-maker";
import {
  storeSchema,
  StoreDocWithOwnerType,
  StoreDocType,
} from "@/lib/store/@types/store";
import RHFInput from "@/components/atoms/rhf/rhf-input";
import { useAppSelector } from "@/lib/store/hooks";
import RHFBusinessRegistration from "@/components/molecules/rhf/rhf-business-registration";

type Props = {
  store?: StoreDocWithOwnerType;
};

function StoreForm({ store }: Props) {
  const { owner, ...rest } = store
    ? (store as StoreDocWithOwnerType)
    : { owner: { id: "" } };
  const [defaultValues, setDefaultValues] = React.useState<
    Partial<StoreDocType>
  >(store ? { ...rest, owner: owner._id } : {});

  const user = useAppSelector((state) => state.app.currentUser);

  React.useEffect(() => {
    if (user) {
      setDefaultValues((v) => ({ ...v, owner: user._id }));
    }
  }, [user, setDefaultValues]);

  React.useEffect(() => {
    const { owner, ...rest } = store as StoreDocWithOwnerType;
    if (store && owner) {
      setDefaultValues((v) => ({ ...v, ...rest, owner: owner._id }));
    }
  }, [store, setDefaultValues]);

  return (
    <FormMaker
      createHook={store ? useUpdateStoreMutation : useCreateStoreMutation}
      defaultValues={{ ...defaultValues }}
      schema={storeSchema}
      id={store?._id}
    >
      <div className={"grid grid-cols-6 gap-x-4 px-4 pt-4"}>
        <div className={"col-span-4 animate"}>
          <RHFInput name={"name"} label={"Store Name"} />
        </div>
      </div>
      <div className={"pt-4 px-4 animate"}>
        <RHFInput name={"description"} label={"Store Description"} />
      </div>
      <RHFBusinessRegistration name={"businessVerification"} />
    </FormMaker>
  );
}

export default StoreForm;
