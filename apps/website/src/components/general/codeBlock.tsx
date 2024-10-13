"use client";
/* import { useObserveChildren } from "@ulld/hooks/useObserveChildren"; */
import React, { HTMLProps, ReactNode, useEffect, useRef } from "react";
import type { BundledLanguage, BundledTheme } from "shiki";
import { cn } from "@ulld/utilities/cn";
import { getAllRegexMatches } from "@ulld/utilities/getAllRegexMatches";
import { replaceContentByMatch } from "@ulld/utilities/replaceContentByMatch";
import { getStaticDataByString } from "#/utils/getStaticDataByString";
/* import { useShikiParse } from "@ulld/hooks/useShikiParse"; */
import {
    Pre,
    CodeBlock as CodeBlockEm,
    /* CodeBlockProps, */
} from "fumadocs-ui/components/codeblock";

interface CodeBlockProps extends Omit<HTMLProps<HTMLPreElement>, "title"> {
    content: string;
    language?: BundledLanguage;
    theme?: BundledTheme;
    maxWidth?: string;
    title?: string;
    desc?: string;
    icon?: string
    lang?: string
}

/* PRIORITY: Handle this to use links from staticData page in CodeBlocks to make sure all links remain up to date app wide. */
const replaceLinks = (content: string): string => {
    let matches = getAllRegexMatches(content, /!!link\:(?<body>[\w|\.]*)!!/gm);
    let c = content;
    for (const match of matches) {
        c = replaceContentByMatch(c, match, "body", (matchValue: string) => {
            let valueFound = getStaticDataByString(matchValue);
            if (typeof valueFound !== "string") {
                throw new Error(
                    `No value found for link from matchValue ${matchValue}`,
                );
            }
            return valueFound;
        });
    }
    return c;
};

const CodeBlock = ({
    language = "mdx",
    theme = "dracula",
    maxWidth = "768px",
    content,
    title,
    desc,
    icon,
    className,
    lang,
    ...props
}: CodeBlockProps) => {
    const body = replaceLinks(content);
    /* const source = useShikiParse(body, theme, language); */
    /* const ref = useRef<HTMLDivElement>(null!); */

    /* const getMaxWidth = (): string => { */
    /*     if (ref && "current" in ref) { */
    /*         let rect = ref.current?.getBoundingClientRect(); */
    /*         if (rect) { */
    /*             return `${Math.floor(rect.width - 32)}px`; */
    /*         } */
    /*     } */
    /*     return "40vw"; */
    /* }; */

    /* const setMaxWidth = (mw?: string) => { */
    /*     let newMaxWidth = mw ? mw : getMaxWidth(); */
    /*     if (newMaxWidth && ref && "current" in ref) { */
    /*         let ems = ref.current?.querySelectorAll(".line"); */
    /*         ems?.forEach((a) => { */
    /*             if ("style" in a) { */
    /*                 /* @ts-ignore */
    /*                 a.style.maxWidth = newMaxWidth; */
    /*             } */
    /*         }); */
    /*     } */
    /* }; */

    /* const handleResize = () => { */
    /*     setMaxWidth(); */
    /* }; */

    /* useEffect(() => { */
    /*     let mw = maxWidth ? maxWidth : getMaxWidth(); */
    /*     setMaxWidth(mw); */
    /* }, [maxWidth]); */

    /* useObserveChildren( */
    /*     () => setMaxWidth(), */
    /*     { */
    /*         once: true, */
    /*     }, */
    /*     ref, */
    /* ); */

    /* useEffect(() => { */
    /*     window.addEventListener("resize", handleResize); */
    /*     return () => window.removeEventListener("resize", handleResize); */
    /* }, []); */

    return (
        <CodeBlockEm lang={lang} title={title} icon={icon} allowCopy={true}>
            <Pre lang={lang} className={cn("max-h-[400px]", className)} {...props}>
                {body}
            </Pre>
        </CodeBlockEm>
    );
};

CodeBlock.displayName = "CodeBlock";

export default CodeBlock;
