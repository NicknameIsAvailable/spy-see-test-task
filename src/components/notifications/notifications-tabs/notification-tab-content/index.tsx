"use client";

import { DefaultService, GroupedNotification, NotificationItem } from "@/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { NotificationSkeleton } from "../../notification-card/skeleton";
import { NotificationCard } from "../../notification-card";
import Status from "@/shared/ui/status";
import { FC, useEffect, useRef } from "react";
import { NotificationTabContentProps } from "./model";

const QUERY_KEY = "notifications";
const LIMIT = 10;

const renderNotifications = (
  items: (NotificationItem | GroupedNotification)[] | undefined
) => {
  return items?.map((item) => (
    <NotificationCard key={item.created} data={item} />
  ));
};

const renderSkeleton = () => {
  return new Array(9)
    .fill(null)
    .map((_, index) => <NotificationSkeleton key={index} />);
};

const filters = {
  all: (items: (NotificationItem | GroupedNotification)[] | undefined) => items,
  communication: (
    items: (NotificationItem | GroupedNotification)[] | undefined
  ) => items?.filter((item) => item.type === "comment" || item.type === "like"),
  actions: (items: (NotificationItem | GroupedNotification)[] | undefined) =>
    items?.filter(
      (item) => item.type === "repost" || item.type === "subscribe"
    ),
};

const filterNotifications = (
  items: (NotificationItem | GroupedNotification)[] | undefined,
  filterBy: NotificationTabContentProps["filterBy"]
) => {
  if (filterBy) return filters[filterBy](items);
};

export const NotificationTabContent: FC<NotificationTabContentProps> = ({
  filterBy = "all",
}) => {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEY, filterBy],
    queryFn: ({ pageParam = 0 }) =>
      DefaultService.getNotificationsNotificationsGet(LIMIT, pageParam),
    getNextPageParam: (lastPage) => {
      const nextOffset = (lastPage.offset ?? 0) + (lastPage.limit ?? LIMIT);
      if (nextOffset >= (lastPage.total ?? 0)) return undefined;
      return nextOffset;
    },
    initialPageParam: 0,
  });

  const allItems = data?.pages.flatMap((p) => p.results) || [];
  const filteredData = filterNotifications(allItems, filterBy);

  const loadMoreRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const el = loadMoreRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { rootMargin: "200px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isError) {
    return (
      <Status
        statusCode={500}
        label="Пока нет информации"
        description="Репосты, отметки &laquo;Нравится&raquo; и&nbsp;многое другое&nbsp;&mdash; здесь вы&nbsp;найдете все взаимодействия с&nbsp;контентом."
      />
    );
  }

  return (
    <ul>
      {isLoading && renderSkeleton()}
      {data && renderNotifications(filteredData)}
      {isFetchingNextPage && renderSkeleton()}
      <li style={{ listStyle: "none" }} ref={loadMoreRef} />
    </ul>
  );
};
