import React from "react";
import type { ReactNode } from "react";
import { DynamicIcon } from "@ulld/icons/dynamic";
import { stringToConsistentId } from "@ulld/state/formatting/general";
import { getRandomId } from "@ulld/utilities/identity";
import { cn } from "@ulld/utilities/cn";
import type { AdmonitionContainerProps} from "./admonitionUtils.ts";
import { getIconName } from "./admonitionUtils.ts";

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

    const { body, type, title, dropdown, sidebar, footer, center } = props;

    return (
        <div
            className={cn(
                `rounded-lg my-4 admonition overflow-hidden group/fold h-fit open`,
                type || "note",
                sidebar &&
                "w-full @[1024px]/mdx:w-[33%] @[1024px]/mdx:float-right @[1024px]/mdx:ml-4",
            )}
            id={id}
        >
            {Boolean(title || dropdown) && (
                <div className="title text-lg px-4 py-2 rounded-tl-lg rounded-tr-lg  relative z-[10] grid place-items-center not-prose grid-cols-1 min-h-[44px]">
                    <div className="w-full inline-block align-baseline [&_.mdx]:inline-block">
                        {iconName ? (
                            <div
                                // Need this div to avoid the layout shift if the icon isn't rendereed before the title.
                                className="w-4 h-4 inline mr-2"
                            >
                            <DynamicIcon
                                className="w-4 h-4 inline"
                                name={iconName}
                            />
                            </div>
                        ) : null}
                        {title}
                    </div>
                </div>
            )}
            <div
                className={cn(
                    "prose dark:prose-invert p-4 body w-full min-w-full h-auto bg-gray-100 dark:bg-gray-800",
                    type === "plain" && "bg-transparent dark:bg-transparent",
                    center && "flex flex-col justify-center items-center gap-4 text-center"
                )}
            >
                {body}
            </div>
            {footer ? (
                <div
                    className="w-full py-3 px-3 text-sm text-muted-foreground bg-muted"
                >
                    {footer}
                </div>
            ) : null}
        </div>
    );
};

AdmonitionContainer.displayName = "AdmonitionContainer";
