import { GeneralAsyncRequestParams } from "@/lib/@types";
import { getStore } from "@/lib/actions/store";
import PageHeader from "@/components/molecules/page-header";
import StoreForm from "@/components/molecules/form/store/store-form";
import React from "react";
import Loader from "@/components/molecules/loader/Loader";

async function Page({ params }: { params: GeneralAsyncRequestParams }) {
  const id = (await params).id;
  const store = await getStore(id);
  console.log(store);
  return (
    <React.Suspense fallback={<Loader />}>
      <PageHeader
        breadCrumbs={[
          { title: "Dashboard", link: "/" },
          { title: "New Store" },
        ]}
      />
      Hello
      <StoreForm store={store} />
    </React.Suspense>
  );
}

export default Page;
