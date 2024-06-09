import { notificationsDtoToNotifications } from "../../mappers/notifications";
import { notificationsApi } from "../../services/notificationsApi";

export async function getUnreadNotificationsUseCase({
  orgId,
}: {
  orgId: number;
}): Promise<CustomNotification[]> {
  const res = await notificationsApi.get<CustomNotificationDto[]>(
    `${orgId}/unread?key=64d94490`
  );

  const notifications = notificationsDtoToNotifications(res.data);

  return notifications;
}
