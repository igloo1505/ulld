import { stringToConsistentId } from "@ulld/state/formatting/general";
import type { ValidIconName } from "@ulld/types";
import { getRandomId } from "@ulld/utilities/identity";
import type { AdmonitionProps } from "@ulld/utilities/types";
import type { ReactNode } from "react";

export interface AdmonitionTitleProps
    extends Pick<AdmonitionContainerProps, "title" | "dropdown" | "titleBold"> {
    iconName?: ValidIconName;
    onClick?: () => void
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
