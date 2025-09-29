import { pluralize } from "./pluralize";

export function timeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();

  if (diffMs < 0) return "в будущем 👀";

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) return `${seconds} ${pluralize(seconds, ["секунда", "секунды", "секунд"])} назад`;
  if (minutes < 60) return `${minutes} ${pluralize(minutes, ["минута", "минуты", "минут"])} назад`;
  if (hours < 24) return `${hours} ${pluralize(hours, ["час", "часа", "часов"])} назад`;
  if (days < 7) return `${days} ${pluralize(days, ["день", "дня", "дней"])} назад`;
  if (weeks < 5) return `${weeks} ${pluralize(weeks, ["неделя", "недели", "недель"])} назад`;
  if (months < 12) return `${months} ${pluralize(months, ["месяц", "месяца", "месяцев"])} назад`;
  return `${years} ${pluralize(years, ["год", "года", "лет"])} назад`;
}