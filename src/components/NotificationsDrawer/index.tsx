import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import NotificationCard from "../NotificationCard";
import Button from "../Button";
import useNotificationsStore from "../../stores/notifications";
import useOrganizationsStore from "../../stores/organizations";

type NotificationsDrawerProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const EmptyNotificationsList = () => {
  return (
    <>
      <h2 className="text-gray-200 text-xl">
        There are no unread notifications at the moment
      </h2>
    </>
  );
};

const NotificationsDrawer: React.FC<NotificationsDrawerProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const notificationListRef = useRef<HTMLDivElement | null>(null);

  const { notifications, getUnreadNotifications, setReadAllNotification } =
    useNotificationsStore();
  const { selectedOrganization } = useOrganizationsStore();

  const currentNotifications = useMemo(() => {
    return notifications?.filter((notification) => !notification.isRead);
  }, [notifications]);

  const handleReadAllNotifications = useCallback(async () => {
    await setReadAllNotification();
  }, [setReadAllNotification]);

  const fetchUnreadNotifications = useCallback(async () => {
    await getUnreadNotifications();
  }, [getUnreadNotifications]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => {
      notificationListRef.current?.scrollTo(0, 0);
    }, 500);
  }, [setIsOpen]);

  const RenderNotificationList = useCallback(() => {
    return (
      <>
        <Button
          className="self-start mb-8"
          data-cy="notification-drawer-read-all-button"
          onClick={() => handleReadAllNotifications()}
        >
          mark all as read
        </Button>
        <div className="flex h-full flex-col overflow-y-auto mt-4">
          {currentNotifications?.map(
            (notification, index) =>
              !notification.isRead && (
                <NotificationCard
                  position={index}
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
      </>
    );
  }, [currentNotifications, handleClose, handleReadAllNotifications]);

  useEffect(() => {
    fetchUnreadNotifications();
  }, [fetchUnreadNotifications, selectedOrganization]);

  console.log(notifications);

  return (
    <div
      data-cy="drawer-background"
      className={
        "fixed flex-1 z-10 bg-gray-900 bg-opacity-50 inset-0 transform " +
        (isOpen
          ? "transition-opacity duration-300 opacity-100 translate-x-0"
          : "transition-all duration-300 opacity-0 -translate-x-full")
      }
    >
      <div
        className={
          "h-full p-4  w-screen max-w-lg left-0 absolute bg-gray-600 shadow-xl duration-300 transition-all" +
          (isOpen ? " translate-x-0 " : " -translate-x-full ")
        }
      >
        <div className="flex h-full flex-col">
          <h1 className="text-2xl text-gray-200 font-semibold text-left mb-4">
            Notifications
          </h1>

          {!currentNotifications || currentNotifications.length < 1 ? (
            <EmptyNotificationsList />
          ) : (
            <RenderNotificationList />
          )}
        </div>
      </div>
      <div className="w-full h-full" onClick={handleClose} />
    </div>
  );
};

export default NotificationsDrawer;
