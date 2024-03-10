import { compile } from "@mdx-js/mdx"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import emoji from "remark-emoji"
import { z } from 'zod'
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeMathjax from "rehype-mathjax"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import rehypeVideo from 'rehype-video';
import { MermaidConfigType, mathOptions, mermaidTheme } from "@ulld/utilities"
// @ts-ignore
import mdxMermaid from "mdx-mermaid"
import { appConfigSchema } from "@ulld/configschema"


export const mermaidConfig: MermaidConfigType = {
    output: 'svg',
    /* theme: { light: 'dark', dark: 'dark' }, */
    mermaid: {
        themeVariables: mermaidTheme.dark,
        theme: "base"
    }
}


const parseMdxProps = z.object({
    content: z.string(),
    rsc: z.boolean().default(false),
    config: appConfigSchema
})



export const parseMdxTestParser = async ({ content, rsc, config }: z.input<typeof parseMdxProps>) => {
    return String(await compile(content, {
        outputFormat: 'function-body',
        remarkPlugins: [
            remarkMath,
            remarkGfm,
            [emoji as any, {}],
            [mdxMermaid, mermaidConfig],
        ],
        rehypePlugins: [
            /* TODO: Add an embeded video component for this rehypeVideo that then utilizes the existing video element. */
            [rehypeVideo, {
                test: /\/(.*)(.mp4|.mov|.webm)$/,
                details: false
            }],
            [rehypeMathjax as any, mathOptions],
            [
                rehypePrettyCode,
                {
                    keepBackground: false,
                    theme: {
                        light: config.code?.theme?.light,
                        dark: config.code?.theme?.dark
                    },
                    onVisitLine(node: any) {
                        if (node.children.length === 0) {
                            node.children = [{ type: "text", value: " " }]
                        }
                    },
                    onVisitHighlightedLine(node: any) {
                        node.properties.className.push("line--highlighted")
                    },
                    onVisitHighlightedWord(node: any) {
                        node.properties.className = ["word--highlighted"]
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
            /* toc */
        ]

        /* …otherOptions */
    }))
}


