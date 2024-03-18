import React from "react";
import { FullFormMainHeading } from "../../fullFormMainHeading";

export interface FullFormSidePanelProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export const FullFormSidePanel = ({
  children,
  title,
  subtitle,
}: FullFormSidePanelProps) => {
  return (
    <aside className="w-full max-w-[calc(100vw-4rem)] lg:max-w-[300px] border border-border px-4 py-4 rounded">
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
