"use client";
import { ColumnDef } from "@tanstack/react-table";
import { StoreDocType } from "@/lib/store/@types/store";
import ActionCell from "@/components/molecules/action-cell";
import { useDeleteStoreMutation } from "@/lib/store/api/storeService";

export const getColumns = (): ColumnDef<StoreDocType>[] => [
  {
    accessorKey: "name",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <span title={row.original.description}>{row.original.description}</span>
    ),
  },

  {
    accessorKey: "address",
    header: "Address",
    cell: ({ row }) => row.original.address || "N/A",
  },
  {
    accessorKey: "owner",
    header: "Owner",
  },
  {
    accessorKey: "businessVerification",
    header: "Business Verification",
    cell: ({ row }) =>
      row.original.businessVerification ? (
        <span style={{ color: "green" }}>Verified</span>
      ) : (
        <span style={{ color: "red" }}>Not Verified</span>
      ),
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      console.log(row.original);
      return (
        <ActionCell
          id={row.original._id}
          path={"store"}
          deleteAction={useDeleteStoreMutation}
        />
      );
    },
  },
];
