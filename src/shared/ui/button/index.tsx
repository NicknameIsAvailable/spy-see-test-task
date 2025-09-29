import { FC } from "react";
import { ButtonProps } from "./model";
import styles from "./styles.module.css";

const Button: FC<ButtonProps> = ({
  variant = "default",
  size = "base",
  iconLeft,
  iconRight,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      data-variant={variant}
      data-size={size}
      className={styles.button}
    >
      <span>{iconLeft}</span>
      {children}
      <span>{iconRight}</span>
    </button>
  );
};

export default Button;
