/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GroupedNotification } from './GroupedNotification';
import type { NotificationItem } from './NotificationItem';
export type NotificationResponse = {
    total: number;
    limit: number;
    offset: number;
    results: Array<(NotificationItem | GroupedNotification)>;
};

