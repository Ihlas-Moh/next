import React, { Dispatch, SetStateAction, useState } from "react";
// @ts-ignore
import { UseMutation } from "@reduxjs/toolkit/src/query/react/buildHooks";
import { MutationDefinition } from "@reduxjs/toolkit/query";
import { Loader, Trash2, X } from "lucide-react";
import { Button } from "@/components/atoms/button";
import type { ActionCreatorWithPayload } from "@reduxjs/toolkit";
// @ts-ignore
import type { TagDescription } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { useAppDispatch } from "@/lib/store/hooks";
type Props = {
  id: string;
  deleteAction: UseMutation<MutationDefinition<never, never, never, never>>;
  closeMenu?: (open: boolean) => void;
  invalidateTags?: ActionCreatorWithPayload<Array<TagDescription<any>>>;
  tags?: Array<string>;
};
function DeleteCell({
  deleteAction,
  id,
  closeMenu,
  invalidateTags,
  tags,
}: Props) {
  const [show, setShow] = useState<boolean>(false);
  const [isLoading, toggleIsLoading] = useState<boolean>(false);
  const [deleteEntity] = deleteAction();
  const dispatch = useAppDispatch();

  return (
    <>
      <div
        onClick={() => setShow(true)}
        className={`relative w-full flex ${
          show
            ? "animate-out fade-out zoom-out hidden"
            : "animate-in fade-in zoom-in"
        }`}
      >
        <Trash2
          className="mr-2 text-red-600 dark:text-red-400"
          size={16}
          strokeWidth={1}
        />
        <span className="text-red-700 dark:text-red-500">Delete</span>
      </div>

      <div
        className={`relative ${
          show
            ? "animate-in fade-in zoom-in"
            : "animate-out fade-out zoom-out hidden"
        }`}
      >
        <Button
          className=""
          variant="destructive"
          onClick={async () => {
            toggleIsLoading(true);
            try {
              await deleteEntity(id);
              if (invalidateTags && Array.isArray(tags) && tags.length) {
                dispatch(invalidateTags(tags));
              }
              toggleIsLoading(false);
              if (typeof closeMenu === "function") closeMenu(false);
            } catch (e) {
              toggleIsLoading(false);
              if (typeof closeMenu === "function") closeMenu(false);
            }
          }}
        >
          <span>Yes Delete</span>
          {isLoading ? (
            <Loader color={"#fff"} className={"animate-spin ml-2"} size={16} />
          ) : null}
        </Button>
        <span
          onClick={() => setShow(false)}
          className="absolute cursor-pointer items-center justify-center flex -right-2 -top-4 w-8 h-8 bg-slate-50 drop-shadow-lg dark:bg-gray-800 rounded-full"
        >
          <X size={16} strokeWidth={1} />
        </span>
      </div>
    </>
  );
}

export default DeleteCell;
