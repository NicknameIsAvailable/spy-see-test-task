import Status from "@/shared/ui/status";
import styles from "./styles.module.css";

export const AllNotificationsContent = () => {
  return (
    <div className={styles.content}>
      <Status
        statusCode={404}
        label="Пока нет информации"
        description="Репосты, отметки &laquo;Нравится&raquo; и&nbsp;многое другое&nbsp;&mdash; здесь вы&nbsp;найдете все взаимодействия с&nbsp;контентом."
      />
    </div>
  );
};
