import { ColumnDef } from "@tanstack/react-table";
import { CouponType } from "@/lib/store/@types/coupon";
import { Button } from "@/components/atoms/button";
import { format } from "date-fns"; // You may need to install date-fns for date formatting

export const getColumns = (): ColumnDef<CouponType>[] => [
  {
    accessorKey: "name",
    header: "Coupon Name",
  },
  {
    accessorKey: "description",
    header: "Coupon Description",
  },
  {
    accessorKey: "discount",
    header: "Discount",
    // If the discount is percentage-based, we can format it to show "%" symbol
    cell: ({ row }) => {
      const discount = row.getValue("discount");
      return discount ? `${discount}%` : "N/A";
    },
  },
  {
    accessorKey: "sku",
    header: "SKU",
  },
  {
    accessorKey: "type",
    header: "Coupon Type",
    // Custom rendering for type to show "Coupon" or "Service"
    cell: ({ row }) => {
      const type = row.getValue("type");
      return type === "percentage"
        ? "Percentage"
        : type === "fixed"
          ? "Fixed"
          : "Service";
    },
  },
  {
    accessorKey: "store",
    header: "Store Id",
  },
  {
    accessorKey: "owner",
    header: "Coupon Owner Id",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div style={{ display: "flex", gap: "10px" }}>
        <Button variant="outline" size="sm">
          Edit
        </Button>
        <Button variant="default" size="sm">
          Suspend
        </Button>
        <Button variant="destructive" size="sm">
          Delete
        </Button>
      </div>
    ),
  },
];
