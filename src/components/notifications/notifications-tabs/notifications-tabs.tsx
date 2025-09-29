"use client";

import Tabs from "@/shared/ui/tabs";
import { TabItem } from "@/shared/ui/tabs/model";
import "@/shared/ui/styles/index.css";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { NotificationsTabsProps } from "./model";
import { NotificationTabContent } from "./notification-tab-content";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/shared/config/query-client";

const tabs: TabItem[] = [
  {
    label: "Все",
    key: "all",
    content: <NotificationTabContent />,
  },
  {
    label: "Общение",
    key: "communication",
    content: <NotificationTabContent filterBy="communication" />,
  },
  {
    label: "Действия",
    key: "actions",
    content: <NotificationTabContent filterBy="actions" />,
  },
];

export const NotificationsTabs: FC<NotificationsTabsProps> = ({
  activeTab,
}) => {
  const router = useRouter();

  const handleTabChange = (key: string) => {
    router.push(`/notifications/${key}`);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Tabs items={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
    </QueryClientProvider>
  );
};
