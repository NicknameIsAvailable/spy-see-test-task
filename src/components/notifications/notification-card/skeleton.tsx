import styles from "./styles.module.css";

export const NotificationSkeleton = () => {
  return (
    <li className={styles.skeleton}>
      <div className={styles.skeletonCircle} />
      <div className={styles.skeletonContent}>
        <div className={styles.skeletonLabel} />
        <div className={styles.skeletonDescription} />
      </div>
      <div className={styles.skeletonCircle} />
    </li>
  );
};
