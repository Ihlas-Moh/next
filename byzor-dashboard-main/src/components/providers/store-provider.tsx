"use client";
import React, { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/lib/store";
import { UserType } from "@/lib/actions/@types/user";
import { updateUser } from "@/lib/store/features/app/appSlice";
import { StoreDocType } from "@/lib/store/@types/store";
import { setStores } from "@/lib/store/features/store/storeSlice";

export default function StoreProvider({
  children,
  user,
  stores,
}: {
  user: UserType | null;
  stores: Array<StoreDocType>;
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    storeRef.current.dispatch(updateUser(user));
    storeRef.current.dispatch(setStores(stores));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
