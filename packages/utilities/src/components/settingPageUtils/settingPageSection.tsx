import React, { ReactNode } from "react";
import { cn } from "../../utils/cn.js";


export interface SettingPageSectionProps {
    title: ReactNode;
    desc?: ReactNode;
    children: ReactNode;
    classes?: {
        title?: string;
        desc?: string;
    };
}


export const SettingPageSection = ({
    title,
    desc,
    children,
    classes,
}: SettingPageSectionProps) => {
    return (
        <div className={"settings-section w-full h-fit"}>
            <h2
                className={cn(
                    "text-2xl font-semibold",
                    !desc && "mb-4",
                    classes?.title,
                )}
            >
                {title}
            </h2>
            {desc && (
                <div className={cn("text-muted-foreground text-sm mb-4", classes?.desc)}>
                    {desc}
                </div>
            )}
            {children}
        </div>
    );
};

SettingPageSection.displayName = "SettingPageSection";
