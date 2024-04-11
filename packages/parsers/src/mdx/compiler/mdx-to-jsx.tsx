import { compile } from "@mdx-js/mdx";
import { z } from "zod";
import { CompileOptions } from "@mdx-js/mdx";
import {
    MermaidConfigType,
    mermaidTheme,
} from "@ulld/utilities/defaults/defaultMermaidConfig";
import { parseMdxProps } from "@ulld/utilities/schemas/mdx/parseMdxStringProps";
import { mathOptions } from "@ulld/utilities/defaults/markdownUniversalOptions";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeMathjax from "rehype-mathjax/chtml";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import emoji from "remark-emoji";
/* import toc from "@jsdevtools/rehype-toc" */
import rehypeSlug from "rehype-slug";
import rehypeVideo from "rehype-video";
import { getConfig } from "@ulld/developer/getConfig";
import { ParsedAppConfig } from "@ulld/configschema/types";

export const mermaidConfig: MermaidConfigType = {
    output: "svg",
    /* theme: { light: 'dark', dark: 'dark' }, */
    mermaid: {
        themeVariables: mermaidTheme.dark,
        theme: "base",
    },
};

const rehypePlugins = (
    config?: ParsedAppConfig,
): CompileOptions["rehypePlugins"] => {
    return [
        /* TODO: Add an embeded video component for this rehypeVideo that then utilizes the existing video element. */
        [
            rehypeVideo as any,
            {
                test: /\/(.*)(.mp4|.mov|.webm)$/,
                details: false,
            },
        ],
        [rehypeMathjax as any, mathOptions],
        [
            rehypePrettyCode as any,
            {
                keepBackground: false,
                theme: {
                    light: config?.code?.theme?.light || "material-theme-lighter",
                    dark: config?.code?.theme?.dark || "dracula",
                },
                onVisitLine(node: any) {
                    if (node.children.length === 0) {
                        node.children = [{ type: "text", value: " " }];
                    }
                },
                onVisitHighlightedLine(node: any) {
                    node.properties.className.push("line--highlighted");
                },
                onVisitHighlightedWord(node: any) {
                    node.properties.className = ["word--highlighted"];
                },
            },
        ],
        [
            rehypeAutolinkHeadings,
            {
                properties: {
                    className: ["subheading-anchor"],
                    ariaLabel: "Link to section",
                },
            },
        ],
        rehypeSlug,
    ];
};
const remarkPlugins = (
    config?: ParsedAppConfig,
): CompileOptions["remarkPlugins"] => {
    return [remarkMath, remarkGfm, [emoji as any, {}]];
};

export const parseMdxString = async ({
    content,
}: z.input<typeof parseMdxProps>) => {
    const config = getConfig();
    let res = await compile(content, {
        outputFormat: "function-body",
        remarkPlugins: remarkPlugins(config),
        rehypePlugins: rehypePlugins(config),
        development: process.env.NODE_ENV === "development",
        /* baseUrl: import.meta.url */
    });
    return String(res);
};
