"use client";
import React from "react";
import { useCreateCouponMutation } from "@/lib/store/api/couponService";
import FormMaker from "@/components/molecules/form/form-maker";
import { CouponType, couponSchema } from "@/lib/store/@types/coupon";
import RHFInput from "@/components/atoms/rhf/rhf-input";
import RHFRadioButtons from "@/components/atoms/rhf/rhf-radio-buttons";
import { useAppSelector } from "@/lib/store/hooks";
import { useStoresList } from "@/hooks/useStoresList";

type Props = {
  token: string;
};

function CouponForm({ token }: Props) {
  const [defaultValues, setDefaultValues] = React.useState<Partial<CouponType>>(
    {
      name: "",
      description: "",
      products: [],
      discount: 0,
      type: "percentage",
      store: "",
      owner: "",
      validFrom: undefined,
      validTo: undefined,
      claims: [],
    },
  );

  const user = useAppSelector((state) => state.app.currentUser);
  const { selectedStore } = useStoresList();

  React.useEffect(() => {
    if (user) {
      setDefaultValues((v) => ({
        ...v,
        owner: user._id,
        store: selectedStore?._id,
      }));
    }
  }, [user]);

  return (
    <FormMaker
      createHook={useCreateCouponMutation}
      defaultValues={defaultValues}
      schema={couponSchema}
    >
      <div className="pt-4 px-4 animate">
        <RHFInput name="name" label="Coupon Name" required={true} />
      </div>

      <div className="pt-4 px-4 animate">
        <RHFInput
          name="description"
          label="Coupon Description"
          required={true}
        />
      </div>

      <div className="pt-4 px-4 animate">
        <RHFInput
          name="products"
          label="Products"
          type="array"
          required={true}
        />
      </div>

      <div className="pt-4 px-4 animate">
        <RHFInput
          name="discount"
          label="Discount"
          type="number"
          required={true}
        />
      </div>

      <div className="pt-4 px-4 animate">
        <RHFRadioButtons
          name="type"
          label="Coupon Type"
          description="Select whether this is a coupon or a service."
          render={({ field, formState, fieldState, setValue }) => (
            <div className="flex space-x-4">
              <label className="flex text-sm justify-center">
                <input
                  className="mr-2"
                  type="radio"
                  {...field}
                  value="coupon"
                  checked={field.value === "coupon"}
                  onChange={() => setValue("type", "coupon")}
                />
                Coupon
              </label>
              <label className="flex text-sm justify-center">
                <input
                  className="mr-2"
                  type="radio"
                  {...field}
                  value="service"
                  checked={field.value === "service"}
                  onChange={() => setValue("type", "service")}
                />
                Service
              </label>
            </div>
          )}
        />
      </div>

      <div className="pt-4 px-4 animate">
        <RHFInput
          name="store"
          label="Store Id"
          disabled={true}
          required={true}
        />
      </div>

      <div className="pt-4 px-4 animate">
        <RHFInput
          name="owner"
          label="Coupon Owner Id"
          disabled={true}
          required={true}
        />
      </div>

      <div className="pt-4 px-4 animate">
        <RHFInput name="validFrom" label="Valid From" type="datetime-local" />
      </div>

      <div className="pt-4 px-4 animate">
        <RHFInput name="validTo" label="Valid To" type="datetime-local" />
      </div>

      <div className="pt-4 px-4 animate">
        <RHFInput name="claims" label="Number of Claims" type="number" />
      </div>
    </FormMaker>
  );
}

export default CouponForm;
