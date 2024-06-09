function notificationDtoToNotification(
  notificationDto: CustomNotificationDto
): CustomNotification {
  return {
    recordId: notificationDto.recordId,
    type: notificationDto.type,
    description: notificationDto.description,
    title: notificationDto.title,
    isRead: notificationDto.isRead,
  };
}

export function notificationsDtoToNotifications(
  notificationsDto: CustomNotificationDto[]
): CustomNotification[] {
  return notificationsDto.map((notificationDto) =>
    notificationDtoToNotification(notificationDto)
  );
}
