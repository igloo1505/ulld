import React, { ReactNode } from "react";
import { cn } from "../../utils/cn";

export interface SettingPageContainerProps {
    title?: ReactNode;
    children: ReactNode;
    className?: string;
}

export const SettingPageContainer = ({
    children,
    title,
    className,
}: SettingPageContainerProps) => {
    return (
        <div className={cn("@container/settings-container space-y-6", className)}>
            {title && <h1 className={"text-4xl font-bold border-b rounded pb-4 w-fit sm:pr-8"}>{title}</h1>}
            {children}
        </div>
    );
};

SettingPageContainer.displayName = "SettingPageContainer";
