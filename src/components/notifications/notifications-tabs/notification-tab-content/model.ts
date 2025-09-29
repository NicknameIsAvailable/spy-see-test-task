type NotificationFilter = "all" | "communication" | "actions"

export interface NotificationTabContentProps {
    filterBy?: NotificationFilter;
}