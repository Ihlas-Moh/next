"use client";

import * as React from "react";
import { ChevronsUpDown, Plus, Store } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/atoms/sidebar";
import { useAppDispatch } from "@/lib/store/hooks";
import { setSelectedStore } from "@/lib/store/features/store/storeSlice";
import { StoreDocType } from "@/lib/store/@types/store";
import Link from "next/link";
import { useStoresList } from "@/hooks/useStoresList";

export function StoreMenu() {
  const { isMobile } = useSidebar();

  const dispatch = useAppDispatch();
  const { stores, selectedStore } = useStoresList();

  const handleStoreChangeClick = React.useCallback(
    (store: StoreDocType) => {
      dispatch(setSelectedStore(store));
    },
    [dispatch],
  );

  return selectedStore && Array.isArray(stores) && stores.length ? (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <Store className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {selectedStore.name}
                </span>
                <span className="truncate text-xs">
                  {selectedStore.description}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              Stores
            </DropdownMenuLabel>
            {stores.map((store: StoreDocType, index) => (
              <DropdownMenuItem
                key={store._id}
                onClick={handleStoreChangeClick.bind(null, store)}
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center rounded-sm border">
                  <Store className="size-4 shrink-0" />
                </div>
                {store.name}
                <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className={"p-2 cursor-pointer"}>
              <Link
                href="/store/new"
                className="flex gap-2 items-center cursor-pointer"
              >
                <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                  <Plus className="size-4" />
                </div>
                <div className="font-medium text-muted-foreground">
                  Add store
                </div>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  ) : null;
}
