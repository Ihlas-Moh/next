import React from 'react';
import {
    SidebarProvider,
} from "@/components/atoms/sidebar"

type Props = {
    children: React.ReactNode
}

function SidebarProviderComponent({children}: Props) {
    return (
        <SidebarProvider>{children}</SidebarProvider>
    );
}

export default SidebarProviderComponent;
