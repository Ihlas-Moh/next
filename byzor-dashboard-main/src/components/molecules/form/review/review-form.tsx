"use client";
import React from "react";
import { useCreateReviewMutation } from "@/lib/store/api/reviewService";
import FormMaker from "@/components/molecules/form/form-maker";
import { ReviewType, reviewSchema } from "@/lib/store/@types/review";
import RHFInput from "@/components/atoms/rhf/rhf-input";
import RHFRadioButtons from "@/components/atoms/rhf/rhf-radio-buttons";
import { useAppSelector } from "@/lib/store/hooks";
import { useStoresList } from "@/hooks/useStoresList";

function ReviewForm() {
  const [defaultValues, setDefaultValues] = React.useState<Partial<ReviewType>>(
    {
      stars: 0,
      review: "",
      type: "store",
      store: "",
      owner: "",
      product: "",
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
      createHook={useCreateReviewMutation}
      defaultValues={defaultValues}
      schema={reviewSchema}
    >
      <div className="pt-4 px-4 animate">
        <RHFInput
          name="stars"
          label="Rating (Stars)"
          type="number"
          min={0}
          max={5}
          required={true}
        />
      </div>

      <div className="pt-4 px-4 animate">
        <RHFInput name="review" label="Review Text" required={true} />
      </div>

      <div className="pt-4 px-4 animate">
        <RHFRadioButtons
          name="type"
          label="Review Type"
          description="Select whether this is a review or a service."
          render={({ field, formState, fieldState, setValue }) => (
            <div className="flex space-x-4">
              <label className="flex text-sm justify-center">
                <input
                  className="mr-2"
                  type="radio"
                  {...field}
                  value="product"
                  checked={field.value === "product"}
                  onChange={() => setValue("type", "product")}
                />
                Product
              </label>
              <label className="flex text-sm justify-center">
                <input
                  className="mr-2"
                  type="radio"
                  {...field}
                  value="store"
                  checked={field.value === "store"}
                  onChange={() => setValue("type", "store")}
                />
                Store
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
          label="Review Owner Id"
          disabled={true}
          required={true}
        />
      </div>

      <div className="pt-4 px-4 animate">
        <RHFInput name="product" label="Product Id" required={true} />
      </div>
    </FormMaker>
  );
}

export default ReviewForm;
