"use client";
import React from "react";
// @ts-ignore
import { useGetAllReviewsQuery } from "@/lib/store/api/reviewService";
import { getColumns } from "@/components/molecules/list/review/columns";
import { ReviewType } from "@/lib/store/@types/review";
import DataTable from "@/components/atoms/data-table";

function ReviewList() {
  const { data: reviews } = useGetAllReviewsQuery();
    return (
      <div className="flex flex-col gap-2">
        {Array.isArray(reviews) && reviews.length > 0 ? (
          <DataTable
            columns={getColumns()}
            data={reviews as Array<ReviewType>}
          />
        ) : (
          <p>No reviews available for admin.</p>
        )}
      </div>
    );
}

export default ReviewList;