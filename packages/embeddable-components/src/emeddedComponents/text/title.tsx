import React, { HTMLProps, ReactNode } from "react";
import { H1 } from "../../heading";
import clsx from "clsx";

interface TitleProps extends HTMLProps<HTMLDivElement> {
    children: ReactNode;
    subtitle?: ReactNode;
    subtitleMuted?: boolean;
    subtitleProps?: HTMLProps<HTMLSpanElement>;
}

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
                "w-full h-fit flex flex-col justify-center items-center mb-8",
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
                    {children}
                </span>
            )}
        </div>
    );
};

Title.displayName = "Title";
