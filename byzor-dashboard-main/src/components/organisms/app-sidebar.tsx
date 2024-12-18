"use client";

import * as React from "react";
import { Store, Box, User, Home, Ticket, DollarSign, BarChart, Star, Pen, CreditCard, LogOut } from "lucide-react";
import { NavMain } from "@/components/molecules/nav-main";
import { NavUser } from "@/components/molecules/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/atoms/sidebar";
import { usePathname } from "next/navigation";
import { StoreMenu } from "@/components/molecules/store-menu";
import { NavProjects } from "../molecules/nav-projects";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  const navMain = React.useMemo(() => {
    return [
      {
        title: "Dashboard",
        url: "/",
        icon: Home,
        isActive: pathname === "/",
      },

      {
        title: "Store",
        url: "#",
        icon: Store,
        isActive: pathname === "/store" || pathname === "/store/new",
        items: [
          {
            title: "List",
            url: "/store",
            isActive: pathname === "/store",
          },
          {
            title: "Add New",
            url: "/store/new",
            isActive: pathname === "/store/new",
          },
        ],
      },

      {
        title: "Products",
        url: "#",
        icon: Box,
        isActive: pathname === "/product" || pathname === "/product/new",
        items: [
          {
            title: "List",
            url: "/product",
            isActive: pathname === "/product",
          },
          {
            title: "Add New",
            url: "/product/new",
            isActive: pathname === "/product/new",
          },
        ],
      },

      {
        title: "User",
        url: "#",
        icon: User,
        isActive: pathname === "/user" || pathname === "/user/new",
        items: [
          {
            title: "List",
            url: "/user",
            isActive: pathname === "/user",
          },
          {
            title: "Add New",
            url: "/user/new",
            isActive: pathname === "/user/new",
          },
        ],
      },

      {
        title: "Review",
        url: "#",
        icon: Star,
        isActive: pathname === "/review" || pathname === "/review/new",
        items: [
          {
            title: "List",
            url: "/review",
            isActive: pathname === "/review",
          },
          {
            title: "Add New",
            url: "/review/new",
            isActive: pathname === "/review/new",
          },
        ],
      },

      {
        title: "Coupon",
        url: "#",
        icon: Ticket,
        isActive: pathname === "/coupon" || pathname === "/coupon/new",
        items: [
          {
            title: "List",
            url: "/coupon",
            isActive: pathname === "/coupon",
          },
          {
            title: "Add New",
            url: "/coupon/new",
            isActive: pathname === "/coupon/new",
          },
        ],
      },

      {
        title: "Revenue",
        url: "/revenue",
        icon: DollarSign,
        isActive: pathname === "/revenue",
      },

      {
        title: "Analytics",
        url: "/analytics",
        icon: BarChart,
        isActive: pathname === "/analytics",
      },

      {
        title: "Billing",
        url: "/billing",
        icon: CreditCard,
        isActive: pathname === "/billing",
      },

      {
        title: "Feedback",
        url: "/feedback",
        icon: Pen,
        isActive: pathname === "/feedback",
      }
    ];
  }, [pathname]);

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <StoreMenu />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} label="Menu" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
