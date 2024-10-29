import React from "react";
import type { ReactNode } from "react";
import { stringToConsistentId } from "@ulld/state/formatting/general";
import { getRandomId } from "@ulld/utilities/identity";
import type { AdmonitionContainerProps} from "./admonitionUtils.ts";
import { getIconName } from "./admonitionUtils.ts";
import { AdmonitionTitle } from "./admonitionTitle.tsx";
import { footerClassNames, getBodyClassNames, getContainerClassNames } from "./classNames.ts";

const getId = (props: AdmonitionContainerProps): string => {
    if (props.id) {
        return props.id;
    }
    if (typeof props.title === "string") {
        return stringToConsistentId(props.title, "admon");
    }
    return getRandomId();
};

export const AdmonitionContainer = (props: AdmonitionContainerProps): ReactNode => {
    const id = getId(props);

    const iconName = getIconName({
        icon: props.icon,
        type: props.type
    })

    const { body, title, dropdown, footer } = props;

    return (
        <div
            className={getContainerClassNames(props)}
            id={id}
        >
            <AdmonitionTitle 
                dropdown={dropdown}
                iconName={iconName}
                title={title}
            />
            <div
                className={getBodyClassNames(props)}
            >
                {body}
            </div>
            {footer ? (
                <div
                    className={footerClassNames}
                >
                    {footer}
                </div>
            ) : null}
        </div>
    );
};

AdmonitionContainer.displayName = "AdmonitionContainer";
