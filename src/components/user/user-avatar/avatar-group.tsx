import styles from "./styles.module.css";
import { Avatar } from ".";
import { FC } from "react";
import { AvatarGroupProps } from "./model";

export const AvatarGroup: FC<AvatarGroupProps> = ({ urls }) => {
  return (
    <div className={styles.avatarGroup}>
      {urls?.slice(0, 2).map((url) => (
        <Avatar className={styles.groupedAvatar} key={url} url={url} />
      ))}
    </div>
  );
};
