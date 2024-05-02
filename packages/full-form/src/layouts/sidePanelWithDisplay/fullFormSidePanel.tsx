import React from "react";
import { FullFormMainHeading } from "../../fullFormMainHeading";
import { cn } from "@ulld/utilities/cn";

export interface FullFormSidePanelProps {
    children: React.ReactNode;
    title: string;
    subtitle?: string;
    className?: string;
}

export const FullFormSidePanel = ({
    children,
    title,
    subtitle,
    className,
}: FullFormSidePanelProps) => {
    return (
        <aside
            className={cn(
                "w-full max-w-full border border-border px-4 py-4 rounded bg-card shadow-md hover:shadow-sm transition-shadow duration-200",
                className,
            )}
        >
            <div className={"w-full h-full space-y-6"}>
                {title && (
                    <FullFormMainHeading subtitle={subtitle}>{title}</FullFormMainHeading>
                )}
                <div className={"text-card !mt-0"}>
                {children}
                </div>
            </div>
        </aside>
    );
};

FullFormSidePanel.displayName = "FullFormSidePanel";
