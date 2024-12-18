"use client";
import React from "react";
import { getColumns } from "@/components/molecules/list/store/columns";
import { StoreDocType } from "@/lib/store/@types/store";
import DataTable from "@/components/atoms/data-table";
import { useStoresList } from "@/hooks/useStoresList";

function StoreList() {
  const { stores } = useStoresList();

  return (
    <div className={"flex flex-col gap-2"}>
      {Array.isArray(stores) && stores.length ? (
        <DataTable
          columns={getColumns()}
          data={stores as unknown as Array<StoreDocType>}
        />
      ) : (
        []
      )}
    </div>
  );
}

export default StoreList;
