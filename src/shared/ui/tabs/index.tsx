"use client";

import { FC } from "react";
import styles from "./styles.module.css";
import { TabItem, TabsProps } from "./model";

const Tabs: FC<TabsProps> = ({
  items,
  defaultTab,
  activeTab,
  onTabChange,
  className,
}) => {
  const currentActiveTab = activeTab ?? defaultTab ?? items[0].key;

  const currentTab = items.find((item) => item.key === currentActiveTab);

  const handleTabClick = (key: TabItem["key"]) => {
    if (onTabChange) {
      onTabChange(key);
    }
  };

  return (
    <div className={className}>
      <div className={styles.tabs}>
        {items.map((tab) => (
          <div
            key={tab.key}
            className={styles.tab}
            data-active={currentActiveTab === tab.key}
            onClick={() => handleTabClick(tab.key)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className={styles.content}>{currentTab && currentTab.content}</div>
    </div>
  );
};

export default Tabs;
