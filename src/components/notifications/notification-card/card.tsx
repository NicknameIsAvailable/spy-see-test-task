import { FC, use } from "react";
import styles from "./styles.module.css";
import { NotificationCardProps } from "./model";
import Users from "@/components/user";
import Post from "@/components/post";
import ContextMenu from "@/shared/ui/context-menu";
import { timeAgo } from "@/shared/utils/timeAgo";
import { User } from "@/api";

const renderUsers = (user: User, users?: User[]) => {
  if (users) {
    const avatars = users.map((user) => user.avatar);
    return <Users.AvatarGroup urls={avatars} />;
  }
  return <Users.Avatar url={user.avatar} />;
};

const getUserNames = (user: User, users?: User[]): string => {
  if (users) {
    if (users.length <= 2) {
      return users.map((user) => user.name).join(", ");
    }
    const remainingCount = users.length - 2;
    return `${users[0].name}, ${users[1].name} и еще ${remainingCount}`;
  }
  return user.name;
};

const renderImage = (image?: string | null) => {
  if (image) return <Post.Preview url={image} />;
};

const renderSubscribtionButtonOrPreview = (
  type: string,
  image?: string | null
) => {
  if (type === "subscription") return <Users.SubscribeButton />;
  return renderImage(image);
};

export const NotificationCard: FC<NotificationCardProps> = ({ data }) => {
  console.log(data);
  return (
    <li className={styles.notification}>
      {renderUsers(data.user, data.users)}
      <div className={styles.info}>
        <p className={styles.text}>
          <span className={styles.author}>
            {getUserNames(data.user, data.users)}{" "}
          </span>
          {data.text}
        </p>
        <time className={styles.time}>{timeAgo(data.created)}</time>
      </div>
      <div className={styles.actions}>
        {renderSubscribtionButtonOrPreview(data.type, data?.image)}
        <ContextMenu />
      </div>
    </li>
  );
};
