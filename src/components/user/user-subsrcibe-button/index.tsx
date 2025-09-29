"use client";

import Button from "@/shared/ui/button";
import { ButtonProps } from "@/shared/ui/button/model";
import { useState } from "react";

const renderBtnText = (isSubscribed: boolean): string => {
  return !isSubscribed ? "Подписаться" : "Подписан";
};

const getVariant = (isSubscribed: boolean): ButtonProps["variant"] => {
  return !isSubscribed ? "default" : "secondary";
};

export const SubscribeButton = () => {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const handleToggleIsSubscribed = () => setIsSubscribed(!isSubscribed);

  return (
    <Button
      variant={getVariant(isSubscribed)}
      onClick={handleToggleIsSubscribed}
      size="sm"
    >
      {renderBtnText(isSubscribed)}
    </Button>
  );
};
