'use client';

import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';

type NotificationType = 'success' | 'error' | 'info';

interface Notification {
  id: number;
  message: string;
  type: NotificationType;
}

interface NotificationContextType {
  notify: (message: string, type?: NotificationType) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const notify = useCallback((message: string, type: NotificationType = 'success') => {
    const id = Date.now();

    setNotifications((prev) => [
      ...prev,
      {
        id,
        message,
        type,
      },
    ]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((notification) => notification.id !== id));
    }, 2500);
  }, []);

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}

      <div className="fixed bottom-6 left-1/2 z-[9999] flex -translate-x-1/2 flex-col gap-2">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`
              flex
              min-w-[280px]
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              text-sm
              text-white
              shadow-xl
              transition-all

              ${
                notification.type === 'success'
                  ? 'bg-[#3b82f6]'
                  : notification.type === 'error'
                    ? 'bg-[#3b82f6]'
                    : 'bg-gray-900'
              }
            `}
          >
            <span>
              {notification.type === 'success' ? '✓' : notification.type === 'error' ? '!' : 'i'}
            </span>

            <span>{notification.message}</span>
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error('useNotification must be used inside NotificationProvider');
  }

  return context;
}
