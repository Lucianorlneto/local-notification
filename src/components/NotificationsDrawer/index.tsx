import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from "react";
import NotificationCard from "../NotificationCard";
import Button from "../Button";
import useNotificationsStore from "../../stores/notifications";

type NotificationsDrawerProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const NotificationsDrawer: React.FC<NotificationsDrawerProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const notificationListRef = useRef<HTMLDivElement | null>(null);

  const { notifications, getUnreadNotifications, setReadAllNotification } =
    useNotificationsStore();

  const handleReadAllNotifications = useCallback(async () => {
    await setReadAllNotification({ orgId: 10 });
  }, [setReadAllNotification]);

  const fetchUnreadNotifications = useCallback(async () => {
    await getUnreadNotifications({ orgId: 10 });
  }, [getUnreadNotifications]);

  const handleClose = useCallback(() => {
    setIsOpen((value) => !value);
    setTimeout(() => {
      notificationListRef.current?.scrollTo(0, 0);
    }, 500);
  }, [setIsOpen]);

  useEffect(() => {
    fetchUnreadNotifications();
  }, [fetchUnreadNotifications]);

  return (
    <div
      className={
        "fixed overflow-hidden z-10 bg-gray-900 bg-opacity-50 inset-0 transform ease-in-out " +
        (isOpen
          ? "transition-opacity opacity-100 duration-300 translate-x-0"
          : "transition-all duration-300 opacity-0 translate-x-full")
      }
    >
      <div
        className={
          "flex flex-1 w-screen max-w-lg right-0 absolute bg-gray-600 h-full shadow-xl duration-300 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <div className="p-4 px-8 flex flex-1 flex-col">
          <h1 className="text-2xl text-white font-semibold text-left mb-4">
            Notifications
          </h1>
          <div className="mb-4 flex justify-end">
            <Button onClick={() => handleReadAllNotifications()}>
              mark all as read
            </Button>
          </div>
          <div
            ref={notificationListRef}
            className="flex flex-1 flex-col overflow-y-auto max-h-screen"
          >
            {notifications?.map(
              (notification) =>
                !notification.isRead && (
                  <NotificationCard
                    key={notification.recordId}
                    id={notification.recordId}
                    title={notification.title}
                    description={notification.description}
                    type={notification.type}
                    setIsOpen={handleClose}
                  />
                )
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-full" onClick={handleClose} />
    </div>
  );
};

export default NotificationsDrawer;
