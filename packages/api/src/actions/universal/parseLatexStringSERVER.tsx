import { mathjaxParserOptionsSchema } from "@ulld/parsers/math/mathjaxParserOptionsParsing"
import { z } from "zod"
import { serverClient } from "../../trpc/serverClient"
import { AppendStyleSheet } from "./appendStyleSheet"
import { getRandomId } from "@ulld/utilities/utils/identity"
import React from "react"

interface ParseLatexStringProps {
    content: string,
    appendStylesToId: string,
    autoWrap?: boolean
    options?: z.input<typeof mathjaxParserOptionsSchema>
}

const autoWrapMath = (content: string) => {
    let c = content.trim()
    if(!c.startsWith("$$") && !c.endsWith("$$")) {
        return `$$
${content}
$$`
    }  
    return content
    }


export const parseLatexString = async ({content, appendStylesToId, autoWrap, options}: ParseLatexStringProps) => {
let math = autoWrap === false ? content : autoWrapMath(content)

const id = appendStylesToId ? appendStylesToId : getRandomId()
let res = await serverClient.equations.mathStringToLatex({
    content: math,
    appendStylesToId: id,
    options: {
        ...options,
        autoWrap: false
    }
})

const _stylesId = `${id}-styles`

return {
    html: res.content,
    Styles: res.styles ? () => <AppendStyleSheet content={ res.styles } stylesId={appendStylesToId} /> : undefined,
    removeStyleSheet: () => {
            if (typeof document === "undefined") return
            document.getElementById(_stylesId)?.remove()
        },
    containerId: id
    }
}
