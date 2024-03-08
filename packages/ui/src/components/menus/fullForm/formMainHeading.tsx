import { Separator } from "#/components/shad/ui/separator";
import React from "react";

interface FullFormMainHeadingProps {
    children: string;
    subtitle?: string
}


const FullFormMainHeading = ({ children, subtitle }: FullFormMainHeadingProps) => {
    return (
        <>
            <div className="space-y-0.5">
                <h2 className="text-2xl font-bold tracking-tight">{children}</h2>
                {subtitle && <p className="text-muted-foreground">
                    {subtitle}
                </p>}
            </div>
            <Separator />
        </>
    );
};

FullFormMainHeading.displayName = "FullFormMainHeading";

export default FullFormMainHeading;
