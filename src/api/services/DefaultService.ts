/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotificationGroupResponse } from '../models/NotificationGroupResponse';
import type { NotificationResponse } from '../models/NotificationResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * Get Notifications
     * @param limit
     * @param offset
     * @returns NotificationResponse Successful Response
     * @throws ApiError
     */
    public static getNotificationsNotificationsGet(
        limit: number = 5,
        offset?: number,
    ): CancelablePromise<NotificationResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/notifications',
            query: {
                'limit': limit,
                'offset': offset,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Group Details
     * @param notifType
     * @param targetId
     * @param limit
     * @param offset
     * @returns NotificationGroupResponse Successful Response
     * @throws ApiError
     */
    public static getGroupDetailsNotificationsGroupNotifTypeTargetIdGet(
        notifType: string,
        targetId: string,
        limit: number = 5,
        offset?: number,
    ): CancelablePromise<NotificationGroupResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/notifications/group/{notif_type}/{target_id}',
            path: {
                'notif_type': notifType,
                'target_id': targetId,
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
