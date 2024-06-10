import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useNotifications } from "../../hooks/useNotifications";
import useNotificationsStore from "../../stores/notifications";
import { Layout } from "../../components";

const Notification: React.FC = () => {
  const { id } = useParams();
  const { getNotificationIcon } = useNotifications();
  const { notifications } = useNotificationsStore();

  const currentNotification = useMemo(() => {
    if (id)
      return notifications?.find(
        (notification) => notification.recordId === parseInt(id, 10)
      );

    return null;
  }, [id, notifications]);

  if (!currentNotification)
    return (
      <div
        data-cy="notification-not-found"
        className="flex flex-1  justify-center items-center"
      >
        <h2 className="text-2xl font-semibold">
          Notification not found. Please try again.
        </h2>
      </div>
    );

  return (
    <Layout>
      <div className="flex flex-1 items-start w-full">
        <div className="border-2 border-gray-700 dark:border-gray-300 p-4 rounded-md w-full">
          <div className="flex mb-8 self-start">
            {getNotificationIcon({ type: currentNotification.type, size: 30 })}
            <h1
              data-cy="notification-title"
              className="text-2xl font-bold ml-4 text-gray-900 dark:text-gray-300"
            >
              {currentNotification.title}
            </h1>
          </div>
          <p
            data-cy="notification-description"
            className="text-lg text-left text-gray-700 dark:text-gray-200"
          >
            {currentNotification.description}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Notification;
