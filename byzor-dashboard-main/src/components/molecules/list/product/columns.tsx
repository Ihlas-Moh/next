import { ColumnDef } from "@tanstack/react-table";
import { ProductType } from "@/lib/store/@types/product";
import { Button } from "@/components/atoms/button";

export const getColumns = (): ColumnDef<ProductType>[] => [
  {
    accessorKey: "name",
    header: "Product Name",
  },
  {
    accessorKey: "description",
    header: "Product Description",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "sku",
    header: "SKU",
  },
  {
    accessorKey: "type",
    header: "Product Type",
    // Custom rendering for type to show "Product" or "Service"
    cell: ({ row }) => {
      const type = row.getValue("type");
      return type === "product" ? "Product" : "Service";
    },
  },
  {
    accessorKey: "store",
    header: "Store Id",
  },
  {
    accessorKey: "owner",
    header: "Product Owner Id",
  },
  {
    accessorKey: "advertisement",
    header: "Advertisement",
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
