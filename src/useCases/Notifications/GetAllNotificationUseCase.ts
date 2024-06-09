import { notificationsDtoToNotifications } from "../../mappers/notifications";
import { notificationsApi } from "../../services/notificationsApi";

export async function getAllNotificationsUseCase({
  orgId,
}: {
  orgId: number;
}): Promise<CustomNotification[]> {
  const res = await notificationsApi.get<CustomNotificationDto[]>(`${orgId}`);

  const notifications = notificationsDtoToNotifications(res.data);

  return notifications;
}
