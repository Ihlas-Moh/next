"use client";
import React from "react";
import { getColumns } from "@/components/molecules/list/user/columns";
import { UserType } from "@/lib/store/@types/user";
import DataTable from "@/components/atoms/data-table";

type Props = {
  token: string;
};

function UserList({ token }: Props) {
  // const [parent] = useAutoAnimate({ duration: 500 });
  const users: Array<UserType> = [];
  return (
    <div className={"flex flex-col gap-2"}>
      {Array.isArray(users) && users.length ? (
        <DataTable
          columns={getColumns(token)}
          data={users as unknown as Array<UserType>}
        />
      ) : (
        []
      )}
    </div>
  );
}

export default UserList;
