import { DynamicIcon, ValidIconName } from "@ulld/icons";
import { useMemo } from "react";

export const useMemoizedIcon = (iconName: ValidIconName, className?: string) => {
      return useMemo(() => <DynamicIcon className={className} name={iconName}/>, [iconName])
}
