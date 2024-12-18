import { useFormContext, Controller } from "react-hook-form";
import React from "react";
import { Switch } from "@/components/atoms/switch";
import {
  FormLabel,
  FormItem,
  FormDescription,
  FormControl,
  FormMessage,
} from "@/components/atoms/form";
import { sleep } from "@/lib/utils";

type Props = {
  name: string;
  label: string;
  description?: string;
  beforeChange?: (value: boolean) => void;
  afterChange?: (value: boolean) => void;
};
export default function RHFSwitch({
  name,
  label,
  description = "",
  beforeChange = () => {},
  afterChange = () => {},
}: Props) {
  const { control } = useFormContext();
  return (
    <Controller
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
            <Switch
              onCheckedChange={async (value: boolean) => {
                beforeChange(value);
                await sleep(100);
                field.onChange({ target: { value } });
                afterChange(value);
              }}
              checked={!!field.value}
            />
          </FormControl>
          {!!error ? <FormMessage>{error.message}</FormMessage> : null}
        </FormItem>
      )}
    />
  );
}
