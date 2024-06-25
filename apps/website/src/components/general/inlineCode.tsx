import React from "react";
import { cn } from "@ulld/utilities/cn";

interface InlineCodeProps {
    children: string;
    className?: string;
}

const InlineCode = ({ children, className }: InlineCodeProps) => {
    return (
        <code
            className={cn(
                "no-code-before relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
                className,
            )}
        >
            {children}
        </code>
    );
};

InlineCode.displayName = "InlineCode";

export default InlineCode;
