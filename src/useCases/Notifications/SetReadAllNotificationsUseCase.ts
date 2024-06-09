import { notificationsApi } from "../../services/notificationsApi";

export async function setReadAllNotificationsUseCase({
  orgId,
}: {
  orgId: number;
}) {
  const res = await notificationsApi.post(`${orgId}/mark-read`);

  return res.data;
}
