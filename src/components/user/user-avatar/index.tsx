import { FC } from "react";
import styles from "./styles.module.css";
import { AvatarProps } from "./model";
import Image from "next/image";

const renderAvatarImage = (url?: string) => {
  if (url)
    return (
      <Image
        className={styles.avatarImage}
        height={40}
        width={40}
        src={url}
        alt={url}
      />
    );
};

export const Avatar: FC<AvatarProps> = ({ url, className }) => {
  return (
    <div className={`${styles.avatar} ${className}`}>
      {renderAvatarImage(url)}
    </div>
  );
};
