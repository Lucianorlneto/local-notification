import React, { Dispatch, SetStateAction, useCallback } from "react";
import { Link } from "react-router-dom";
import { useNotifications } from "../../hooks/useNotifications";
import useNotificationsStore from "../../stores/notifications";
import Button from "../Button";

type NotificationCardProps = {
  id: number;
  type: CustomNotificationType;
  title: string;
  description: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const NotificationCard: React.FC<NotificationCardProps> = ({
  id,
  description,
  title,
  type,
  setIsOpen,
}) => {
  const { getNotificationIcon } = useNotifications();
  const { setReadNotification } = useNotificationsStore();

  const handleReadNotification = useCallback(async () => {
    try {
      await setReadNotification({ orgId: 10, recordId: id });
    } catch (error) {}
  }, [id, setReadNotification]);

  return (
    <Link
      to={`/notification/${id}`}
      onClick={() => {
        setIsOpen(false);
        handleReadNotification();
      }}
      className="flex mb-8 cursor-pointer"
    >
      <div className="flex mr-1 bg-slate-500 justify-center p-2 rounded-sm">
        {getNotificationIcon({ type: type })}
      </div>

      <div className="flex flex-1 min-w-0 bg-slate-500 flex-col p-2 rounded-sm">
        <h3 className="text-white font-semibold text-lg text-left truncate text-ellipsis">
          {title}
        </h3>
        <p className="text-left overflow-hidden text-white mb-2">
          {description}
        </p>
        <Button
          className="self-end"
          onClick={async (e) => {
            e.stopPropagation();
            e.preventDefault();
            await handleReadNotification();
          }}
        >
          Mark as read
        </Button>
      </div>
    </Link>
  );
};

export default NotificationCard;
