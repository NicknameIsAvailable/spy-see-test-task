import { ReactNode } from "react";

export type StatusCode = 200 | 404 | 403 | 402 |401 | 500

export interface StatusProps {
    label: string;
    description: string;
    statusCode: StatusCode;
}

export type StatusIcons = {
  [K in StatusCode]: ReactNode;
};
