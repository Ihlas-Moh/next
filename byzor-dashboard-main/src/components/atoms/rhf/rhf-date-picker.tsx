import { useFormContext, Controller } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/atoms/form";
import { DateRange } from "react-day-picker";
import * as React from "react";
import DatePicker from "@/components/atoms/date-picker";

export default function RHFDatePicker({
  name,
  label,
  description = "",
  mode = "single",
  afterChange = () => {},
}: {
  name: string;
  label: string;
  mode?: "single" | "range";
  description?: string;
  afterChange?: (dateRange: Date | undefined) => void;
}) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const { onChange, value } = field;
        return (
          <FormItem ref={field.ref} className="flex flex-col my-2">
            <FormLabel>{label}</FormLabel>
            <FormDescription
              style={{ marginTop: "-.125rem" }}
              className="text-xs"
            >
              {description}
            </FormDescription>
            <FormControl>
              <DatePicker
                label={label}
                setDate={(date: Date | undefined) => {
                  onChange(date);
                  afterChange(date);
                }}
                date={value}
              />
            </FormControl>
            {!!error ? (
              <FormMessage>{`Please select the ${mode === "range" ? "date range" : "date"}`}</FormMessage>
            ) : null}
          </FormItem>
        );
      }}
    />
  );
}
