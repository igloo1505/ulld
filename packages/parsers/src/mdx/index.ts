import { serialize } from "next-mdx-remote/serialize"
import remarkMath from 'remark-math'
import remarkGfm from "remark-gfm"
import rehypeMathjax from 'rehype-mathjax/chtml'
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import emoji from "remark-emoji"
import rehypeSlug from "rehype-slug"
import rehypeVideo from 'rehype-video';
import { MDXRemoteSerializeResult } from "next-mdx-remote"
import { SerializeMdxConfig } from "./types"
import {ParsedAppConfig, getInternalConfig } from "@ulld/config"
import { mathOptions } from "@ulld/utilities"

export type MDXSerializeReturnType = MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>


export type MdxSerializeAvoidablePluginName = SerializeMdxConfig["dontLoadPlugins"]

type SerializeOptions = Parameters<typeof serialize>[1]


// WARN: Current mermaid isn't working in this method for some reason despite working ont he server in RSC's.

 
export const serializeMdxContent = async (s: string, rsc: boolean = true, serializeMdxConfig?: SerializeMdxConfig, _config?: ParsedAppConfig): Promise<MDXSerializeReturnType> => {
    console.log(`Serializing: 
${s}`)
    const config = _config || getInternalConfig()
    if(!config){
        throw new Error("No config was provided to the serializeMdxContent function")
    }
    const _rehypePlugins: NonNullable<NonNullable<SerializeOptions>["mdxOptions"]>["rehypePlugins"] = [
        /* TODO: Add an embeded video component for this rehypeVideo that then utilizes the existing video element. */
        [rehypeVideo as any, {
            test: /\/(.*)(.mp4|.mov|.webm)$/,
            details: false
        }],
        [rehypeMathjax, mathOptions],
        [
            rehypePrettyCode,
            {
                keepBackground: false,
                theme: {
                    light: config.code.theme.light,
                    dark: config.code.theme.dark
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
    ]
    const _remarkPlugins: NonNullable<NonNullable<SerializeOptions>["mdxOptions"]>["remarkPlugins"] = [
        remarkMath,
        remarkGfm,
        [emoji as any, {}],
    ]
    // if (!serializeMdxConfig?.dontLoadPlugins.includes("mermaid")) {
    //     _remarkPlugins.push([mdxMermaid, mermaidConfig],)
    // }
    return await serialize(s, {
        mdxOptions: {
            useDynamicImport: true,
            remarkPlugins: _remarkPlugins,
            rehypePlugins: _rehypePlugins
        },
        parseFrontmatter: serializeMdxConfig?.parseFrontMatter,
    })
}

