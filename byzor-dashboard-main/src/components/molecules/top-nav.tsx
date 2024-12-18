"use client"
import { SunMoon, Bell, Search, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { NotificationCenter } from "@/components/molecules/notification-center";
// import { useNotifications } from "@/components/providers/notification-provider";

type Props = {
  greeting: string;
};

const TopNav = ({ greeting }: Props) => {
  const [showSearch, setShowSearch] = useState(false);
  const isMobile = useIsMobile(); 
  // const { notifications } = useNotifications()

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="flex bg-white p-3 shadow-md items-center w-full max-w-screen-2xl">
      {/* Greeting (Hidden on mobile screens) */}
      {!isMobile && (
        <div className="text-base font-bold text-gray-700 mr-4">
          {greeting + " User!"}
        </div>
      )}

      {/* Search Box */}
      <div className="relative ml-auto flex items-center justify-center w-[20rem] h-[2rem] border border-gray-300 rounded-lg shadow-sm overflow-hidden">
        <input
          type="text"
          placeholder="Search..."
          className={`w-full h-8 pl-10 pr-4 text-sm border-none outline-none focus:ring-2 focus:ring-blue-400 rounded-lg transition-all duration-300 ${
            showSearch ? "block" : "hidden"
          }`}
        />
        {!isMobile ? (
          <Search className="text-sm absolute left-3 text-gray-500" />
        ) : (
          <Search
            className="text-sm absolute left-3 text-gray-500 cursor-pointer"
            onClick={toggleSearch}
          />
        )}
      </div>

      {/* Icons */}
      <div className="flex gap-4 items-center ml-auto text-gray-600">
        <SunMoon className="cursor-pointer hover:text-black transition-colors duration-200 text-xs" />
        <Bell className="cursor-pointer hover:text-black transition-colors duration-200 text-lg" />
        <NotificationCenter />
        <Link href="/settings">
          <User className="cursor-pointer hover:text-black transition-colors duration-200 text-lg" />
        </Link>
      </div>
    </div>
  );
};

export default TopNav;
