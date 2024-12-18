import React from "react";
import { StoreDocType } from "@/lib/store/@types/store";
import { useGetAllStoresQuery } from "@/lib/store/api/storeService";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { setSelectedStore } from "@/lib/store/features/store/storeSlice";

export function useStoresList() {
  const _stores = useAppSelector((state) => state.store.stores);
  const { data: stores } = useGetAllStoresQuery(undefined, {
    skip: Array.isArray(_stores) && _stores.length > 0,
  });
  const dispatch = useAppDispatch();
  const selectedStore = useAppSelector((state) => state.store.selectedStore);

  React.useEffect(() => {
    if (!selectedStore && Array.isArray(stores) && stores.length) {
      dispatch(setSelectedStore(stores[0] as unknown as StoreDocType));
    }
  }, [dispatch, stores, selectedStore]);

  return { stores: stores ? stores : _stores, selectedStore };
}
