import { useObserveChildren } from "@ulld/hooks/useObserveChildren";
import { useShikiParse } from "@ulld/hooks/useShikiParse";
import React, { HTMLProps, useEffect, useRef } from "react";
import { BundledLanguage, BundledTheme } from "shiki";
import { cn } from "@ulld/utilities/cn";
import { getAllRegexMatches } from "@ulld/utilities/getAllRegexMatches";
import { replaceContentByMatch } from "@ulld/utilities/replaceContentByMatch";
import { getStaticDataByString } from "#/utils/getStaticDataByString";

interface CodeBlockProps extends HTMLProps<HTMLDivElement> {
    children: string;
    language?: BundledLanguage;
    theme?: BundledTheme;
    maxWidth?: string;
}

/* PRIORITY: Handle this to use links from staticData page in CodeBlocks to make sure all links remain up to date app wide. */
const replaceLinks = (content: string): string => {
    let matches = getAllRegexMatches(content, /\[link\:(?<body>[\w|\.]*)\]/);
    let c = content;
    for (const match of matches) {
        c = replaceContentByMatch(c, match, "body", (matchValue: string) => {
           let valueFound = getStaticDataByString(matchValue)
            if(typeof valueFound !== "string"){
                throw new Error(`No value found for link from matchValue ${matchValue}`)
            }
            return valueFound
        });
    }
    return content;
};

const CodeBlock = ({
    children,
    language = "mdx",
    theme = "dracula",
    maxWidth = "768px",
    ...props
}: CodeBlockProps) => {
    const body = replaceLinks(children);
    const source = useShikiParse(body, theme, language);
    const ref = useRef<HTMLDivElement>(null!);
    const getMaxWidth = (): string => {
        if (ref && "current" in ref) {
            let rect = ref.current?.getBoundingClientRect();
            if (rect) {
                return `${Math.floor(rect.width - 32)}px`;
            }
        }
        return "40vw";
    };

    const setMaxWidth = (mw?: string) => {
        let newMaxWidth = mw ? mw : getMaxWidth();
        if (newMaxWidth && ref && "current" in ref) {
            let ems = ref.current?.querySelectorAll(".line");
            ems?.forEach((a) => {
                if ("style" in a) {
                    /* @ts-ignore */
                    a.style.maxWidth = newMaxWidth;
                }
            });
        }
    };

    const handleResize = () => {
        setMaxWidth();
    };

    useEffect(() => {
        let mw = maxWidth ? maxWidth : getMaxWidth();
        setMaxWidth(mw);
    }, [maxWidth]);
    useObserveChildren(
        () => setMaxWidth(),
        {
            once: true,
        },
        ref,
    );

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            {...props}
            className={cn(
                "w-full max-w-full h-full max-h-full overflow-y-auto block not-prose [&_pre]:max-w-full py-6 pr-4 pl-6 text-sm [&_code]:max-w-full [&_code]:min-w-full [&_code]:whitespace-break-spaces [&_.line]:min-h-4 [&_code]:!bg-background no-scrollbar",
                props.className,
            )}
            dangerouslySetInnerHTML={
                source.content ? { __html: source.content } : undefined
            }
            ref={ref}
        />
    );
};

CodeBlock.displayName = "CodeBlock";

export default CodeBlock;
