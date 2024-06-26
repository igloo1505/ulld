import React, { HTMLProps, ReactNode } from "react";
import { H1 } from "../../heading";
import clsx from "clsx";
import { TitleProps } from "./titleProps";


export const Title = ({
    children,
    subtitle,
    subtitleMuted = true,
    subtitleProps,
    ...props
}: TitleProps) => {
    return (
        <div
            {...props}
            className={clsx(
                "not-prose w-full h-fit flex flex-col justify-center items-center mb-8",
                props.className,
            )}
        >
            <H1 className={"!mb-0"}>{children}</H1>
            {subtitle && (
                <span
                    {...subtitleProps}
                    className={clsx(
                        "text-sm not-prose",
                        subtitleMuted && "text-muted-foreground",
                        subtitleProps?.className,
                    )}
                >
                    {subtitle}
                </span>
            )}
        </div>
    );
};

Title.displayName = "Title";
