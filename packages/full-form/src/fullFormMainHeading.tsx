import { Separator } from "@ulld/tailwind/separator";
import React from "react";

interface FullFormMainHeadingProps {
  children: string;
  subtitle?: string;
}

export const FullFormMainHeading = ({
  children,
  subtitle,
}: FullFormMainHeadingProps) => {
  return (
    <>
      <div>
        <h3 className="text-lg font-medium">{children}</h3>
        {subtitle && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>
      <Separator />
    </>
  );
};

FullFormMainHeading.displayName = "FullFormMainHeading";
