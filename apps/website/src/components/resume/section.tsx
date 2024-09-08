import React, { ReactNode } from "react";
import ResumeSectionLabel from "./sectionLabel";
import clsx from "clsx";
import { cn } from "@ulld/utilities/cn";
import ResumeSectionDescription from "./sectionDescription";

interface ResumeSectionProps {
    label: ReactNode;
    dir: "left" | "right";
    children: ReactNode;
    className?: string;
    desc?: string
    descDelay?: number
}

const ResumeSection = ({
    label,
    dir,
    children,
    desc,
    descDelay=0,
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
            {desc && <ResumeSectionDescription 
                    desc={desc}
                    dir={dir}
                    delay={descDelay}
                />}
            <div className={cn("w-full", className)}>{children}</div>
        </div>
    );
};

ResumeSection.displayName = "ResumeSection";

export default ResumeSection;
