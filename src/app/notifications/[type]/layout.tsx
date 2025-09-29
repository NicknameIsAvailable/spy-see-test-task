import { Notifications } from "@/components/notifications";

export type NotificationType = "all" | "communication" | "actions";

interface NotificationsPageParams {
  params: Promise<{ type: NotificationType }>;
}

export default async function NotificationsLayout({
  params,
}: NotificationsPageParams) {
  const { type } = await params;

  return (
    <>
      <Notifications.Tabs activeTab={type} />
    </>
  );
}
