import { stringToConsistentId } from "@ulld/state/formatting/general";
import type { AdmonitionType, ValidIconName } from "@ulld/types";
import { getRandomId } from "@ulld/utilities/identity";
import type { AdmonitionProps } from "@ulld/utilities/types";
import type { HTMLProps, ReactNode } from "react";

export interface AdmonitionTitleProps extends HTMLProps<HTMLDivElement> {
  title: string;
  admonitionType?: AdmonitionType;
  dropdown?: boolean;
  titleBold?: boolean;
  icon?: ValidIconName;
}

export interface AdmonitionContainerProps extends Omit<AdmonitionProps, "children" | "title" | "footer" | "icon"> {
    footer: ReactNode
    body: ReactNode
    title: ReactNode
    icon?: ValidIconName | false
}

export const getIconName = (
    props: Pick<AdmonitionContainerProps, "icon" | "type">,
): ValidIconName | undefined => {
    if(props.icon === false) {
        return
    }
    if (props.icon) return props.icon;
    if (props.type !== "plain") {
        return props.type;
    }
};


export const getAdmonitionId = (props: AdmonitionProps): string => {
    if (props.id) {
        return props.id;
    }
    if (typeof props.title === "string") {
        return stringToConsistentId(props.title, "admon");
    }
    return getRandomId();
};