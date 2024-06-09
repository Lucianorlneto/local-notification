import { useCallback } from "react";
import { MdError, MdErrorOutline, MdWarning } from "react-icons/md";

export function useNotifications() {
  const getNotificationIcon = useCallback(
    ({ type, size = 30 }: { type: CustomNotificationType; size?: number }) => {
      if (type === "NORMAL")
        return <MdErrorOutline color="orange" size={size} />;

      if (type === "SEVERE") return <MdError color="FireBrick" size={size} />;

      return <MdWarning color="yellow" size={size} />;
    },
    []
  );

  return {
    getNotificationIcon,
  };
}
