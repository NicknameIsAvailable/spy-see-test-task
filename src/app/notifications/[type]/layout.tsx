import { Notifications } from "@/components/notifications";
import { ReactNode, use } from "react";

export type NotificationType = "all" | "communication" | "actions";

interface NotificationsLayoutProps {
  children: ReactNode;
  params: Promise<{ type: string }>;
}

export default function NotificationsLayout({
  children,
  params,
}: NotificationsLayoutProps) {
  const { type: rawType } = use(params);
  const allowed: NotificationType[] = ["all", "communication", "actions"];
  const type = allowed.includes(rawType as NotificationType)
    ? (rawType as NotificationType)
    : "all";

  return (
    <>
      <Notifications.Tabs activeTab={type} />
      {children}
    </>
  );
}
