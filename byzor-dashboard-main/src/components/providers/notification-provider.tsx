'use client'
import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { ToastProvider } from "@/components/atoms/toast"
import { useToast } from "@/hooks/use-toast"

type Notification = {
  id: string
  title: string
  description: string
  type: 'info' | 'success' | 'warning' | 'error'
}

type NotificationContextType = {
  notifications: Notification[]
  addNotification: (notification: Omit<Notification, 'id'>) => void
  removeNotification: (id: string) => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export function NotificationProvider({ children, initialNotifications }: { children: ReactNode, initialNotifications: Notification[] }) {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications)
  const { toast } = useToast()

  const addNotification = (notification: Omit<Notification, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newNotification = { ...notification, id }
    setNotifications((prev) => [...prev, newNotification])
    toast({
      title: notification.title,
      description: notification.description,
      variant: notification.type === 'error' ? 'destructive' : 'default',
    })
  }

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id))
  }

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
      <ToastProvider>
        {children}
      </ToastProvider>
    </NotificationContext.Provider>
  )
}

export function useNotifications() {
  const context = useContext(NotificationContext)
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider')
  }
  return context
}
