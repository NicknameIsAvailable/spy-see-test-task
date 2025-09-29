import ContextMenu from "@/shared/ui/context-menu";
import Header from "@/shared/ui/header";
import { PropsWithChildren } from "react";

export default function NotificationsLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header title="Уведомления">
        <ContextMenu />
      </Header>
      {children}
    </>
  );
}
