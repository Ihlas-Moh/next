"use client";
import React from "react";
import { useCreateProductMutation } from "@/lib/store/api/productService";
import FormMaker from "@/components/molecules/form/form-maker";
import { ProductType, productSchema } from "@/lib/store/@types/product";
import RHFInput from "@/components/atoms/rhf/rhf-input";
import RHFRadioButtons from "@/components/atoms/rhf/rhf-radio-buttons";
import { useAppSelector } from "@/lib/store/hooks";

type Props = {
  token: string;
};

function ProductForm({ token }: Props) {
  const [defaultValues, setDefaultValues] = React.useState<
    Partial<ProductType>
  >({
    name: "Black Jeans",
    description: "Black Mens Jeans",
    price: "100",
    type: "product", // Default value set to "product"
  });

  const user = useAppSelector((state) => state.app.currentUser);

  React.useEffect(() => {
    if (user) {
      setDefaultValues((v) => ({
        ...v,
        owner: user._id,
      }));
    }
  }, [user]);

  return (
    <FormMaker
      createHook={useCreateProductMutation}
      defaultValues={defaultValues}
      schema={productSchema}
    >
      {/* <div className={"grid grid-cols-6 gap-x-4 px-4 pt-4"}> */}
      <div className={"pt-4 px-4 animate"}>
        <RHFInput name={"name"} label={"Product Name"} required={true} />
      </div>

      <div className={"pt-4 px-4 animate"}>
        <RHFInput
          name={"description"}
          label={"Product Description"}
          required={true}
        />
      </div>

      <div className={"pt-4 px-4 animate"}>
        <RHFInput
          name={"price"}
          label={"Price"}
          type="number"
          required={true}
        />
      </div>

      <div className={"pt-4 px-4 animate"}>
        <RHFInput name={"sku"} label={"SKU"} type="number" />
      </div>

      <div className={"pt-4 px-4 animate"}>
        <RHFRadioButtons
          name="type"
          label="Product Type"
          description="Select whether this is a product or a service."
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

      <div className={"pt-4 px-4 animate"}>
        <RHFInput
          name={"store"}
          label={"Store Id"}
          disabled={true} // Disable since it's auto-filled
          required={true}
        />
      </div>

      <div className={"pt-4 px-4 animate"}>
        <RHFInput
          name={"owner"}
          label={"Product Owner Id"}
          disabled={true} // Disable if auto-filled
          required={true}
        />
      </div>

      <div className={"pt-4 px-4 animate"}>
        <RHFInput name={"advertisement"} label={"Advertisement"} />
      </div>
      {/* </div> */}
    </FormMaker>
  );
}

export default ProductForm;
