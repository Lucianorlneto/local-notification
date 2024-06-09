import React, { Dispatch, SetStateAction, useCallback, useState } from "react";
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
  position: number;
};

const NotificationCard: React.FC<NotificationCardProps> = ({
  id,
  description,
  title,
  type,
  setIsOpen,
  position,
}) => {
  const { getNotificationIcon } = useNotifications();
  const { setReadNotification } = useNotificationsStore();

  const [readCheck, setReadCheck] = useState(false);

  const handleReadNotification = useCallback(
    async (params?: { removeLocally: boolean }) => {
      await setReadNotification({
        orgId: 10,
        recordId: id,
        removeLocally: params?.removeLocally,
      });
    },
    [id, setReadNotification]
  );

  return (
    <div className="flex flex-1 mb-8 flex-row">
      <div className="flex mr-1 bg-slate-500 justify-center p-2 rounded-sm">
        {getNotificationIcon({ type: type })}
      </div>

      <div className="flex flex-1 flex-col">
        <Link
          data-cy={`notification-card-${position}`}
          className="flex flex-1 min-w-0 bg-slate-500 flex-col p-2 rounded-sm"
          to={`/notification/${id}`}
          onClick={() => {
            setIsOpen(false);
            handleReadNotification();
          }}
        >
          <h3 className="text-white max-w-[350px] font-semibold text-lg text-left truncate text-ellipsis">
            {title}
          </h3>
          <p className="text-left overflow-hidden text-gray-200 mb-2">
            {description}
          </p>
          <Button
            data-cy={`notification-card-read-button-${position}`}
            className="self-end"
            onClick={async (e) => {
              e.stopPropagation();
              e.preventDefault();
              await handleReadNotification();
            }}
          >
            Mark as read
          </Button>
        </Link>

        <div className="flex bg-slate-500 pb-2 justify-end pr-6">
          <label className="text-gray-200 block">
            <input
              data-cy={`notification-card-checkbox-${position}`}
              className="relative align-middle bottom-0"
              type="checkbox"
              checked={readCheck}
              onClick={async (e) => {
                setReadCheck((value) => {
                  if (!value) handleReadNotification({ removeLocally: false });

                  return !value;
                });
              }}
            />{" "}
            read
          </label>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
