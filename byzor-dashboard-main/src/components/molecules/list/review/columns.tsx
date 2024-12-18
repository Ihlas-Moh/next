import { ColumnDef } from "@tanstack/react-table";
import { ReviewType } from "@/lib/store/@types/review";
import { Button } from "@/components/atoms/button";
import { format } from "date-fns"; // You may need to install date-fns for date formatting

export const getColumns = (): ColumnDef<ReviewType>[] => [
  {
    accessorKey: "review",
    header: "Review Description",
  },
  {
    accessorKey: "stars",
    header: "Rating",
    // Display the review stars as a rating out of 5
    cell: ({ row }) => {
      const stars = row.getValue("stars");
      return stars ? `${stars} / 5` : "No Rating";
    },
  },
  {
    accessorKey: "type",
    header: "Review Type",
    // Custom rendering for type to show "Review" or "Service"
    cell: ({ row }) => {
      const type = row.getValue("type");
      return type === "review" ? "Review" : "Service";
    },
  },
  {
    accessorKey: "store",
    header: "Store Id",
  },
  {
    accessorKey: "owner",
    header: "Review Owner Id",
  },
];
