import React from "react";
import PageHeader from "@/components/molecules/page-header";
import { getKindeToken } from "@/lib/axios/axios";
import UserList from "@/components/molecules/list/user/user-list";

async function Page() {
  const token = await getKindeToken();
  return (
    <>
      <PageHeader
        breadCrumbs={[
          { title: "Dashboard", link: "/" },
          { title: "User List", link: "/user" },
        ]}
      />
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">List of users</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences.</p>
        </div>
        <UserList token={token} />
      </div>
    </>
  );
}

export default Page;
