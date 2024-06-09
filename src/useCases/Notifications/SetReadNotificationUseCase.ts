import { notificationsApi } from "../../services/notificationsApi";

export async function setReadNotificationsUseCase({
  orgId,
  messageId,
}: {
  orgId: number;
  messageId: number;
}) {
  const res = await notificationsApi.post(
    `${orgId}/mark-read?messageId=${messageId}`,
    {
      recordId: messageId,
    }
  );

  return res.data;
}
