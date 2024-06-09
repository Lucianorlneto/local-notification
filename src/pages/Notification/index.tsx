import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useNotifications } from "../../hooks/useNotifications";
import useNotificationsStore from "../../stores/notifications";

const Notification: React.FC = () => {
  const { id } = useParams();
  const { getNotificationIcon } = useNotifications();
  const { notifications } = useNotificationsStore();
  console.log("notifications", notifications);

  console.log(id);

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
    <div className="flex flex-1 justify-center flex-col">
      <div className="flex flex-1 mb-8">
        {getNotificationIcon({ type: currentNotification.type, size: 30 })}
        <h1 data-cy="notification-title" className="text-2xl font-bold ml-4">
          {currentNotification.title}
        </h1>
      </div>
      <p data-cy="notification-description" className="text-lg text-left">
        {currentNotification.description}
      </p>
    </div>
  );
};

export default Notification;
