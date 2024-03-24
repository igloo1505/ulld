import { Separator } from "@ulld/tailwind/separator";
import React from "react";

interface MainHeadingProps {
  children: string;
  subtitle?: string;
}

export const MainHeading = ({
  children,
  subtitle,
}: MainHeadingProps) => {
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

MainHeading.displayName = "MainHeading";

