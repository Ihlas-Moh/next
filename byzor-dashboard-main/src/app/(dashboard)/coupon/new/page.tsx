import React from "react";
import CouponForm from "@/components/molecules/form/coupon/coupon-form";
import { getKindeToken } from "@/lib/axios/axios";
import PageHeader from "@/components/molecules/page-header";

async function Page() {
  const token = await getKindeToken();
  return (
    <>
      <PageHeader
        breadCrumbs={[
          { title: "Dashboard", link: "/" },
          { title: "New Coupon", link: "/coupon/new" },
        ]}
      />
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Add new coupon form</h1>
          <p className="text-muted-foreground">Manage all coupons.</p>
        </div>
        <CouponForm token={token} />
      </div>
    </>
  );
}

export default Page;
