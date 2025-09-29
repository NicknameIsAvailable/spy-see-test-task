import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.css";
import Drawer from "@/shared/ui/drawer";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className={styles.mainLayout}>
      <Drawer />
      <section className={styles.content}>{children}</section>
    </section>
  );
};

export default MainLayout;
