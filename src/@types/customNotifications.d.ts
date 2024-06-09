type CustomNotificationType = "WARNING" | "NORMAL" | "SEVERE";

type CustomNotificationDto = {
  recordId: number;
  type: CustomNotificationType;
  title: string;
  description: string;
  isRead: boolean;
};

type CustomNotification = {
  recordId: number;
  type: CustomNotificationType;
  title: string;
  description: string;
  isRead: boolean;
};
