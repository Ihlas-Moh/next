import React from "react";
import { X } from "lucide-react";

type Props = {
  label: string;
  id: string;
  onRemove: (id: string) => void;
};

function RemovablePill({ label, id, onRemove }: Props) {
  return (
    <span className="flex items-center gap-1 px-2 pl-3 py-1 bg-slate-200 rounded-md ">
      <span className={"text-xs"}>{label}</span>{" "}
      <X
        className={"cursor-pointer"}
        onClick={() => onRemove(id)}
        size={14}
        strokeWidth={1}
      />
    </span>
  );
}

export default RemovablePill;
