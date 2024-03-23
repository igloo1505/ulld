import { compile } from "@mdx-js/mdx"
import { z } from 'zod'
import {MermaidConfigType, mermaidTheme} from "@ulld/utilities/defaults/defaultMermaidConfig"


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


