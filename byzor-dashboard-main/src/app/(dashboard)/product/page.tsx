import React from "react";
import { getKindeToken } from "@/lib/axios/axios";
import ProductList from "@/components/molecules/list/product/product-list";
import PageHeader from "@/components/molecules/page-header";

async function Page() {
  const token = await getKindeToken();
  console.log(token);
  return (
    <>
      <PageHeader
        breadCrumbs={[
          { title: "Dashboard", link: "/" },
          { title: "Product List", link: "/product" },
        ]}
      />
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">List of products</h1>
          <p className="text-muted-foreground">Manage all products.</p>
        </div>
        <ProductList />
      </div>
    </>
  );
}

export default Page;
