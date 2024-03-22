import { compile } from "@mdx-js/mdx"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import emoji from "remark-emoji"
import { z } from 'zod'
import {MermaidConfigType, mermaidTheme} from "@ulld/utilities/defaults/mermaid"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeMathjax from "rehype-mathjax"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import rehypeVideo from 'rehype-video';
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
})



export const parseMdxString = async ({ content }: z.input<typeof parseMdxProps>) => {
    let res = await compile(content, {
        outputFormat: "function-body"
    })
    console.log("content in parseMdxString: ", content)
    return String(res)
}


