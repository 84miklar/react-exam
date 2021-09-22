import React, { useEffect } from "react";
import { NavigationDesktop } from "./navigationDesktop/NavigationDesktop";
import { NavigationMobile } from "./navigationMobile/NavigationMobile";
import { useWindowDimensions } from "../../shared/hooks/useWindowDimensions";
export const Navigation = () => {
  const { width, height } = useWindowDimensions();
  const displayNavigation = () => {
    return width <= 700 ? <NavigationMobile /> : <NavigationDesktop />;
  };

  return <div>{displayNavigation()}</div>;
};
