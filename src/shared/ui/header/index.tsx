import { FC } from "react";
import styles from "./styles.module.css";
import { HeaderProps } from "./model";

const Header: FC<HeaderProps> = ({ title, children }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <nav className={styles.nav}>{children}</nav>
    </header>
  );
};

export default Header;
