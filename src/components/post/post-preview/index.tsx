import Image from "next/image";
import styles from "./styles.module.css";
import { FC } from "react";
import { PostPreviewProps } from "./model";

export const Preview: FC<PostPreviewProps> = ({ url }) => {
  return (
    <div className={styles.preview}>
      <Image
        className={styles.previewImage}
        src={url}
        alt={url}
        height={40}
        width={40}
      />
    </div>
  );
};
