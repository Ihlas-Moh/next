import React from "react";
import SidebarProviderComponent from "@/components/providers/sidebar-provider";
import { AppSidebar } from "@/components/organisms/app-sidebar";
import { SidebarInset } from "@/components/atoms/sidebar";
import StoreProvider from "@/components/providers/store-provider";
import { getUser } from "@/lib/actions/user";
import { getStores } from "@/lib/actions/store";
import TopNav from "@/components/molecules/top-nav";
import { NotificationProvider } from "@/components/providers/notification-provider";

type Props = {
  children: React.ReactNode;
};

async function DashboardLayout({ children }: Props) {
  const user = await getUser();
  const stores = await getStores();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const greeting = getGreeting();

  const dummyNotifications = [
    { id: '1', title: 'New message from John', description: 'Hey! How are you?', type: 'info' },
    { id: '2', title: 'Meeting reminder', description: 'Team meeting at 3 PM today.', type: 'info' },
    { id: '3', title: 'Update available', description: 'Version 1.2.3 is now live!', type: 'info' },
  ];

  return (
    <StoreProvider stores={stores} user={user}>
     <NotificationProvider initialNotifications={dummyNotifications}>
     <SidebarProviderComponent>
        <AppSidebar />
        <SidebarInset>
        <TopNav greeting={greeting} />
          <div className="p-4 pt-0">{children}</div>
        </SidebarInset>
      </SidebarProviderComponent>
     </NotificationProvider>
    </StoreProvider>
  );
}

export default DashboardLayout;
