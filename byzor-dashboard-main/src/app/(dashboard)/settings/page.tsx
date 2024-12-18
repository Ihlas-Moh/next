"use client"

import { useState } from "react";
import { Input } from "@/components/atoms/input";
import { Label } from "@/components/atoms/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/atoms/tabs";
import { Switch } from "@/components/atoms/switch";
import PageHeader from "@/components/molecules/page-header";
import TabMaker from "@/components/molecules/tab/tab-content-maker"; // Import TabMaker
import LoadingButton from "@/components/atoms/loading-button/loading-button";
import { useAppSelector } from "@/lib/store/hooks";


function Page() {
    const currentUser = useAppSelector((state) => state.app.currentUser);
    const [notifications, setNotifications] = useState({
        email: true,
        push: false,
        weekly: true,
        promotional: false,
    });

    return (
        <>
            <PageHeader
                breadCrumbs={[
                    { title: "Dashboard", link: "/" },
                    { title: "Settings", link: "/settings" },
                ]}
            />
            <div className="space-y-6">
                <div>
                    <h1 className="text-2xl font-bold">Settings</h1>
                    <p className="text-muted-foreground">
                        Manage your account settings and preferences.
                    </p>
                </div>

                <Tabs defaultValue="account" className="w-full">
                    <TabsList className="mb-2">
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="notifications">Notifications</TabsTrigger>
                        <TabsTrigger value="security">Security</TabsTrigger>
                    </TabsList>

                    {/* Account Tab */}
                    <TabMaker
                        value="account"
                        title="Account Information"
                        description="Update your account information."
                        content={
                            <>
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" defaultValue={currentUser?.name} />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" defaultValue={currentUser?.email} />
                                </div>
                            </>
                        }
                    />

                    {/* Notifications Tab */}
                    <TabMaker
                        value="notifications"
                        title="Notification Preferences"
                        description="Choose what notifications you receive."
                        content={
                            <>
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label>Email Notifications</Label>
                                        <p className="text-sm text-muted-foreground">
                                            Receive notifications via email
                                        </p>
                                    </div>
                                    <Switch
                                        checked={notifications.email}
                                        onCheckedChange={(checked) =>
                                            setNotifications((prev) => ({ ...prev, email: checked }))
                                        }
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label>Push Notifications</Label>
                                        <p className="text-sm text-muted-foreground">
                                            Receive push notifications
                                        </p>
                                    </div>
                                    <Switch
                                        checked={notifications.push}
                                        onCheckedChange={(checked) =>
                                            setNotifications((prev) => ({ ...prev, push: checked }))
                                        }
                                    />
                                </div>
                            </>
                        }
                    />

                    {/* Security Tab */}
                    <TabMaker
                        value="security"
                        title="Password"
                        description="Change your password."
                        content={
                            <>
                                <div className="grid gap-2">
                                    <Label htmlFor="current">Current Password</Label>
                                    <Input id="current" type="password" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="new">New Password</Label>
                                    <Input id="new" type="password" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="confirm">Confirm Password</Label>
                                    <Input id="confirm" type="password" />
                                </div>
                                <LoadingButton type={"submit"} value={"Update Password"} loading={false}>Update Password</LoadingButton>
                            </>
                        }
                    />
                </Tabs>
            </div>
        </>
    );
}

export default Page;
