import React, { HTMLProps } from "react";
import clsx from "clsx";
import cn from "@ulld/utilities/cn";
import { Callout } from "fumadocs-ui/components/callout";
import {
    AlertTriangleIcon,
    AmpersandsIcon,
    BellIcon,
    InfoIcon,
    ShieldAlertIcon,
} from "lucide-react";

interface HintProps extends HTMLProps<HTMLDivElement> {
    note?: boolean;
    alias?: boolean;
    warn?: boolean;
    error?: boolean;
    title?: string;
    callout?: boolean;
    defaultTitle?: boolean
}

const Hint = ({
    children,
    note,
    alias,
    warn,
    error,
    callout = true,
    title,
    defaultTitle,
    ...props
}: HintProps) => {
    const label = note ? "Note" : alias ? "Alias" : "Hint";
    if (callout || title || defaultTitle) {
        const iconBaseClasses = "size-5 text-card"
        let icon = warn ? (
            <AlertTriangleIcon className={cn(iconBaseClasses, "fill-orange-500")}/>
        ) : alias ? (
            <AmpersandsIcon className={cn(iconBaseClasses, "text-lime-500 dark:text-lime-400")}/>
        ) : error ? (
            <ShieldAlertIcon className={cn(iconBaseClasses, "fill-red-500")}/>
        ) : note ? (
            <BellIcon className={cn(iconBaseClasses, "fill-primary text-primary")}/>
        ) : (
            <InfoIcon className={cn(iconBaseClasses, "fill-blue-500")}/>
        );
        return (
            <Callout
                title={title ? title : defaultTitle ? label : undefined}
                type={error ? "error" : warn ? "warn" : "info"}
                icon={icon}
            >
                {children}
            </Callout>
        );
    }
    return (
        <div {...props} className={cn("text-sm mb-6", props.className)}>
            <span
                className={clsx(
                    "font-bold",
                    label === "Hint"
                        ? "text-hint"
                        : label === "Alias"
                            ? "text-violet-400"
                            : "text-sky-400",
                )}
            >{`${label}:`}</span>
            <span className={"text-sm pl-2 [&_*]:inline whitespace-break-spaces"}>
                {children}
            </span>
        </div>
    );
};

Hint.displayName = "Hint";

export default Hint;
