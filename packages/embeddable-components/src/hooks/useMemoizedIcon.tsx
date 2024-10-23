import type { ValidIconName } from "@ulld/types";
import { DynamicIcon } from "@ulld/icons";
import { useMemo } from "react";

export const useMemoizedIcon = (iconName: ValidIconName, className?: string) => {
      return useMemo(() => <DynamicIcon className={className} name={iconName}/>, [iconName, className])
}
