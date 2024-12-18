import * as React from "react";
import { Button } from "@/components/atoms/button";
import { Check } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/atoms/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/atoms/command";
import { cn } from "@/lib/utils";
import { ChevronDown, Grip } from "lucide-react";
import RemovablePill from "@/components/atoms/removable-pill";

type Props = {
  onChange: (value: Array<string>) => void;
};

const states = ["penal", "civil", "labor", "admin"];

function CaseTypeSelect({ onChange }: Props) {
  const [value, setValue] = React.useState<Array<string>>([]);
  const [open, handleClose] = React.useState<boolean>(false);

  const selected = React.useMemo(() => {
    return states.filter((cli) => {
      const find = value.find((v) => v.toLowerCase() === cli.toLowerCase());
      return !!find;
    });
  }, [value]);

  const removeSelected = React.useCallback(
    (id: string) => {
      const val = value.filter((pv) => pv !== id);
      setValue(val);
      onChange(val);
    },
    [setValue, value],
  );

  const selectedList = React.useMemo(() => {
    return selected.length ? (
      <>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              type="button"
              variant="outline"
              className={
                "relative border-l-0 rounded-tl-none rounded-bl-none ml-[-1rem] hover:border-neutral-300 hover:bg-white"
              }
            >
              <Grip size={18} />
              <span className="absolute shadow-lg flex justify-center items-center bg-primary text-white top-[-.5rem] right-0 text-xs p-1 rounded-full min-w-6">
                {selected.length}
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-80 p-0">
            <div className="flex gap-1 p-4 flex-wrap">
              {selected.map((c) => (
                <RemovablePill
                  id={c ?? ""}
                  key={c}
                  onRemove={removeSelected}
                  label={c}
                />
              ))}
            </div>
            <Button
              type="button"
              variant="link"
              onClick={() => {
                setValue([]);
                onChange([]);
              }}
            >
              <span className="text-xs underline">Clear all</span>
            </Button>
          </PopoverContent>
        </Popover>
      </>
    ) : null;
  }, [selected]);
  return (
    <Popover open={open} onOpenChange={handleClose}>
      <div className={"flex"}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className={cn(
              "justify-between col-span-3 hover:border-neutral-300 hover:bg-white max-w-52 min-w-32",
              selected.length
                ? " border-r-0 rounded-tr-none rounded-br-none"
                : "",
            )}
          >
            {selected.length
              ? selected.length > 1
                ? selected.length + " Cases selected"
                : selected[0]
              : "Kids"}
            <ChevronDown size={16} strokeWidth={1} />
          </Button>
        </PopoverTrigger>
        {selectedList}
      </div>
      <PopoverContent align="end" className="w-56 p-0">
        <Command shouldFilter={false}>
          <CommandEmpty>No client found</CommandEmpty>
          <CommandGroup>
            {(states || []).map((c) => (
              <CommandItem
                value={c}
                key={c}
                onSelect={(currentValue) => {
                  const val = value.includes(currentValue)
                    ? value.filter((v) => v !== currentValue)
                    : [...value, currentValue];
                  setValue(val);
                  onChange(val);
                  handleClose(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    {
                      "opacity-100": value.includes(c.toLowerCase() ?? ""),
                    },
                    { "opacity-0": !value.includes(c.toLowerCase() ?? "") },
                  )}
                />
                {c}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default CaseTypeSelect;
