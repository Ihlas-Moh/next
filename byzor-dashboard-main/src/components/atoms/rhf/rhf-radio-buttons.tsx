import { useFormContext } from "react-hook-form";
import React from "react";
import {
  FormLabel,
  FormItem,
  FormField,
  FormDescription,
  FormControl,
  FormMessage,
} from "@/components/atoms/form";

import {
  ControllerFieldState,
  ControllerRenderProps,
  // @ts-ignore
} from "react-hook-form/dist/types/controller";
// @ts-ignore
import { UseFormStateReturn } from "react-hook-form/dist/types";
// @ts-ignore
import { UseFormSetValue } from "react-hook-form/dist/types/form";

type Props<TFieldValues, TName> = {
  name: string;
  label: string;
  description?: string;
  render: ({
    field,
  }: {
    field: ControllerRenderProps<TFieldValues, TName>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<TFieldValues>;
    setValue: UseFormSetValue<TFieldValues>;
  }) => React.ReactElement;
};

function RHFRadioButtons<T, K>({
  name,
  label,
  description = "",
  render,
}: Props<T, K>) {
  const { control, setValue } = useFormContext();
  return (
    <FormField
      name={name}
      control={control}
      render={({ field, fieldState, formState }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormDescription
            style={{ marginTop: "-.125rem" }}
            className="text-xs"
          >
            {description}
          </FormDescription>
          <FormControl>
            {render({ field, formState, fieldState, setValue })}
          </FormControl>
          {!!fieldState.error ? (
            <FormMessage>{fieldState.error.message}</FormMessage>
          ) : null}
        </FormItem>
      )}
    />
  );
}

export default RHFRadioButtons;
