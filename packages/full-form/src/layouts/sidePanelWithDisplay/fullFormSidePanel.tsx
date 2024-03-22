import React from "react";
import { FullFormMainHeading } from "../../fullFormMainHeading";
import { cn } from "@ulld/utilities/cn"

export interface FullFormSidePanelProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
className?: string
}

export const FullFormSidePanel = ({
  children,
  title,
  subtitle,
    className
}: FullFormSidePanelProps) => {
  return (
    <aside className={cn("w-full max-w-[calc(100vw-4rem)] lg:max-w-[300px] border border-border px-4 py-4 rounded", className)}>
      <div className={"w-full h-full space-y-6"}>
        {title && (
          <FullFormMainHeading subtitle={subtitle}>{title}</FullFormMainHeading>
        )}
        <div className={"space-y-8"}>{children}</div>
      </div>
    </aside>
  );
};

FullFormSidePanel.displayName = "FullFormSidePanel";
