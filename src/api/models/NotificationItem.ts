/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
import type { User } from './User';
export type NotificationItem = {
    type: string;
    target_id: (string | null);
    user: User;
    users?: User[];
    text: string;
    created: string;
    image?: (string | null);
};

