import { ReactNode } from "react";

export interface TabItem {
  label: string;
  key: string;
  content: ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  defaultTab?: TabItem["key"];
  className?: string;
  activeTab?: TabItem["key"];
  onTabChange?: (key: TabItem["key"]) => void;
}