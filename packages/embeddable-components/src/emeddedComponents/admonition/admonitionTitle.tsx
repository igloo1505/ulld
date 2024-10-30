import React, { type ReactNode } from "react";
import { DynamicIcon } from "@ulld/icons";
import type {
    AdmonitionTitleProps,
} from "./admonitionUtils";
import {
    getTitleContainerClassNames,
    iconClassNames,
    iconContainerClassNames,
} from "./classNames";

export const AdmonitionTitle = (props: AdmonitionTitleProps): ReactNode => {
    const { title, dropdown, iconName,..._props } = props;
    delete _props.titleBold

    if (!title && !dropdown) {
        return null;
    }

    return (
        <div {..._props} className={getTitleContainerClassNames(props)}>
            {iconName ? (
                <div
                    // Need this div to avoid the layout shift if the icon isn't rendereed before the title.
                    className={iconContainerClassNames}
                >
                    <DynamicIcon className={iconClassNames} name={iconName} />
                </div>
            ) : null}
            {title}
        </div>
    );
};

AdmonitionTitle.displayName = "AdmonitionTitle";
