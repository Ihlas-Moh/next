import React from "react";
import { getKindeToken } from "@/lib/axios/axios";
import PageHeader from "@/components/molecules/page-header";
import FeedbackForm from "@/components/molecules/form/feedback/feedback-form";

async function Page() {
  const token = await getKindeToken();
  console.log(token);
  return (
    <>
      <PageHeader
        breadCrumbs={[
          { title: "Dashboard", link: "/" },
          { title: "Feedback", link: "/feedback" },
        ]}
      />
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Feedback</h1>
          <p className="text-muted-foreground">Review us.</p>
        </div>
        <FeedbackForm />
      </div>
    </>
  );
}

export default Page;
