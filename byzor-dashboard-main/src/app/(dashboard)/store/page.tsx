import React from "react";
import StoreList from "@/components/molecules/list/store/store-list";
import PageHeader from "@/components/molecules/page-header";

async function Page() {
  return (
    <>
      <PageHeader
        breadCrumbs={[
          { title: "Dashboard", link: "/" },
          { title: "Store List" },
        ]}
      />
      <div>
        <div className="font-bold text-3xl ">List of store</div>
        <StoreList />
      </div>
    </>
  );
}

export default Page;
