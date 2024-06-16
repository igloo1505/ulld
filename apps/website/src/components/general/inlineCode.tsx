import React, { ReactNode } from "react";
import { cn } from "@ulld/utilities/cn";

interface InlineCodeProps {
    children: ReactNode;
    className?: string;
}

const InlineCode = ({ children, className }: InlineCodeProps) => {
    return (
        <code
            className={cn(
                "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
                className,
            )}
        >
            {children}
        </code>
    );
};

InlineCode.displayName = "InlineCode";

export default InlineCode;
