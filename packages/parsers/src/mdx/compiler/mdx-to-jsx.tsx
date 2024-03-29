import { compile } from "@mdx-js/mdx"
import { z } from 'zod'
import { CompileOptions } from "@mdx-js/mdx";
import { MermaidConfigType, mermaidTheme } from "@ulld/utilities/defaults/defaultMermaidConfig"
import {parseMdxProps} from "@ulld/utilities/schemas/mdx/parseMdxStringProps"
/* import remarkMath from "remark-math"; */
/* import remarkGfm from "remark-gfm"; */
/* import rehypeMathjax from "rehype-mathjax/chtml"; */
/* import rehypeAutolinkHeadings from "rehype-autolink-headings"; */
/* import rehypePrettyCode from "rehype-pretty-code"; */
/* import emoji from "remark-emoji"; */
// import toc from "@jsdevtools/rehype-toc"
/* import rehypeSlug from "rehype-slug"; */
/* import rehypeVideo from "rehype-video"; */

export const mermaidConfig: MermaidConfigType = {
    output: 'svg',
    /* theme: { light: 'dark', dark: 'dark' }, */
    mermaid: {
        themeVariables: mermaidTheme.dark,
        theme: "base"
    }
}


const rehypePlugins: CompileOptions["rehypePlugins"] = [
            /* TODO: Add an embeded video component for this rehypeVideo that then utilizes the existing video element. */
        /*     [ */
        /*         rehypeVideo as any, */
        /*         { */
        /*             test: /\/(.*)(.mp4|.mov|.webm)$/, */
        /*             details: false, */
        /*         }, */
        /*     ], */
        /*     [rehypeMathjax as any, mathOptions], */
        /*     [ */
        /*         rehypePrettyCode as any, */
        /*         { */
        /*             keepBackground: false, */
        /*             theme: { */
        /*                 light: config?.code?.theme.light, */
        /*                 dark: config?.code?.theme.dark, */
        /*             }, */
        /*             onVisitLine(node: any) { */
        /*                 if (node.children.length === 0) { */
        /*                     node.children = [{ type: "text", value: " " }]; */
        /*                 } */
        /*             }, */
        /*             onVisitHighlightedLine(node: any) { */
        /*                 node.properties.className.push("line--highlighted"); */
        /*             }, */
        /*             onVisitHighlightedWord(node: any) { */
        /*                 node.properties.className = ["word--highlighted"]; */
        /*             }, */
        /*         }, */
        /*     ], */
        /*     [ */
        /*         rehypeAutolinkHeadings, */
        /*         { */
        /*             properties: { */
        /*                 className: ["subheading-anchor"], */
        /*                 ariaLabel: "Link to section", */
        /*             }, */
        /*         }, */
        /*     ], */
        /*     rehypeSlug, */
        ];
    const remarkPlugins: CompileOptions["remarkPlugins"] = [
    /* remarkMath, */
    /* remarkGfm, */
    /* [emoji as any, {}] */
];


export const parseMdxString = async ({ content }: z.input<typeof parseMdxProps>) => {
    let res = await compile(content, {
        outputFormat: "function-body",
        remarkPlugins,
        rehypePlugins,
    })
    return String(res)
}


