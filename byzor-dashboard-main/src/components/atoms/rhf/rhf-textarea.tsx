import { useFormContext, Controller } from "react-hook-form";
import React from "react";
import { Textarea, TextareaProps } from "@/components/atoms/textarea";
import {
  FormLabel,
  FormItem,
  FormDescription,
  FormControl,
  FormMessage,
} from "@/components/atoms/form";

type Props = {
  name: string;
  label: string;
  description?: string;
} & TextareaProps;

function RHFTextarea({ name, label, description = "", ...props }: Props) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea
              {...field}
              value={field.value === undefined ? "" : field.value}
              {...props}
            />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          {!!error ? <FormMessage>{error.message}</FormMessage> : null}
        </FormItem>
      )}
    />
  );
}

export default RHFTextarea;
