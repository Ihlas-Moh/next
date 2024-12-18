"use client";
import { ColumnDef } from "@tanstack/react-table";
import { UserType } from "@/lib/store/@types/user";
import { Button } from "@/components/atoms/button";

export const getColumns = (token: string): ColumnDef<UserType>[] => [
  {
    accessorKey: "name",
    header: "User Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "password",
    header: "Password",
  },
  {
    accessorKey: "kindeId",
    header: "Kinde ID",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "gender",
    header: "Gender",
    // You can add custom rendering logic here if you want to display more user-friendly labels
    cell: ({ row }) => {
      const gender = row.getValue("gender");
      return gender === "male" ? "Male" : gender === "female" ? "Female" : "Genderless";
    },
  },
  {
    accessorKey: "telephone",
    header: "Telephone",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "position",
    header: "Position",
  },
  {
    accessorKey: "avatar",
    header: "Avatar",
  },
  {
    accessorKey: "picture",
    header: "Picture",
  },
  {
    accessorKey: "isActive",
    header: "Is Active",
    cell: ({ row }) => {
      const isActive = row.getValue("isActive");
      return isActive ? "Active" : "Inactive";
    },
  },
  {
    accessorKey: "bank",
    header: "Bank Details",
  },
  {
    accessorKey: "stores",
    header: "Stores",
  },
  {
    accessorKey: "userVerification",
    header: "User Verification",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div style={{ display: "flex", gap: "10px" }}>
        <Button
          variant="outline"
          size="sm"
        >
          Edit
        </Button>
                <Button
          variant="default"
          size="sm"
        >
          Suspend
        </Button>
        <Button
          variant="destructive"
          size="sm"
        >
          Delete
        </Button>
      </div>
    ),
  },
];

