'use client'
import { Bell } from 'lucide-react'
import { Button } from "@/components/atoms/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdown-menu"
import { useNotifications } from '@/components/providers/notification-provider'

export function NotificationCenter() {
  const { notifications, removeNotification } = useNotifications();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default" size="icon">
          <Bell className="h-[1.2rem] w-[1.2rem]" />
          {notifications.length > 0 && (
            <span className="absolute top-1 right-10 h-5 w-5 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
              {notifications.length}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[300px]">
        {notifications.length === 0 ? (
          <DropdownMenuItem>No new notifications</DropdownMenuItem>
        ) : (
          notifications.map((notification) => (
            <DropdownMenuItem key={notification.id} onSelect={() => removeNotification(notification.id)}>
              <div>
                <div className="font-medium">{notification.title}</div>
                <div className="text-sm text-muted-foreground">{notification.description}</div>
              </div>
            </DropdownMenuItem>
          ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
