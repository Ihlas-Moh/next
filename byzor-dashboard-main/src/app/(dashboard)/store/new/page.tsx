import React from "react";
import StoreForm from "@/components/molecules/form/store/store-form";
import PageHeader from "@/components/molecules/page-header";

async function Page() {
  return (
    <>
      <PageHeader
        breadCrumbs={[
          { title: "Dashboard", link: "/" },
          { title: "New Store" },
        ]}
      />
      Hello
      <StoreForm />
    </>
  );
}

export default Page;
