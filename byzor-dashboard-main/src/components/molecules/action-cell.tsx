"use client";
import { useState } from "react";
import { MoreHorizontal, GanttChartSquare, FileEdit } from "lucide-react";
import { Button } from "@/components/atoms/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdown-menu";

import Link from "next/link";
// @ts-ignore
import { UseMutation } from "@reduxjs/toolkit/src/query/react/buildHooks";
import { MutationDefinition } from "@reduxjs/toolkit/query";
import DeleteCell from "@/components/atoms/delete-cell";
import type { ActionCreatorWithPayload } from "@reduxjs/toolkit";
// @ts-ignore
import type { TagDescription } from "@reduxjs/toolkit/dist/query/endpointDefinitions";

type Props = {
  path: string;
  id: string;
  deleteAction: UseMutation<MutationDefinition<never, never, never, never>>;
  invalidateTags?: ActionCreatorWithPayload<
    Array<TagDescription<never>>,
    never
  >;
  tags?: Array<string>;
};

function ActionCell({ id, path, deleteAction, ...rest }: Props) {
  const [isOpen, setOpen] = useState(false);
  return (
    <DropdownMenu open={isOpen} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem>
          <Link className="w-full" href={`/${path}/${id}`}>
            <div className={"flex"}>
              <GanttChartSquare className="mr-2" size={16} strokeWidth={1} />
              <span>View</span>
            </div>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link className="w-full" href={`/${path}/${id}/edit`}>
            <div className={"flex"}>
              <FileEdit className="mr-2" size={16} strokeWidth={1} />
              <span>Edit</span>
            </div>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={(e) => e.preventDefault()}>
          <DeleteCell
            id={id}
            deleteAction={deleteAction}
            closeMenu={setOpen}
            {...rest}
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ActionCell;
