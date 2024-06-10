import { useCallback } from "react";
import { MdError, MdErrorOutline, MdWarning } from "react-icons/md";

export function useNotifications() {
  const getNotificationIcon = useCallback(
    ({ type, size = 30 }: { type: CustomNotificationType; size?: number }) => {
      if (type === "NORMAL")
        return (
          <MdErrorOutline
            data-cy="notification-icon"
            color="orange"
            size={size}
          />
        );

      if (type === "SEVERE")
        return (
          <MdError data-cy="notification-icon" color="indianRed" size={size} />
        );

      return (
        <MdWarning data-cy="notification-icon" color="yellow" size={size} />
      );
    },
    []
  );

  return {
    getNotificationIcon,
  };
}
