"use client";

import { DotsIcon } from "../icons";
import styles from "./styles.module.css";

const ContextMenu = () => {
  const handleClick = () => {
    alert("Action 3");
  };

  return (
    <>
      <button className={styles.contextMenuButton} onClick={handleClick}>
        <DotsIcon />
      </button>
    </>
  );
};

export default ContextMenu;
