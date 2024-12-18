import React from "react";
import CouponList from "@/components/molecules/list/coupon/coupon-list";
import PageHeader from "@/components/molecules/page-header";

async function Page() {
  return (
    <>
      <PageHeader
        breadCrumbs={[
          { title: "Dashboard", link: "/" },
          { title: "Coupon List", link: "/coupon" },
        ]}
      />
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">List of coupons</h1>
          <p className="text-muted-foreground">Manage all coupons.</p>
        </div>
        <CouponList />
      </div>
    </>
  );
}

export default Page;
