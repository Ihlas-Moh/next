import React from "react";
import PageHeader from "@/components/molecules/page-header";
import Billing from "@/components/organisms/billing";

async function Page() {
  return (
    <>
      <PageHeader
        breadCrumbs={[
          { title: "Dashboard", link: "/" },
          { title: "Billing", link: "/billing" },
        ]}
      />
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Billing</h1>
          <p className="text-muted-foreground">Manage your billing preferences.</p>
        </div>
        <Billing />
      </div>
    </>
  );
}

export default Page;
