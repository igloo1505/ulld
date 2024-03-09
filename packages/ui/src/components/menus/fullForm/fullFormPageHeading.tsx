import { Separator } from "@ulld/tailwind/base";
import React from "react";

interface FullFormPageHeadingProps {
    title: string;
    subtitle?: string;
}

export const FullFormPageHeading = ({ title, subtitle }: FullFormPageHeadingProps) => {
    return (
        <>
            <div>
                <h3 className="text-lg font-medium">{title}</h3>
                {subtitle && <p className="text-sm text-muted-foreground">
                    {subtitle}
                </p>}
            </div>
            <Separator />
        </>
    );
};

FullFormPageHeading.displayName = "FullFormPageHeading";
