import React, { ReactNode } from "react";
import { cn } from "../../utils/cn.js";

export interface SettingPageContainerProps {
    title?: ReactNode;
    children: ReactNode;
    className?: string;
    titleClassName?: string;
}

export const SettingPageContainer = ({
    children,
    title,
    className,
    titleClassName,
}: SettingPageContainerProps) => {
    return (
        <div className={cn("@container/settings-container space-y-6", className)}>
            {title && (
                <h1
                    className={cn(
                        "text-4xl font-bold rounded pb-4 w-fit sm:pr-8",
                        titleClassName,
                    )}
                >
                    {title}
                </h1>
            )}
            {children}
        </div>
    );
};

SettingPageContainer.displayName = "SettingPageContainer";
