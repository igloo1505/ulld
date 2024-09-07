import React, { ReactNode } from "react";
import ResumeSectionLabel from "./sectionLabel";
import clsx from "clsx";
import { cn } from "@ulld/utilities/cn";

interface ResumeSectionProps {
    label: ReactNode;
    dir: "left" | "right";
    children: ReactNode;
    className?: string;
}

const ResumeSection = ({
    label,
    dir,
    children,
    className,
}: ResumeSectionProps) => {
    return (
        <div className={"w-full px-4 space-y-6"}>
            <div
                className={clsx(
                    "flex flex-row",
                    dir === "right" ? "justify-end pr-8" : "justify-start pl-8",
                )}
            >
                <ResumeSectionLabel dir={dir}>{label}</ResumeSectionLabel>
            </div>
            <div className={cn("w-full", className)}>{children}</div>
        </div>
    );
};

ResumeSection.displayName = "ResumeSection";

export default ResumeSection;
