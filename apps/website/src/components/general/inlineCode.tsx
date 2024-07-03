import React, { HTMLProps, ReactNode } from "react";
import { cn } from "@ulld/utilities/cn";

interface InlineCodeProps extends HTMLProps<HTMLElement>{
    children: ReactNode;
    className?: string;
}

const InlineCode = ({ children, className, ...props }: InlineCodeProps) => {
    return (
        <code
            className={cn(
                "no-code-before relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
                className,
            )}
            {...props}
        >
            {children}
        </code>
    );
};

InlineCode.displayName = "InlineCode";

export default InlineCode;
