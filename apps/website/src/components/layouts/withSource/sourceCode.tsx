import { HTMLMotionProps, MotionValue, motion, useMotionValueEvent } from "framer-motion";
import React, { ForwardedRef, forwardRef, useEffect, useState } from "react";
import { codeToHtml } from "shiki";

interface SourceCodeProps extends HTMLMotionProps<"div"> {
    content: string;
}

const SourceCode = forwardRef(
    (
        { content, ...props }: SourceCodeProps,
        ref: ForwardedRef<HTMLDivElement>,
    ) => {
        const [source, setSource] = useState<string | null | undefined>(null);

        const gatherSource = async () => {
            const sourceCode = await codeToHtml(content, {
                theme: "dracula",
                lang: "mdx",
                mergeWhitespaces: false,
                colorReplacements: {
                    "#282A36": "hsl(var(--background))",
                },
            });
            setSource(sourceCode);
        };

        useEffect(() => {
            gatherSource();
        }, [content]);

        return (
            <motion.div
                className={
                    "w-full max-w-full h-full max-h-full overflow-y-auto block not-prose [&_pre]:max-w-full py-6 pr-4 pl-6 text-sm [&_code]:max-w-full [&_code]:min-w-full [&_code]:whitespace-break-spaces [&_.line]:min-h-4 [&_code]:!bg-background"
                }
                dangerouslySetInnerHTML={source ? { __html: source } : undefined}
                {...props}
                ref={ref}
                style={{
                    
                }}
            />
        );
    },
);

SourceCode.displayName = "SourceCode";

export default SourceCode;
