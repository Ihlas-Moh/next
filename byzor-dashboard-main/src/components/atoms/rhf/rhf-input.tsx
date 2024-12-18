import { useFormContext } from "react-hook-form";
import React from "react";
import { InputProps, Input } from "@/components/atoms/input";
import {
  FormLabel,
  FormItem,
  FormField,
  FormDescription,
  FormControl,
  FormMessage,
} from "@/components/atoms/form";

type Props = { name: string; label: string; description?: string } & InputProps;

function RHFInput({ name, label, description = "", ...props }: Props) {
  const { control } = useFormContext();
  return (
    <FormField
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormDescription
            style={{ marginTop: "-.125rem" }}
            className="text-xs"
          >
            {description}
          </FormDescription>
          <FormControl>
            <Input
              {...field}
              value={field.value === undefined ? "" : field.value}
              {...props}
            />
          </FormControl>
          {!!error ? <FormMessage>{error.message}</FormMessage> : null}
        </FormItem>
      )}
    />
  );
}

export default RHFInput;
