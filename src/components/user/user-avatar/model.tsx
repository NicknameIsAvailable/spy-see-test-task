export interface AvatarProps {
  url?: string;
  className?: string;
}

export interface AvatarGroupProps {
  urls?: AvatarProps["url"][];
}
