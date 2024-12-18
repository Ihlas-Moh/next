import React from "react";
import ReviewForm from "@/components/molecules/form/review/review-form";
import PageHeader from "@/components/molecules/page-header";

async function Page() {
  return (
    <>
      <PageHeader
        breadCrumbs={[
          { title: "Dashboard", link: "/" },
          { title: "New Review", link: "/review/new" },
        ]}
      />
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Add new review form</h1>
          <p className="text-muted-foreground">Manage all reviews.</p>
        </div>
        <ReviewForm />
      </div>
    </>
  );
}

export default Page;
