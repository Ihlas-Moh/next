import React from "react";
import ReviewList from "@/components/molecules/list/review/review-list";
import PageHeader from "@/components/molecules/page-header";

async function Page() {
  return (
    <>
      <PageHeader
        breadCrumbs={[
          { title: "Dashboard", link: "/" },
          { title: "Review List", link: "/review" },
        ]}
      />
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">List of reviews</h1>
          <p className="text-muted-foreground">Manage all reviews.</p>
        </div>
        <ReviewList />
      </div>
    </>
  );
}

export default Page;
