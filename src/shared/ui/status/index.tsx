import { FC } from "react";
import { StatusIcons, StatusProps } from "./model";
import styles from "./styles.module.css";
import { NotFoundIcon } from "../icons/not-found";

const statusIcons: StatusIcons = {
  200: <NotFoundIcon />,
  404: <NotFoundIcon />,
  403: <NotFoundIcon />,
  402: <NotFoundIcon />,
  401: <NotFoundIcon />,
  500: <NotFoundIcon />,
};

const Status: FC<StatusProps> = ({ label, description, statusCode = 200 }) => {
  return (
    <div className={styles.status}>
      <div className={styles.icon}>{statusIcons[statusCode]}</div>
      <h3 className={styles.label}>{label}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Status;
