"use client";
import React from "react";
// @ts-ignore
import { useGetAllCouponsQuery } from "@/lib/store/api/couponService";
import { getColumns } from "@/components/molecules/list/coupon/columns";
import { CouponType } from "@/lib/store/@types/coupon";
import DataTable from "@/components/atoms/data-table";

function CouponList() {
  const { data: coupons } = useGetAllCouponsQuery();
    return (
      <div className="flex flex-col gap-2">
        {Array.isArray(coupons) && coupons.length > 0 ? (
          <DataTable
            columns={getColumns()}
            data={coupons as Array<CouponType>}
          />
        ) : (
          <p>No coupons available for admin.</p>
        )}
      </div>
    );
}

export default CouponList;