import React from "react";
import PageHeader from "@/components/molecules/page-header";
import UserForm from "@/components/molecules/form/user/user-form";

async function Page() {
  return (
    <>
      <PageHeader
        breadCrumbs={[
          { title: "Dashboard", link: "/" },
          { title: "New User", link: "/user/new" },
        ]}
      />
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Add new user form</h1>
          <p className="text-muted-foreground">
            Manage your account settings and preferences.
          </p>
        </div>
        <UserForm />
      </div>
    </>
  );
}

export default Page;
