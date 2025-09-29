/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotificationItem } from './NotificationItem';
export type NotificationGroupResponse = {
    type: string;
    target_id: string;
    total: number;
    limit: number;
    offset: number;
    results: Array<NotificationItem>;
};

