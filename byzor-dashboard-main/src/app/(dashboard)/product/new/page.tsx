import React from "react";
import ProductForm from "@/components/molecules/form/product/product-form";
import { getKindeToken } from "@/lib/axios/axios";
import PageHeader from "@/components/molecules/page-header";

async function Page() {
  const token = await getKindeToken();
  return (
    <>
      <PageHeader
        breadCrumbs={[
          { title: "Dashboard", link: "/" },
          { title: "New Product", link: "/product/new" },
        ]}
      />
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Add new product form</h1>
          <p className="text-muted-foreground">Manage all products.</p>
        </div>
        <ProductForm token={token} />
      </div>
    </>
  );
}

export default Page;
