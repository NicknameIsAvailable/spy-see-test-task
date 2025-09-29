/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from './User';
export type GroupedNotification = {
    type: string;
    target_id: (string | null);
    user: User;
    text: string;
    created: string;
    image?: (string | null);
    users: Array<User>;
    other_count: number;
};

