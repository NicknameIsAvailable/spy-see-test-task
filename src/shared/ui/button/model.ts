import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "default" | "secondary";
    size?: "sm" | "base" | "md";
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
}