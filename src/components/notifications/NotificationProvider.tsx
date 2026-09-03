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

    setNotifications((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((notification) => notification.id !== id));
    }, 4000);
  }, []);

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}

      <div className="fixed bottom-10 left-[24px] right-[24px] sm:left-auto sm:-right-[135px] z-[9999] flex sm:-translate-x-1/2 flex-col gap-2">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`
              flex
              min-w-[280px]
              items-center
              gap-3
              rounded-xl
              px-3
              py-2 sm:py-4
              text-sm
              text-white

              border border-white
              shadow-sm
              transition-all

              ${
                notification.type === 'success' || notification.type === 'info'
                  ? 'bg-primary'
                  : notification.type === 'error'
                    ? 'bg-[#3b82f6]'
                    : 'bg-gray-900'
              }
            `}
          >
            <span>
              {notification.type === 'success' ? '✓' : notification.type === 'error' ? '!' : ''}
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
