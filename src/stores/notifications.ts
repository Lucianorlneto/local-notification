import { create } from "zustand";
import { getAllNotificationsUseCase } from "../useCases/Notifications/GetAllNotificationUseCase";
import { isAxiosError } from "axios";
import { toast } from "react-toastify";
import { getUnreadNotificationsUseCase } from "../useCases/Notifications/GetUnreadNotificationsUseCase";
import { setReadAllNotificationsUseCase } from "../useCases/Notifications/SetReadAllNotificationsUseCase";
import { setReadNotificationsUseCase } from "../useCases/Notifications/SetReadNotificationUseCase";

const INITIAL_STATE = {
  loading: false,
  notifications: null,
};

type NotificationStoreState = {
  loading: boolean;
  notifications: CustomNotification[] | null;
  getAllNotifications: ({ orgId }: { orgId: number }) => Promise<void>;
  getUnreadNotifications: ({ orgId }: { orgId: number }) => Promise<void>;
  setReadAllNotification: ({ orgId }: { orgId: number }) => Promise<void>;
  setReadNotification: ({
    orgId,
    recordId,
    removeLocally,
  }: {
    orgId: number;
    recordId: number;
    removeLocally?: boolean;
  }) => Promise<void>;
  clear: void;
};

const useNotificationsStore = create<NotificationStoreState>((set, get) => ({
  loading: false,
  notifications: null,
  getAllNotifications: async ({ orgId }: { orgId: number }) => {
    try {
      set({ loading: true });
      const notifications = await getAllNotificationsUseCase({ orgId });

      set({ notifications: notifications });
    } catch (error) {
      console.log(error);
      if (isAxiosError(error)) toast.error(error.message);
      else toast.error("An error has occurred");
    } finally {
      set({ loading: false });
    }
  },
  getUnreadNotifications: async ({ orgId }: { orgId: number }) => {
    try {
      set({ loading: true });
      const unreadNotifications = await getUnreadNotificationsUseCase({
        orgId,
      });

      set({ notifications: unreadNotifications });
    } catch (error) {
      console.log(error);
      if (isAxiosError(error)) toast.error(error.message);
      else toast.error("An error has occurred");
    } finally {
      set({ loading: false });
    }
  },
  setReadAllNotification: async ({ orgId }: { orgId: number }) => {
    try {
      const readNotifications = get().notifications?.map((notification) => ({
        ...notification,
        isRead: true,
      }));
      set({ notifications: readNotifications ?? [] });

      const unreadNotifications = await setReadAllNotificationsUseCase({
        orgId,
      });

      set({ notifications: unreadNotifications });
    } catch (error) {
      console.log(error);
      if (isAxiosError(error))
        toast.error(error.message, { position: "top-left" });
      else toast.error("An error has occurred", { position: "top-left" });
    }
  },
  setReadNotification: async ({
    orgId,
    recordId,
    removeLocally = true,
  }: {
    orgId: number;
    recordId: number;
    removeLocally?: boolean;
  }) => {
    try {
      if (removeLocally) {
        const newNotifications = get().notifications?.map((notification) =>
          notification.recordId === recordId
            ? {
                ...notification,
                isRead: true,
              }
            : notification
        );

        set({ notifications: newNotifications ?? get().notifications });
      }

      const unreadNotifications = await setReadNotificationsUseCase({
        orgId,
        messageId: recordId,
      });

      set({ notifications: unreadNotifications });
    } catch (error) {
      console.log(error);
      if (isAxiosError(error)) toast.error(error.message);
      else toast.error("An error has occurred");
    }
  },
  clear: set(INITIAL_STATE),
}));

export default useNotificationsStore;
